import { User } from "../entities/User";
import { MyContext } from "src/types";
import {
  Resolver,
  Mutation,
  Arg,
  Ctx,
  InputType,
  Field,
  ObjectType,
  Query,
} from "type-graphql";
import argon2 from "argon2";
import { sendEmail } from "../utils/sendEmail";
import { v4 } from "uuid";

declare module "express-session" {
  export interface SessionData {
    userId: number;
  }
}

@InputType()
class UsernamePassInput {
  @Field()
  username: string;
  @Field()
  email: string;
  @Field()
  password: string;
}

@ObjectType()
class FieldError {
  @Field()
  field: string;

  @Field()
  message: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;
}

@Resolver()
export class UserResolver {
  @Mutation(() => UserResponse)
  async changePassword(
    @Arg("token") token: string,
    @Arg("newPassword") newPassword: string,
    @Ctx() { req, redis }: MyContext
  ): Promise<UserResponse> {
    const userId = await redis.get("forget-password:" + token);

    if (!userId) {
      return {
        errors: [
          {
            field: "token",
            message:
              "This link is invalid or has expired, please visit here to change your password.",
          },
        ],
      };
    }

    const userIdNum = parseInt(userId);
    const user = await User.findOne(userIdNum);

    if (!user) {
      return {
        errors: [
          {
            field: "newPassword",
            message:
              "The account whose password you are trying to change no longer exists.",
          },
        ],
      };
    }

    if (newPassword.length <= 2) {
      return {
        errors: [
          {
            field: "newPassword",
            message: "Length must be greater than 2!",
          },
        ],
      };
    }

    const hashedPassword = await argon2.hash(newPassword);
    await User.update({ id: userIdNum }, { password: hashedPassword });
    await redis.del("forget-password:" + token);
    req.session.userId = user.id;

    return { user };
  }

  @Mutation(() => Boolean)
  async forgotPassword(
    @Arg("email") email: string,
    @Ctx() { redis }: MyContext
  ) {
    //cant' do findOne(email) bc email is not primary key
    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      return true;
    }

    const token = v4();
    await redis.set(
      "forget-password:" + token,
      user.id,
      "ex",
      1000 * 60 * 60 * 24 * 3
    );
    const anchorTag = `<a href="http://localhost:3000/change-password/${token}">Reset Password</a>`;
    await sendEmail(email, anchorTag);
    return true;
  }

  @Query(() => User, { nullable: true })
  me(@Ctx() { req }: MyContext) {
    if (!req.session.userId) {
      return null;
    }

    return User.findOne(req.session.userId);
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg("options") options: UsernamePassInput,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    if (!options.email.includes("@")) {
      return {
        errors: [
          {
            field: "email",
            message: "Invalid email!",
          },
        ],
      };
    }

    if (options.username.length <= 2) {
      return {
        errors: [
          {
            field: "username",
            message: "Length must be greater than 2!",
          },
        ],
      };
    }

    if (options.username.includes("@")) {
      return {
        errors: [
          {
            field: "username",
            message: "Username cannot include @!",
          },
        ],
      };
    }

    if (options.password.length <= 2) {
      return {
        errors: [
          {
            field: "password",
            message: "Length must be greater than 2!",
          },
        ],
      };
    }

    const hashedPassword = await argon2.hash(options.password);

    try {
      const user = await User.create({
        username: options.username,
        password: hashedPassword,
        email: options.email,
      }).save();

      req.session.userId = user.id;

      return {
        user,
      };
    } catch (err) {
      if (err.code === "23505") {
        if (err.detail.includes("email")) {
          return {
            errors: [
              {
                field: "email",
                message: "This email is already in use!",
              },
            ],
          };
        } else {
          return {
            errors: [
              {
                field: "username",
                message: "Username taken, try another!",
              },
            ],
          };
        }
      } else {
        return {
          errors: [
            {
              field: "email",
              message: "An error has occured, please try again!",
            },
            {
              field: "username",
              message: "An error has occured, please try again!",
            },
            {
              field: "password",
              message: "An error has occured, please try again!",
            },
          ],
        };
      }
    }
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("usernameOrEmail") usernameOrEmail: string,
    @Arg("password") password: string,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    const user = await User.findOne(
      usernameOrEmail.includes("@")
        ? { where: { email: usernameOrEmail } }
        : { where: { username: usernameOrEmail } }
    );

    if (!user) {
      return {
        errors: [
          {
            field: "usernameOrEmail",
            message: "That username does not exist!",
          },
        ],
      };
    }

    const valid = await argon2.verify(user.password, password);

    if (!valid) {
      return {
        errors: [
          {
            field: "password",
            message: "Incorrect password!",
          },
        ],
      };
    }

    req.session.userId = user.id;
    //you can attach any variable you want for session, but use declare at top

    return {
      user,
    };
  }

  @Mutation(() => Boolean)
  logout(@Ctx() { req, res }: MyContext) {
    return new Promise((resolve) =>
      req.session.destroy((err) => {
        if (err) {
          resolve(false);
          return;
        }

        res.clearCookie("qid");
        resolve(true);
      })
    );
  }
}

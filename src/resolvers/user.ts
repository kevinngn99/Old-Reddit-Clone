import { User } from "../entities/User";
import { MyContext } from "src/types";
import { Resolver, Mutation, Arg, Ctx, InputType, Field, ObjectType } from "type-graphql";
import argon2 from "argon2";

@InputType()
class UsernamePassInput {
    @Field()
    username: string;
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
  async register(
    @Arg('options') options: UsernamePassInput,
    @Ctx() { em }: MyContext
  ): Promise<UserResponse> {
    if (options.username.length <= 2) {
        return {
            errors: [
                {
                    field: 'Username',
                    message: 'Length must be greater than 2!',
                }
            ]
        }
    }

    if (options.password.length <= 2) {
        return {
            errors: [
                {
                    field: 'Password',
                    message: 'Length must be greater than 2!',
                }
            ]
        }
    }

    const hashedPassword = await argon2.hash(options.password);
    const user = em.create(User, {
        username: options.username,
        password: hashedPassword
    });
    
    try {
        await em.persistAndFlush(user);
    }
    catch(err) {
        if (err.code === '23505') {
            return {
                errors: [
                    {
                        field: "Username",
                        message: 'Username taken, try another!'
                    }
                ]
            }
        }
    }

    return {
        user
    };
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg('options') options: UsernamePassInput,
    @Ctx() { em }: MyContext
  ): Promise<UserResponse> {
    const user = await em.findOne(User, { username: options.username });

    if (!user) {
        return {
            errors: [
                {
                    field: 'Username',
                    message: 'That username does not exist!',
                }
            ]
        }
    }

    const valid = await argon2.verify(user.password, options.password);

    if (!valid) {
        return {
            errors: [
                {
                    field: 'Password',
                    message: 'Incorrect password!',
                }
            ]
        }
    }

    return {
        user
    };
  }
}

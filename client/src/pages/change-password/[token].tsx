import { Box, Button, Flex, Link } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { NextPage } from "next";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { createClient, useMutation } from "urql";
import { InputField } from "../../components/InputField";
import { Wrapper } from "../../components/Wrapper";
import { createUrqlClient } from "../../utils/createUrqlClient";
import NextLink from "next/link";

const CHANGE_PASSWORD_MUTATION = `
mutation ChangePassword($token: String!, $newPassword: String!) {
  changePassword(token: $token, newPassword: $newPassword) {
    errors {
      field
      message
    }
    user {
      id
      username
    }
  }
}
`;

const ChangePassword: NextPage<{ token: string }> = ({ token }) => {
  const router = useRouter();
  const [, changePassword] = useMutation(CHANGE_PASSWORD_MUTATION);
  const [tokenError, setTokenError] = useState(false);

  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ newPassword: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await changePassword({
            newPassword: values.newPassword,
            token: token,
          });
          if (response.data?.changePassword.errors) {
            const errorMap: Record<string, string> = {};

            response.data.changePassword.errors.forEach(
              ({ field, message }) => {
                errorMap[field] = message;
              }
            );

            if ("token" in errorMap) {
              setTokenError(true);
            }

            setErrors(errorMap);
          } else if (response.data?.changePassword.user) {
            router.push("/");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="newPassword"
              placeholder="new password"
              label="New Password"
              type="password"
            />
            {tokenError ? (
              <Flex>
                <Box mt={2} style={{ color: "#E53E3E", fontSize: "0.875rem" }}>
                  This link is invalid or has expired, please visit
                  <NextLink href="/forgot-password">
                    <Link mx={1} style={{ fontWeight: "bold" }}>
                      HERE
                    </Link>
                  </NextLink>
                  to change your password.
                </Box>
              </Flex>
            ) : null}
            <Button
              mt={4}
              type="submit"
              colorScheme="teal"
              isLoading={isSubmitting}
            >
              Change Password
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

ChangePassword.getInitialProps = ({ query }) => {
  return {
    token: query.token as string,
  };
};

export default withUrqlClient(createUrqlClient)(ChangePassword);

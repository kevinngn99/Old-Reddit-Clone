import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useMutation } from "urql";
import { InputField } from "../components/InputField";
import { Wrapper } from "../components/Wrapper";
import { createUrqlClient } from "../utils/createUrqlClient";

const FORGOT_PASSWORD_MUTATION = `
mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
`;

const ForgotPassword: React.FC<{}> = ({}) => {
  const router = useRouter();
  const [, forgotPassword] = useMutation(FORGOT_PASSWORD_MUTATION);
  const [reset, setReset] = useState(false);

  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ usernameOrEmail: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          await forgotPassword(values);
          setReset(true);
        }}
      >
        {({ isSubmitting }) =>
          reset ? (
            <Box>If an account with that email exists, a link has been sent to reset your password.</Box>
          ) : (
            <Form>
              <InputField name="email" placeholder="email" label="Email" />
              <Button
                mt={4}
                type="submit"
                colorScheme="teal"
                isLoading={isSubmitting}
              >
                Reset Password
              </Button>
            </Form>
          )
        }
      </Formik>
    </Wrapper>
  );
};

export default withUrqlClient(createUrqlClient)(ForgotPassword);

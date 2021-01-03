import React from "react";
import { Box, Link, Flex, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { useMutation, useQuery } from "urql";
import { isServer } from "../utils/isServer";

interface NavBarProps {}

const ME_QUERY = `
query Me {
  me {
    id
    username
  }
}
`;

const LOGOUT_MUTATION = `
mutation {
  logout
}
`;

const NavBar: React.FC<NavBarProps> = ({}) => {
  const [{ data, fetching }] = useQuery({query: ME_QUERY, pause: isServer()});
  const [{ fetching: logoutFetching }, logout] = useMutation(LOGOUT_MUTATION);
  let body;

  if (fetching) {
    body = null;
  } else if (!data?.me) {
    body = (
      <>
        <NextLink href="/login">
          <Link mr={2}>Login</Link>
        </NextLink>
        <NextLink href="/register">
          <Link>Register</Link>
        </NextLink>
      </>
    );
  } else {
    body = (
      <Flex>
        <Box mr={2}>{data.me.username}</Box>
        <Button
          onClick={() => logout()}
          isLoading={logoutFetching}
          variant="link"
        >
          Logout
        </Button>
      </Flex>
    );
  }

  return (
    <Flex bg="tan" p={4}>
      <Box ml="auto">{body}</Box>
    </Flex>
  );
};

export default NavBar;

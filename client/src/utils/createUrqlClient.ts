import { cacheExchange } from "@urql/exchange-graphcache";
import { dedupExchange, fetchExchange, gql } from "urql";

const LOGIN_MUTATION = `
mutation Login($username: String!, $password: String!) {
  login(options: { username: $username, password: $password}) {
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

const REGISTER_MUTATION = `
mutation Register($username: String!, $password: String!) {
  register(options: { username: $username, password: $password}) {
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

const ME_QUERY = gql`
  query Me {
    me {
      id
      username
    }
  }
`;

export const createUrqlClient = (ssrExchange: any) => ({
  url: "http://localhost:4000/graphql",
  fetchOptions: {
    credentials: "include" as const,
  },
  exchanges: [
    dedupExchange,
    cacheExchange({
      updates: {
        Mutation: {
          logout: (result, args, cache, info) => {
            cache.updateQuery({ query: ME_QUERY }, (data) => {
              return {
                me: null,
              };
            });
          },
          login: (result, args, cache, info) => {
            cache.updateQuery({ query: ME_QUERY }, (data) => {
              if (result.login.errors) {
                return {
                  me: null,
                };
              } else {
                return {
                  me: result.login.user,
                };
              }
            });
          },
          register: (result, args, cache, info) => {
            cache.updateQuery({ query: ME_QUERY }, (data) => {
              if (result.register.errors) {
                return {
                  me: null,
                };
              } else {
                return {
                  me: result.register.user,
                };
              }
            });
          },
        },
      },
    }),
    ssrExchange,
    fetchExchange,
  ],
});

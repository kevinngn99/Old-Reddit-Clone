import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { cacheExchange, Cache, QueryInput, query } from "@urql/exchange-graphcache";
import { Provider, createClient, dedupExchange, fetchExchange, gql } from "urql";
import theme from "../theme";

function customUpdateQuery<Result, Query>(cache: Cache, queryInput: QueryInput, result: any, fn: (r: Result, q: Query) => Query) {
  return cache.updateQuery(queryInput, data => fn(result, data as any) as any);
}

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

const client = createClient({
  url: "http://localhost:4000/graphql",
  fetchOptions: {
    credentials: "include",
  },
  exchanges: [dedupExchange, cacheExchange({
    updates: {
      Mutation: {
        login: (result, args, cache, info) => {
          cache.updateQuery({query: ME_QUERY}, data => {
            if (result.login.errors) {
              return data;
            }
            else {
              return {
                me: result.login.user
              }
            }
          })
        },
        register: (result, args, cache, info) => {
          cache.updateQuery({query: ME_QUERY}, data => {
            if (result.register.errors) {
              return data;
            }
            else {
              return {
                me: result.register.user
              }
            }
          })
        }
      }
    }
  }), fetchExchange]
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <ChakraProvider resetCSS theme={theme}>
        <ColorModeProvider
          options={{
            useSystemColorMode: true,
          }}
        >
          <Component {...pageProps} />
        </ColorModeProvider>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;

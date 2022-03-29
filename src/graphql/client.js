import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.GRAPHQL_ENDPOINT || 'http://localhost:4000',
  cache: new InMemoryCache()
});

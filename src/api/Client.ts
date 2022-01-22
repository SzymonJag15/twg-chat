import { ApolloClient, InMemoryCache } from '@apollo/client';
import { API_URL, AUTH_TOKEN } from "@env";

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${AUTH_TOKEN}`
  }
});

export default client;
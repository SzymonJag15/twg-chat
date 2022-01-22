import { ApolloClient, InMemoryCache } from '@apollo/client';
import { AUTH_TOKEN, API_URL } from '@/constants/api';

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${AUTH_TOKEN}`
  }
});

export default client;
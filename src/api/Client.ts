import AsyncStorage from '@react-native-async-storage/async-storage';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { API_URL, AUTH_TOKEN } from "@env";

const httpLink = createHttpLink({
  uri: API_URL,
});

const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    return {
      headers: {
        ...headers,
        //to-do with token
        Authorization: token ? `Bearer ${AUTH_TOKEN}` : `Bearer ${AUTH_TOKEN}`,
      }
    } 
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default client;
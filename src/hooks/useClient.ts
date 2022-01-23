import useLogin from '@/hooks/useLogin';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { API_URL } from "@env";

const generateClient = () => {
  const { token } = useLogin();

  if (token) {
    const client = new ApolloClient({
      uri: API_URL,
      cache: new InMemoryCache(),
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return client;
  }
}

const client = generateClient();
export default client;
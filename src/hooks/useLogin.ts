import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from "react";

const useLogin = () => {
  const [token, setToken] = useState('');

  const getToken = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      const parseToken: string = JSON.parse(token);
      return setToken(parseToken);
    }
  };

  void getToken();

  return {
    token
  }
};

export default useLogin;

import React from 'react';
import { Text, View, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { BASE_COLORS, ROUNDED } from '@/constants/styles';
import { RootStackProps } from '@/types/routes';
import { LoginFormValues } from './Login.types';
import { LOGIN_USER } from '@/api/mutation';
import { useMutation } from '@apollo/client';
import BaseTitle from '@/components/base/BaseTitle/BaseTitle';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }: RootStackProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const [loginUser, { loading }] = useMutation(LOGIN_USER);

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const response = await loginUser({
        variables: { email: data.email, password: data.password },
      });
      if (response) {
        await AsyncStorage.setItem('token', JSON.stringify(response.data.loginUser.token));
        return navigation.navigate('Rooms');
      }
    } catch (error) {
      Alert.alert('Dane nieprawidłowe, proszę spróbuj jeszcze raz.');
    }
  };

  return (
    <View style={styles.container}>
      <BaseTitle title="Welcome back" />
      <Text style={styles.subtitle}>Log in and stay in touch with everyone!</Text>

      <View style={styles.spaceBetweenForm}>
        <View>
          <Text style={styles.label}>e-mail address</Text>
          <Controller
            control={control}
            name="email"
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                accessibilityLabel="e-mail address"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.input}
              />
            )}
          />
          {errors.email && <Text style={styles.errorMessage}>This is required.</Text>}

          <Text style={styles.label}>password</Text>
          <Controller
            control={control}
            name="password"
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry
                style={styles.input}
              />
            )}
          />
          {errors.password && <Text style={styles.errorMessage}>This is required.</Text>}
        </View>

        <View>
          <Pressable style={styles.submitButton} onPress={handleSubmit(onSubmit)}>
            {loading ? (
              <Text style={styles.submitButtonText}>Loading...</Text>
            ) : (
              <Text style={styles.submitButtonText}>Log in</Text>
            )}
          </Pressable>

          <View style={styles.signUpCTAWrapper}>
            <Text style={styles.signUpText}>Dont have an account?</Text>
            <Pressable onPress={() => navigation.navigate('Rooms')}>
              <Text style={styles.signUpCTA}>Sign up</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingBottom: 40,
    paddingHorizontal: 16,
    backgroundColor: BASE_COLORS.darkBlue,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '700',
    color: BASE_COLORS.white,
    marginBottom: 35,
  },
  spaceBetweenForm: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: BASE_COLORS.white,
    marginBottom: 5,
  },
  input: {
    width: 310,
    height: 50,
    borderWidth: 1,
    borderColor: BASE_COLORS.darkBlue,
    backgroundColor: BASE_COLORS.white,
    borderRadius: ROUNDED.input,
    marginBottom: 16,
    paddingHorizontal: 15,
  },
  submitButton: {
    width: 310,
    height: 50,
    borderRadius: ROUNDED.small,
    backgroundColor: BASE_COLORS.darkViolet,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: BASE_COLORS.white,
  },
  errorMessage: {
    color: BASE_COLORS.error,
  },
  signUpCTAWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 14,
  },
  signUpText: {
    color: BASE_COLORS.white,
    marginRight: 5,
  },
  signUpCTA: {
    fontWeight: '700',
    color: BASE_COLORS.darkViolet,
  },
});

export default Login;

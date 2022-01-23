import React from 'react';
import { Text, View, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { BASE_COLORS, ROUNDED } from '@/constants/styles';
import { RootStackProps } from '@/types/routes';
import { REGISTER_USER } from '@/api/mutation';
import { useMutation } from '@apollo/client';
import BaseTitle from '@/components/base/BaseTitle/BaseTitle';

import { RegisterFormValues } from './Register.types';
import { ScrollView } from 'react-native-gesture-handler';

const Register = ({ navigation }: RootStackProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      passwordConfirmation: '',
    },
  });
  const [registerUser, { loading }] = useMutation(REGISTER_USER);

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      const response = await registerUser({
        variables: {
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          password: data.password,
          passwordConfirmation: data.passwordConfirmation,
        },
      });
      if (response) console.log(response);
    } catch (error) {
      Alert.alert('Data incorrect, please try again.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <BaseTitle title="Create account" />

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

          <Text style={styles.label}>first name</Text>
          <Controller
            control={control}
            name="firstName"
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.input}
              />
            )}
          />
          {errors.firstName && <Text style={styles.errorMessage}>This is required.</Text>}

          <Text style={styles.label}>last name</Text>
          <Controller
            control={control}
            name="lastName"
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.input}
              />
            )}
          />
          {errors.lastName && <Text style={styles.errorMessage}>This is required.</Text>}

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

          <Text style={styles.label}>password confirmation</Text>
          <Controller
            control={control}
            name="passwordConfirmation"
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
          {errors.passwordConfirmation && (
            <Text style={styles.errorMessage}>This is required.</Text>
          )}
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
            <Text style={styles.signUpText}>Already have an acccount?</Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text style={styles.signUpCTA}>Log in</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
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

export default Register;

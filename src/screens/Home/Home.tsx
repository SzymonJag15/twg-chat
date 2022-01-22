import { RootStackProps } from '@/types/routes';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Home = ({ navigation }: RootStackProps): JSX.Element => (
  <View style={styles.container}>
    <Text>Hello Home!</Text>
    <Button title="About" onPress={() => navigation.navigate('About')} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;

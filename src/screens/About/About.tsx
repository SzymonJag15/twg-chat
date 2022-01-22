import { RootStackProps } from '@/types/routes';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const About = ({ navigation }: RootStackProps): JSX.Element => (
  <View style={styles.container}>
    <Text>Hello About!</Text>
    <Button title="Home" onPress={() => navigation.navigate('Home')} />
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

export default About;

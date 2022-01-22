import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import About from '@/screens/About/About';
import { createStackNavigator } from '@react-navigation/stack';
import Rooms from '@/screens/Rooms/Rooms';

const RootStack = createStackNavigator();

const Router = (): JSX.Element => (
  <NavigationContainer>
    <RootStack.Navigator>
      <RootStack.Screen name="Rooms" component={Rooms} />
      <RootStack.Screen name="About" component={About} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default Router;

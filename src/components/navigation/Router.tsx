import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from '@/screens/Home/Home';
import About from '@/screens/About/About';
import { createStackNavigator } from '@react-navigation/stack';

const RootStack = createStackNavigator();

const Router = (): JSX.Element => (
  <NavigationContainer>
    <RootStack.Navigator>
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="About" component={About} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default Router;

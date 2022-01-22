import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Rooms from '@/screens/Rooms/Rooms';
import Room from '@/screens/Room/Room';

const RootStack = createStackNavigator();

const Router = (): JSX.Element => (
  <NavigationContainer>
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name="Rooms" component={Rooms} />
      <RootStack.Screen name="Room" component={Room} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default Router;

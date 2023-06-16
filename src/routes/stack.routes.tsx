import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Welcome} from '../screens/Welcome';
import {AppTabRoutes} from './tab.routes';

const Stack = createStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Home" component={AppTabRoutes} />
    </Stack.Navigator>
  );
}

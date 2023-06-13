import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Home} from '../screens/Home';
import {Welcome} from '../screens/Welcome';

const Stack = createStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Initial"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  );
}

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {TabIcon} from '../components/TabIcon';
import {Home} from '../screens/Home';
import {Statistic} from '../screens/Statistic';

const Tab = createBottomTabNavigator();

export function AppTabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#1C1E1B',
          position: 'absolute',
          bottom: 10,
          left: 50,
          right: 50,
          borderRadius: 32,
          borderColor: 'transparent',
        },
      }}>
      <Tab.Screen
        name="Initial"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarInactiveTintColor: '#4F504D',
          tabBarActiveTintColor: '#f4a460',
          tabBarIcon: ({color}) => TabIcon({color}).Home,
        }}
      />

      <Tab.Screen
        name="Statistic"
        component={Statistic}
        options={{
          headerShown: false,
          tabBarLabel: 'Statistic',
          tabBarInactiveTintColor: '#4F504D',
          tabBarActiveTintColor: '#f4a460',
          tabBarIcon: ({color}) => TabIcon({color}).Graphics,
        }}
      />
    </Tab.Navigator>
  );
}

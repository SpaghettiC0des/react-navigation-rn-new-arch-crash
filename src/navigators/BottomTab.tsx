import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabParamsList} from './types';
import {Navigators} from '../constants/Navigation';
import {Tab1StackNavigator} from './Tab1Stack';
import {Tab2StackNavigator} from './Tab2Stack';
import {Tab3StackNavigator} from './Tab3Stack';

const {Navigator, Screen} = createBottomTabNavigator<BottomTabParamsList>();

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Tab1StackNavigator} />
      <Stack.Screen name="Notifications" component={Tab2StackNavigator} />
      <Stack.Screen name="Profile" component={Tab3StackNavigator} />
    </Stack.Navigator>
  );
}

export const BottomTabNavigator = () => {
  return (
    // <GestureHandlerRootView style={{flex: 1}}>
    <Navigator
      id={Navigators.BottomTab}
      detachInactiveScreens={false}
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name={Navigators.Tab1Stack} component={Tab1StackNavigator} />
      <Screen name={Navigators.Tab2Stack} component={Tab2StackNavigator} />
      <Screen name={Navigators.Tab3Stack} component={Tab3StackNavigator} />
    </Navigator>
    // </GestureHandlerRootView>
  );
};

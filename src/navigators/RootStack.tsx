import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamsList} from './types';
import {Navigators} from '../constants/Navigation';
import {Tab1StackNavigator} from './Tab1Stack';
import {Tab2StackNavigator} from './Tab2Stack';
import {Tab3StackNavigator} from './Tab3Stack';

const {Navigator, Screen} = createStackNavigator<RootStackParamsList>();

export const RootStackNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name={Navigators.Tab1Stack} component={Tab1StackNavigator} />
      <Screen name={Navigators.Tab2Stack} component={Tab2StackNavigator} />
      <Screen name={Navigators.Tab3Stack} component={Tab3StackNavigator} />
    </Navigator>
  );
};

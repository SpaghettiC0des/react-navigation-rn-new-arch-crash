import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';

import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import React from 'react';
import {Navigators, Tab2Screens} from '../constants/Navigation';
import {Tab2MainScreen} from '../screens';
import {BottomTabParamsList, Tab2StackParamsList} from './types';

const {Navigator, Screen} = createStackNavigator<Tab2StackParamsList>();

type Props = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<Tab2StackParamsList, Tab2Screens.MainScreen>,
    BottomTabNavigationProp<BottomTabParamsList>
  >;
  route: RouteProp<Tab2StackParamsList, Tab2Screens.MainScreen>;
};

export const Tab2StackNavigator = ({}: Props) => {
  return (
    <Navigator
      id={Navigators.Tab2Stack}
      screenOptions={{
        gestureEnabled: false,
      }}>
      <Screen name={Tab2Screens.MainScreen} component={Tab2MainScreen} />
    </Navigator>
  );
};

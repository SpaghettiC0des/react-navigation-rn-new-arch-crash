import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import {Navigators, Tab2Screens} from '../constants/Navigation';
import {Tab2MainScreen} from '../screens';
import {BottomTabParamsList, Tab2StackParamsList} from './types';

const {Navigator, Screen} = createNativeStackNavigator<Tab2StackParamsList>();

type Props = {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<Tab2StackParamsList, Tab2Screens.MainScreen>,
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

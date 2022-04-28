import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import {Navigators, Tab3Screens} from '../constants/Navigation';
import {Tab3MainScreen} from '../screens';
import {Tab3Screen2} from '../screens/tab3/Screen2';
import {BottomTabParamsList, Tab3StackParamsList} from './types';

const {Navigator, Screen} = createNativeStackNavigator<Tab3StackParamsList>();

type Props = {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<Tab3StackParamsList, Tab3Screens.MainScreen>,
    BottomTabNavigationProp<BottomTabParamsList>
  >;
  route: RouteProp<Tab3StackParamsList, Tab3Screens.MainScreen>;
};

export const Tab3StackNavigator = ({}: Props) => {
  return (
    <Navigator
      id={Navigators.Tab3Stack}
      screenOptions={{
        gestureEnabled: false,
      }}>
      <Screen name={Tab3Screens.MainScreen} component={Tab3MainScreen} />
      <Screen name={Tab3Screens.Screen2} component={Tab3Screen2} />
    </Navigator>
  );
};

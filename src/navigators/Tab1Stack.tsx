import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import {Navigators, Tab1Screens} from '../constants/Navigation';
import {Tab1MainScreen} from '../screens';
import {Tab1Screen2} from '../screens/tab1/Screen2';
import {BottomTabParamsList, Tab1StackParamsList} from './types';

const {Navigator, Screen} = createNativeStackNavigator<Tab1StackParamsList>();

type Props = {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<Tab1StackParamsList, Tab1Screens.MainScreen>,
    BottomTabNavigationProp<BottomTabParamsList>
  >;
  route: RouteProp<Tab1StackParamsList, Tab1Screens.MainScreen>;
};

export const Tab1StackNavigator = ({}: Props) => {
  return (
    <Navigator
      id={Navigators.Tab1Stack}
      screenOptions={{
        gestureEnabled: false,
      }}>
      <Screen name={Tab1Screens.MainScreen} component={Tab1MainScreen} />
      <Screen name={Tab1Screens.Screen2} component={Tab1Screen2} />
    </Navigator>
  );
};

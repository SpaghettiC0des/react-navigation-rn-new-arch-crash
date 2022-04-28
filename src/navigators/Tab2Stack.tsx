import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import {Navigators, Tab2Screens, Tab3Screens} from '../constants/Navigation';
import {Tab1MainScreen} from '../screens';
import {
  BottomTabParamsList,
  Tab2StackParamsList,
  Tab3StackParamsList,
} from './types';

const {Navigator, Screen} = createNativeStackNavigator<Tab2StackParamsList>();

type Props = {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<Tab3StackParamsList, Tab3Screens.Tab3MainScreen>,
    BottomTabNavigationProp<BottomTabParamsList>
  >;
  route: RouteProp<Tab3StackParamsList, Tab3Screens.Tab3MainScreen>;
};

export const Tab2StackNavigator = ({}: Props) => {
  return (
    <Navigator id={Navigators.Tab2Stack}>
      <Screen name={Tab2Screens.Tab2MainScreen} component={Tab1MainScreen} />
    </Navigator>
  );
};

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

const {Navigator, Screen} = createNativeStackNavigator<Tab3StackParamsList>();

type Props = {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<Tab2StackParamsList, Tab2Screens.Tab2MainScreen>,
    BottomTabNavigationProp<BottomTabParamsList>
  >;
  route: RouteProp<Tab2StackParamsList, Tab2Screens.Tab2MainScreen>;
};

export const Tab3StackNavigator = ({}: Props) => {
  return (
    <Navigator id={Navigators.Tab3Stack}>
      <Screen name={Tab3Screens.Tab3MainScreen} component={Tab1MainScreen} />
    </Navigator>
  );
};

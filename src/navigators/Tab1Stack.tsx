import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import {Navigators, Tab1Screens} from '../constants/Navigation';
import {Tab1MainScreen} from '../screens';
import {BottomTabParamsList, Tab1StackParamsList} from './types';

const {Navigator, Screen} = createNativeStackNavigator<Tab1StackParamsList>();

type Props = {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<Tab1StackParamsList, Tab1Screens.Tab1MainScreen>,
    BottomTabNavigationProp<BottomTabParamsList>
  >;
  route: RouteProp<Tab1StackParamsList, Tab1Screens.Tab1MainScreen>;
};

export const Tab1StackNavigator = ({}: Props) => {
  //   navigation.navigate(Navigators.Tab2Stack, {
  //     screen: Tab2Screens.Tab2MainScreen,
  //   });
  return (
    <Navigator
      id={Navigators.Tab1Stack}
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name={Tab1Screens.Tab1MainScreen} component={Tab1MainScreen} />
    </Navigator>
  );
};

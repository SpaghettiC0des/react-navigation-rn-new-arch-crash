import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import {Navigators, Tab3Screens} from '../constants/Navigation';
import {Tab3MainScreen} from '../screens';
import {BottomTabParamsList, Tab3StackParamsList} from './types';

const {Navigator, Screen} = createNativeStackNavigator<Tab3StackParamsList>();

type Props = {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<Tab3StackParamsList, Tab3Screens.Tab3MainScreen>,
    BottomTabNavigationProp<BottomTabParamsList>
  >;
  route: RouteProp<Tab3StackParamsList, Tab3Screens.Tab3MainScreen>;
};

export const Tab3StackNavigator = ({}: Props) => {
  //   navigation.navigate(Navigators.Tab3Stack, {
  //     screen: Tab3Screens.Tab3MainScreen,
  //   });
  return (
    <Navigator
      id={Navigators.Tab3Stack}
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name={Tab3Screens.Tab3MainScreen} component={Tab3MainScreen} />
    </Navigator>
  );
};

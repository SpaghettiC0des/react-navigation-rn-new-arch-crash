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
    NativeStackNavigationProp<Tab2StackParamsList, Tab2Screens.Tab2MainScreen>,
    BottomTabNavigationProp<BottomTabParamsList>
  >;
  route: RouteProp<Tab2StackParamsList, Tab2Screens.Tab2MainScreen>;
};

export const Tab2StackNavigator = ({}: Props) => {
  //   navigation.navigate(Navigators.Tab2Stack, {
  //     screen: Tab2Screens.Tab2MainScreen,
  //   });
  return (
    <Navigator
      id={Navigators.Tab2Stack}
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name={Tab2Screens.Tab2MainScreen} component={Tab2MainScreen} />
    </Navigator>
  );
};

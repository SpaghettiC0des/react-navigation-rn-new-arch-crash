import {NavigatorScreenParams} from '@react-navigation/native';
import {
  Navigators,
  Tab1Screens,
  Tab2Screens,
  Tab3Screens,
} from '../constants/Navigation';

export type Tab1StackParamsList = {
  [Tab1Screens.Tab1MainScreen]: undefined;
};
export type Tab2StackParamsList = {
  [Tab2Screens.Tab2MainScreen]: undefined;
};
export type Tab3StackParamsList = {
  [Tab3Screens.Tab3MainScreen]: undefined;
};

export type BottomTabParamsList = {
  [Navigators.Tab1Stack]: NavigatorScreenParams<Tab1StackParamsList>;
  [Navigators.Tab2Stack]: NavigatorScreenParams<Tab2StackParamsList>;
  [Navigators.Tab3Stack]: NavigatorScreenParams<Tab3StackParamsList>;
};

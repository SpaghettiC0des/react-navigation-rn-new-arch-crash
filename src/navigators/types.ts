import {NavigatorScreenParams} from '@react-navigation/native';
import {
  Navigators,
  Tab1Screens,
  Tab2Screens,
  Tab3Screens,
} from '../constants/Navigation';

export type Tab1StackParamsList = {
  [Tab1Screens.MainScreen]: undefined;
  [Tab1Screens.Screen2]: undefined;
};
export type Tab2StackParamsList = {
  [Tab2Screens.MainScreen]: undefined;
};
export type Tab3StackParamsList = {
  [Tab3Screens.MainScreen]: undefined;
  [Tab3Screens.Screen2]: undefined;
};

export type BottomTabParamsList = {
  [Navigators.Tab1Stack]: NavigatorScreenParams<Tab1StackParamsList>;
  [Navigators.Tab2Stack]: NavigatorScreenParams<Tab2StackParamsList>;
  [Navigators.Tab3Stack]: NavigatorScreenParams<Tab3StackParamsList>;
};

export type RootStackParamsList = {
  [Navigators.Tab1Stack]: NavigatorScreenParams<Tab1StackParamsList>;
  [Navigators.Tab2Stack]: NavigatorScreenParams<Tab2StackParamsList>;
  [Navigators.Tab3Stack]: NavigatorScreenParams<Tab3StackParamsList>;
};

import {View, Text, Button} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Tab1Screens} from '../../constants/Navigation';
import {Tab1StackParamsList} from '../../navigators/types';

type Props = NativeStackScreenProps<
  Tab1StackParamsList,
  Tab1Screens.MainScreen
>;

export const Tab1MainScreen = ({navigation}: Props) => {
  return (
    <View>
      <Text>Tab1Main</Text>
      <Button
        title="Go to screen 2"
        onPress={() => navigation.navigate(Tab1Screens.Screen2)}
      />
    </View>
  );
};

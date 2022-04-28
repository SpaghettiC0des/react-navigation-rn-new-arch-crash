import {View, Text, Button} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Tab3StackParamsList} from '../../navigators/types';
import {Tab3Screens} from '../../constants/Navigation';

type Props = NativeStackScreenProps<
  Tab3StackParamsList,
  Tab3Screens.MainScreen
>;

export const Tab3MainScreen = ({navigation}: Props) => {
  return (
    <View>
      <Text>Tab3Main</Text>
      <Button
        title="Go to screen 2"
        onPress={() => navigation.navigate(Tab3Screens.Screen2)}
      />
    </View>
  );
};

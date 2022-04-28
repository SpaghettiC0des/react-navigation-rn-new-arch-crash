import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

type ParamsList = {
  App: undefined;
  App2: undefined;
  App3: undefined;
};

const App = ({navigation}: NativeStackScreenProps<ParamsList, 'App'>) => {
  return (
    <View style={styles.container}>
      <Text>It works</Text>
      <Button title="Go to App 2" onPress={() => navigation.navigate('App2')} />
    </View>
  );
};

const App2 = ({navigation}: NativeStackScreenProps<ParamsList, 'App2'>) => {
  return (
    <View style={styles.container}>
      <Text>App2</Text>
      <Button title="Go to App 3" onPress={() => navigation.navigate('App3')} />
    </View>
  );
};

const App3 = () => {
  return (
    <View style={styles.container}>
      <Text>App3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const {Navigator, Screen} = createNativeStackNavigator<ParamsList>();

const Root = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="App" component={App} />
        <Screen name="App2" component={App2} />
        <Screen name="App3" component={App3} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Root;

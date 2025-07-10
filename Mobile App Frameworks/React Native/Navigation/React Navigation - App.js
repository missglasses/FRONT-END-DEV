import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; //this method returns an object with a Navigator and Screen property

const FeedScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>First screen</Text>
  </View>
);

const Stack = createStackNavigator();

const App = () => (
   //wrap current App children w/ NavigationContainer from @react-navigation/native.
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={FeedScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
});

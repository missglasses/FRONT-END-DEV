import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// add the stack navigator
import { createStackNavigator } from '@react-navigation/stack';

const FeedScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Feed</Text>
  </View>
);

//define
const OverviewScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Overview</Text>
  </View>
);

// create stack nav profile
const Stack = createStackNavigator();

const ProfileNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Overview" component={OverviewScreen} />
  </Stack.Navigator>
);

// set up tab nav
const Tab = createBottomTabNavigator();

export const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={FeedScreen} />
{/*add profile nav to tabs */}
    <Tab.Screen name="Profile" component={ProfileNavigator} />
  </Tab.Navigator>
);

const App = () => (
  <NavigationContainer>
    <AppNavigator />
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

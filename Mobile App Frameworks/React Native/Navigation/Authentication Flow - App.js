import React, { createContext, useContext, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// global authentication state, with default values
export const AuthContext = createContext({
  hasUser: false, 
  setUser: () => {},
});

const LoginScreen = () => {
  const { setUser } = useContext(AuthContext); // use context to access setUser

  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Login</Text>
      <Button title="login" onPress={() => setUser(true)} /> {/* button to log in */}
    </View>
  );
};

const FeedScreen = () => {
  const { setUser } = useContext(AuthContext); // use context to access setUser

  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Feed</Text>
      <Button title="logout" onPress={() => setUser(false)} /> {/* button to log out */}
    </View>
  );
};

const Stack = createStackNavigator();

export const AppNavigator = () => {
  const { hasUser } = useContext(AuthContext); // get authentication state

  return (
    <Stack.Navigator>
      {/* render screens based on authentication state */}
      {hasUser
        ? <Stack.Screen name="Feed" component={FeedScreen} /> // show feed if logged in
        : <Stack.Screen name="Login" component={LoginScreen} /> // show login if not
      }
    </Stack.Navigator>
  );
};

const App = () => {
  // this is linked to our global authentication state.
  // we connect this in react to re-render components when changing this value.
  const [hasUser, setUser] = useState(false); // manage login state

  return (
    <AuthContext.Provider value={{ hasUser, setUser }}> {/* provide auth state to entire app */}
      <NavigationContainer>
        <AppNavigator /> {/* navigator will show correct screen based on state */}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

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

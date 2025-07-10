import React from 'react';
import { StyleSheet, View } from 'react-native';

const App = () => (
  <View style={styles.layout}>
    <View style={[styles.box, { backgroundColor: 'red' }]} />
    <View style={[styles.box, { backgroundColor: 'green' }]} />
    <View style={[styles.box, { backgroundColor: 'blue' }]} />
  </View>
);

export default App;

export const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#e5e5e5',
  // justifyContent: 'flex-end', <--move boxes below
    justifyContent: 'space-evenly', //<-creates a gap between each boxes
  },
  box: {
    backgroundColor: 'black',
    height: 100,
    
  },
});

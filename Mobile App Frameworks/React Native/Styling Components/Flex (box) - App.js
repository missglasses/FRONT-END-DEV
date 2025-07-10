import React from 'react';
//import { Dimensions, StyleSheet, View } from 'react-native'; dimensions - no longer needed
import { StyleSheet, View } from 'react-native'; 

const App = () => (
  <View style={styles.layout}>
    <View style={[styles.box, { backgroundColor: 'red' }]} />
    <View style={[styles.box, { backgroundColor: 'green' }]} />
    {/* added 3rd box for testing */}
    <View style={[styles.box, { backgroundColor: 'blue' }]} />
  </View>
);
export default App;
// get max width/height from the Dimensions API
// const MAX_WIDTH = Dimensions.get('window').width;
// const MAX_HEIGHT = Dimensions.get('window').height;


export const styles = StyleSheet.create({
  layout: {
    flex: 1, //replacing fixed dimensions
    backgroundColor: '#e5e5e5',
  },
  box: {
    flex: 1,  //replacing fixed dimensions
    backgroundColor: 'black',
  },
});

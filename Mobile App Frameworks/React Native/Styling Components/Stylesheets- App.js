import React from 'react';
import { StyleSheet, View } from 'react-native';//<--import it here

const App = () => (
  <View style={styles.layout}>
    <View style={styles.card} />
    <View style={styles.card} />
  </View>//<--add components
);

export default App;
//add styles here
export const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    justifyContent: 'center',
  },
  card: {
    width: 100, 
    height: 100, 
    backgroundColor: 'white', 
    margin: 16, 
    borderRadius: 2, 
    shadowColor: 'black', 
    shadowOpacity: 0.3, 
    shadowRadius: 1, 
    shadowOffset: { height: 1, width: 0.3 } 
  },
});

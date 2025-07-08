import React from 'react';
import { View } from 'react-native';

//View a container that supports layout with flexbox, style, some touch handling, and accessibility controls. 
const App = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> //<---
    <View style={{ width: 100, height: 100, backgroundColor: 'pink' }} /> 
    <View style={{ width: 100, height: 100, backgroundColor: 'gray' }} />
  </View>
);

export default App;

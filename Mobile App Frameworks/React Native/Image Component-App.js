
import React from 'react';
import { Image, View } from 'react-native';
const image = require('./react-native.jpg'); //shows the react image

const App = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

    <Image style={{ width: 100, height: 100 }} source={image} /> //<--here
  </View>
);

export default App;

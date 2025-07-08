import React from 'react';
import { View, Text } from 'react-native';

const App = () => (
  <View style={{ flex: 1, justifyContent: 'center' }}>
    <Box color="red" />
    <Box color="green" />
    <Box color="blue" /> //<--import inside view
  </View>
);

export default App;

export const Box = (props) => ( //<--box component
  <View style={{ width: 100, height: 100, backgroundColor: props.color }} /> 
  //<--props (properties) is how components receive data from their parent components
);

import React from 'react';
import { ScrollView, Text, View } from 'react-native'; //<--define here

const App = () => (
  <View style={{ flex: 1, justifyContent: 'center' }}>
    <Text style={{ fontSize: 24, textAlign: 'center' }}>
      Scroll me!
    </Text>
    <View style={{ height: 400, backgroundColor: '#e5e5e5' }}>
      <ScrollView horizontal> //<--- here
        <View style={{ width: 300, height: 300, backgroundColor: 'red' }} />
        <View style={{ width: 300, height: 300, backgroundColor: 'green' }} />
        <View style={{ width: 300, height: 300, backgroundColor: 'blue' }} />
      </ScrollView>
    </View>
  </View>
);

export default App;

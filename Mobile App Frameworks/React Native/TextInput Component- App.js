import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

const App = () => {
  const [name, setName] = useState(''); //<-use state

  return (
    <View style={{
      flex: 1,
      alignContent: 'center', 
      justifyContent: 'center', 
      padding: 16,
    }}>
      <Text style={{ marginVertical: 16 }}>
        {name ? `Hi ${name}!` : 'What is your name?'}
      </Text>
      <TextInput //<--- hereee
        style={{ padding: 8, backgroundColor: '#f5f5f5' }}
        onChangeText={text => setName(text)} //<--event handler
        secureTextEntry 
      />
    </View>
  );
};

export default App;

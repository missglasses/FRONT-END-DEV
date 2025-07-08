import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

const App = () => {
  const [pressedCount, setPressedCount] = useState(0);

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ margin: 16 }}>
        {pressedCount > 0
          ? `The button was pressed ${pressedCount} times!`
          : 'The button isn\'t pressed yet'
        }
      </Text>
      <Button
        title='Press me'
        onPress={() => setPressedCount(pressedCount+1)} //<--increase on pressctr
        disabled={pressedCount>=3} //<--disables button after 3 clicks
      />
    </View>
  );
};

export default App;

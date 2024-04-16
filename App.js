import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          borderWidth: 1,
          borderTopWidth: 5,
          borderBottomWidth: 10,
          borderLeftWidth: 3,
          borderColor: 'red',
          borderRadius: 10,
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
        }}>
        <Text>Hello there!</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

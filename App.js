import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import MyText from './components/MyText/MyText';

const App = () => {
  return (
    <SafeAreaView>
      <View style={{backgroundColor: 'blue', height: 100}}>
        <Text>This is going to be header</Text>
      </View>
      <View style={{backgroundColor: 'grey'}}>
        <MyText />
        <MyText />
        <MyText />
      </View>
      <View>
        <Text>All rights reserved</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

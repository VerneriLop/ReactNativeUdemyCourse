import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
//import MyText from './components/MyText/MyText';

const App = () => {
  const [text, setText] = useState('Hello world!');
  return (
    <SafeAreaView>
      {/*<MyText />*/}
      <Text onPress={() => setText('Hello world, text has changed!')}>
        {text}
      </Text>
    </SafeAreaView>
  );
};

export default App;

import React, {useState, useEffect, useRef} from 'react';
import {SafeAreaView, Text, ScrollView, Button} from 'react-native';
//import MyText from './components/MyText/MyText';

const App = () => {
  /*const [text, setText] = useState(0);

  useEffect(() => {
    console.log('The text has changed!');
  }, [text]);

  useEffect(() => {
    console.log('component has rendered!');
  }, []);*/

  let array = Array(1000).fill(0);
  const scrollViewRef = useRef(null);

  const handleClick = () => {
    scrollViewRef.current.scrollTo({x: 0, y: 0, animated: true});
  };

  return (
    <SafeAreaView>
      {/*<MyText />
      <Text onPress={() => setText(text + 1)}>{text}</Text>*/}
      <ScrollView ref={scrollViewRef}>
        {array.map((value, index) => (
          <Text key={index}>Hello world! {index}</Text>
        ))}
      </ScrollView>
      <Button onPress={handleClick} title="Scroll to top" />
    </SafeAreaView>
  );
};

export default App;

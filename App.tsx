import React, {useState, useEffect, useRef} from 'react';
import {SafeAreaView, Text, ScrollView, Button, View} from 'react-native';
//import MyText from './components/MyText/MyText';
import {ThemeContext} from './contexts/ThemeContext';
import HomeScreen from './components/HomeScreen/HomeScreen';
import useToggle from './customHooks/useToggle';

const App = () => {
  const [isOn, toggleIsOn] = useToggle(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  /*const [text, setText] = useState(0);

  useEffect(() => {
    console.log('The text has changed!');
  }, [text]);

  useEffect(() => {
    console.log('component has rendered!');
  }, []);

  let array = Array(1000).fill(0);
  const scrollViewRef = useRef(null);

  const handleClick = () => {
    scrollViewRef.current.scrollTo({x: 0, y: 0, animated: true});
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  */

  return (
    <ThemeContext.Provider value={isDarkMode}>
      <SafeAreaView>
        {/*<MyText />
      <Text onPress={() => setText(text + 1)}>{text}</Text>
      <ScrollView ref={scrollViewRef}>
        {array.map((value, index) => (
          <Text key={index}>Hello world! {index}</Text>
        ))}
      </ScrollView>
      <Button onPress={handleClick} title="Scroll to top" />
        <View style={{backgroundColor: isDarkMode ? '#222222' : '#ffffff'}}>
          <Text>Hello world!</Text>
          <Button title="Switch Mode" onPress={toggleTheme} />
        </View>
        <HomeScreen />*/}
        <Text>{isOn ? 'ON' : 'OFF'}</Text>
        <Button title="Toggle" onPress={toggleIsOn} />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

export default App;

import React, {useState} from 'react';
import {SafeAreaView, Image} from 'react-native';

const App = () => {
  const [imageSource, setImageSource] = useState({uri: 'http://example.com'});

  return (
    <SafeAreaView>
      <Image
        source={imageSource}
        style={{width: '100%', height: '100%', backgroundColor: 'red'}}
        resizeMode={'center'} //contain, stretch, repeat
        onError={() => {
          console.log('Error has been detected while loading an image');
          setImageSource(require('./assets/images/cake.png'));
        }}
      />
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80',
        }}
        style={{width: 100, height: 100}}
      />
    </SafeAreaView>
  );
};

export default App;

/*

FUNCTIONAL COMPONENT

import React, {useState, useEffect, useRef} from 'react';
import {SafeAreaView, Text, ScrollView, Button, View} from 'react-native';
import MyText from './components/MyText/MyText';
import {ThemeContext} from './contexts/ThemeContext';
import HomeScreen from './components/HomeScreen/HomeScreen';
import useToggle from './customHooks/useToggle';

const App = () => {
  const [isOn, toggleIsOn] = useToggle(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [text, setText] = useState(0);

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

  return (
    <ThemeContext.Provider value={isDarkMode}>
      <SafeAreaView>
        <MyText />
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
        <HomeScreen />
        <Text>{isOn ? 'ON' : 'OFF'}</Text>
        <Button title="Toggle" onPress={toggleIsOn} />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

export default App;
*/

//----------------------------

/*

CLASS BASED COMPONENT

import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import MyText from './components/MyText/MyText';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(): void {
    console.log('Component is mounted');
  }

  shouldComponentUpdate(
    nextProps: Readonly<{}>,
    nextState: Readonly<{}>,
    nextContext: any,
  ): boolean {
    console.log('Checking if component should update');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>) {
    console.log('Getting snapshot before component updates');
    return null;
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{}>,
    snapshot?: any,
  ): void {
    console.log('component has updated');
  }

  //this might need navigation or something like that so component would unmount
  componentWillUnmount(): void {
    console.log('component will unmount');
  }

  render() {
    return (
      <SafeAreaView>
        <Text
          onPress={() => {
            this.setState({name: 'Verneri'});
          }}>
          Hello, {this.state?.name}
        </Text>
        <MyText name={'Verneri'} />
      </SafeAreaView>
    );
  }
}

export default App;
*/

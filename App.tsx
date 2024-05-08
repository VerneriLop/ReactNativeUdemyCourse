import React from 'react';
import {View} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View style={{backgroundColor: 'yellow', width: 50, height: 200}} />
      <View style={{backgroundColor: 'green', width: 50, height: 200}} />
      <View style={{backgroundColor: 'black', width: 50, height: 200}} />
    </View>
  );
};

export default App;

/*
BASIC COMPONENTS

import React, {useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [textValue, setTextValue] = useState('');
  const [email, setEmail] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [shouldKeepLoggedIn, setShouldKeepLoggedIn] = useState(true);

  return (
    <SafeAreaView>
      <ScrollView>
        <TextInput
          style={{borderWidth: 1, borderRadius: 4, padding: 10}}
          placeholder="Enter your email"
          keyboardType="email-address"
          value={email}
          onChangeText={value => {
            setEmail(value);
          }}
        />
        <TextInput
          style={{borderWidth: 1, borderRadius: 4, padding: 10}}
          placeholder="Enter your password"
          secureTextEntry
          value={passwordValue}
          onChangeText={value => {
            setPasswordValue(value);
          }}
        />
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Switch
            value={shouldKeepLoggedIn}
            onValueChange={value => setShouldKeepLoggedIn(value)}
          />
          <Text>Keep me logged in</Text>
        </View>
        <Pressable
          disabled={email.length === 0 || passwordValue.length < 8}
          style={[
            {backgroundColor: 'black'},
            (email.length === 0 || passwordValue.length < 8) && {opacity: 0.5},
          ]}
          onPress={() => {
            console.log(email, passwordValue, shouldKeepLoggedIn);
            console.log('clicked');
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', textAlign: 'center', padding: 10}}>
              Submit
            </Text>
            <FontAwesomeIcon icon={faCheck} style={{color: 'white'}} />
          </View>
        </Pressable>
      </ScrollView>
      <ScrollView
        onScroll={() => {
          console.log('we are scrolling');
        }}
        contentContainerStyle={{backgroundColor: 'red', height: 600}}
        showsVerticalScrollIndicator={false}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <Image
          source={require('./assets/images/cake.png')}
          style={{height: 500, width: 500}}
        />
        <Image
          source={require('./assets/images/cake.png')}
          style={{height: 500, width: 500}}
        />
        <Image
          source={require('./assets/images/cake.png')}
          style={{height: 500, width: 500}}
        />
      </ScrollView>
      <TextInput
        style={{borderWidth: 1, padding: 10, borderRadius: 4}}
        value={textValue}
        onChangeText={value => {
          console.log(value);
          setTextValue(value);
        }}
        placeholder="Please enter your name"
        autoFocus={true}
      />
      <TextInput
        style={{borderWidth: 1, padding: 10, borderRadius: 4}}
        value={email}
        onChangeText={value => {
          setEmail(value);
        }}
        placeholder="Please enter your email here"
        autoFocus={true}
        keyboardType="email-address"
        returnKeyType="next" //done,go,search
      />
      <TextInput
        style={{borderWidth: 1, padding: 10, borderRadius: 4}}
        value={passwordValue}
        onChangeText={value => {
          console.log(value);
          setPasswordValue(value);
        }}
        keyboardType="phone-pad" //default,numeric
        secureTextEntry={true}
        placeholder="Please enter your password"
        autoFocus={true}
      />
    </SafeAreaView>
  );
};

export default App;

*/

/*
IMAGES

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
*/

//---------------------

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

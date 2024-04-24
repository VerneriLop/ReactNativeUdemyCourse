/*import React from 'react';
import {Text} from 'react-native';
import style from './style';

const MyText = () => {
  const handleTextClick = () => {
    alert('The text has been clicked!');
  };

  return (
    <Text
      style={[style.text, style.text1, {color: 'green'}]}
      onPress={() => handleTextClick()}>
      Hello, react native world
    </Text>
  );
};

export default MyText;
*/

/*
CLASS BASED COMPONENT WITH LIFECYCLE

import React, {Component} from 'react';
import {Text} from 'react-native';
import style from './style';

class MyText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: props.name + ' Lopperi',
    };
  }

  componentDidMount() {
    //is called right after the component is rendered
    //Perform some setup for example get fetching data from an API
    console.log('Our component has been mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    //Called when state or props of the application is updated
    console.log(
      'The state of the application has been changed',
      prevState,
      this.state,
    );
  }

  componentWillUnmount() {
    console.log('Component is now being destroyed');
  }

  render() {
    return (
      <Text
        style={[style.text, style.text1, {color: 'green'}]}
        onPress={() => {
          this.setState({...this.state, ...{fullName: 'Verneri L.'}});
        }}>
        Hello, {this.props.name}! I know full name is {this.state.fullName}
      </Text>
    );
  }
}

export default MyText;
*/

//FUNCTIONAL COMPONENT WITH STATE MANAGING.
import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import style from './style';

const MyText = props => {
  const [fullName, setFullName] = useState('');

  useEffect(() => {
    console.log('our component has been mounted');
    return () => {
      console.log('Component is now being destroyed!');
    };
  }, []);

  useEffect(() => {
    console.log('The value of fullname has been changed');
  }, [fullName]);

  return (
    <Text
      style={[style.text, style.text1, {color: 'green'}]}
      onPress={() => {
        setFullName('Verneri Lopperi');
      }}>
      Hello, {props.name}! I know full name is {fullName}
    </Text>
  );
};

export default MyText;

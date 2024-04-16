import React from 'react';
import {SafeAreaView} from 'react-native';
import Item from './components/Item/Item';

const App = () => {
  return (
    <SafeAreaView>
      <Item name={'Table'} price={20} />
      <Item name={'Chair'} price={100} />
      <Item name="desk" price={200} />
    </SafeAreaView>
  );
};

export default App;

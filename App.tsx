import React from 'react';

import { SafeAreaView, StatusBar, Text, View, } from 'react-native';
import InputCompoment from './src/components/common/input/InputCompoment';
import { Provider } from 'react-redux';
import store from './src/api/store';
import DropdownComponent from './src/components/common/dropdown/DropdownComponent';


import HomeScreen from './src/screens/Home/HomeScreen';
import Headercomponet from './src/components/common/header/Headercomponet';

const App = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};
export default App;

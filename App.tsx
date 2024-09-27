import React from 'react';
import { SafeAreaView, StatusBar, Text, View, } from 'react-native';
import Buttoncomponet from './src/components/common/button/Buttoncomponet';
import InputCompoment from './src/components/common/input/InputCompoment';
import { Provider } from 'react-redux';
import store from './src/api/store';
import DropdownComponent from './src/components/common/dropdown/DropdownComponent';
import Headercomponet from './src/components/header/Headercomponet';
import Addd from './src/components/header/addd';

const App = () => {
  return (
    <Provider store={store}>
      <Addd />
    </Provider>
  );
};
export default App;
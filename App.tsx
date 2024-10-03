import React from 'react';

import { Provider } from 'react-redux';
import store from './src/api/store';
import HomeScreen from './src/screens/Home/HomeScreen';
import SettingScreen from './src/screens/setting/SettingScreen';
import AppNavigation from './src/navigation/AppNavigation';


const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation></AppNavigation>
    </Provider>
  );
};

export default App;


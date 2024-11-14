import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store.js';
import { AppProvider } from './src/screens/AppContext';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/AppNavigation';
import Purchasehistory from './src/screens/main/stacks/purchasehistory/Purchasehistory.js';
import SettingLoggedScreen from './src/screens/main/tabs/setting/SettingLoggedScreen.js';

const App = () => {
  return (
    <Provider store={store}>
      <AppProvider>
        <SettingLoggedScreen/>
      </AppProvider>

    </Provider>
  );
};

export default App;


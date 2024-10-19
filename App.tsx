import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store.js';
import { AppProvider } from './src/screens/AppContext';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/AppNavigation';
import Rate from './src/screens/main/tabs/setting/SettingLoggedScreen'
import DropdownComponent from './src/components/common/dropdown/DropdownComponent.js';
import AboutusSrceen from './src/screens/main/stacks/termspage/termspageScreen.js';

const App = () => {
  return (
    <Provider store={store}>
      <AppProvider>
        <AppNavigation />
      </AppProvider>
    </Provider>
  );
};

export default App;


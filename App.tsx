import React from 'react';
import { Provider } from 'react-redux';
import store from './src/api/store';
import { AppProvider } from './src/screens/AppContext'; 
import { NavigationContainer } from '@react-navigation/native'; 
import AppNavigation from './src/AppNavigation';
import Rate from './src/screens/main/tabs/setting/SettingLoggedScreen'
const App = () => {
  return (
    <Provider store={store}>
          <AppNavigation />
    </Provider>
  );
};

export default App;


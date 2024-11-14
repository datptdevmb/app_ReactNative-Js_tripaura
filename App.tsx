import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store.js';
import { AppProvider } from './src/screens/AppContext';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/AppNavigation';
import ChonVoucher from './src/screens/main/stacks/voucher/ChonVoucher.js'
import Voucher from './src/screens/main/stacks/voucher/Voucher.js';

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


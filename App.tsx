import React from 'react';

import { Provider } from 'react-redux';
import store from './src/api/store';
import HomeScreen from './src/screens/Home/HomeScreen';
import Voucher from './src/screens/stacks/Voucher/Voucher';
import Otp from './src/screens/authen/Otp';


const App = () => {
  return (
    <Provider store={store}>
      <Voucher />
    </Provider>
  );
};

export default App;


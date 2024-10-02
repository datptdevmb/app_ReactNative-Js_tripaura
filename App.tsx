import React from 'react';

import { Provider } from 'react-redux';
import store from './src/api/store';
import HomeScreen from './src/screens/Home/HomeScreen';

const App = () => {
  return (
    <Provider store={store}>
       <AppNavigation/>
    </Provider>
  );
};

export default App;


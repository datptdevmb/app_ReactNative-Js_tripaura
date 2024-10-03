import React from 'react';
import { Provider } from 'react-redux';
import store from './src/api/store';
import { AppProvider } from './src/screens/AppContext'; 
import { NavigationContainer } from '@react-navigation/native'; 
import AppNavigation from './src/AppNavigation';

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

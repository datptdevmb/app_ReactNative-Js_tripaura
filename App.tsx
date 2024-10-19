import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store.js';
import { AppProvider } from './src/screens/AppContext';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/AppNavigation';
import FAQsSrceen from './src/screens/main/stacks/FAQs/FAQsSrceen.js'
import HelpCenter from './src/screens/main/stacks/HelpCenter/HelpCenter.js'
import ButtonHelp from './src/components/common/button/ButtonHelp.js'

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


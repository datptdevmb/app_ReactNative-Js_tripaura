import React from 'react';
import { SafeAreaView, StatusBar, Text, View, } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/api/store';
import MainStaskNavigation from './src/navigation/MainStaskNavigation'
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStaskNavigation />
      </NavigationContainer>

    </Provider>
  );
};
export default App;

import React from 'react';
import { Provider } from 'react-redux';
import store from './src/api/store';
import HomeScreen from './src/screens/Home/HomeScreen';
import AppNavigation from './src/navigation/AppNavigation';
import SettingLoggedScreen from './src/screens/setting/SettingLoggedScreen';
import TitleBotton from './src/components/common/titleButton/TitleButton';
const App = () => {
  return (
    // <AppNavigation/>
    <SettingLoggedScreen/>
    // <TitleBotton 
    // leftIcon={require('./assets/images/dkdv.png')}
    // title={'aaa'}
    // rightIcon={require('./assets/images/dkdv.png')}/>
  );
};
export default App;
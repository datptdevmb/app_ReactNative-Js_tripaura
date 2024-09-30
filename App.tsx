import React from 'react';
import { Provider } from 'react-redux';
import store from './src/api/store';
import HomeScreen from './src/screens/Home/HomeScreen';
import AppNavigation from './src/navigation/AppNavigation';
import SettingLoggedScreen from './src/screens/setting/SettingLoggedScreen';
import TitleBotton from './src/components/common/titleButton/TitleButton';
import ProfileScreen from './src/screens/profile/ProfileScreen';
import EditProfileScreen from './src/screens/profile/EditProfileScreen';
const App = () => {
  return (
    <Provider store={store}>
       <AppNavigation/>
    </Provider>
  );
};
export default App;
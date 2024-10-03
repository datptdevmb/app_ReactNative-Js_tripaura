import React from 'react';
import { SafeAreaView, StatusBar, Text, View, } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/api/store';
<<<<<<< HEAD
import HomeScreen from './src/screens/Home/HomeScreen';
import SettingScreen from './src/screens/setting/SettingScreen';
import AppNavigation from './src/navigation/AppNavigation';

=======
import LoginRegisterScreen from './src/screens/authen/LoginRegisterScreen'
import Register from './src/screens/authen/Register/RegisterScreen';
import Otp from './src/screens/authen/Otp/Otp'
import LoginScreen from './src/screens/authen/Login/LoginScreen'
import Forgot from './src/screens/authen/Forgot/ForgotScreen';
import EditProfileScreen from './src/screens/main/stacks/profile/EditProfileScreen'
import ProfileScreen from './src/screens/main/stacks/profile/ProfileScreen'
import Rate from './src/screens/main/stacks/Rate/Rate'
import Voucher from './src/screens/main/stacks/Voucher/Voucher'
import FavoriteScreen from './src/screens/main/tabs/favourite/FavoriteScreen'
import FavouriteScreenNoItem from './src/screens/main/tabs/favourite/FavouriteScreenNoItem'
import FavouriteScreenNoLogin from './src/screens/main/tabs/favourite/FavouriteScreenNoLogin'
import Setting from './src/screens/main/tabs/setting/SettingLoggedScreen'
>>>>>>> 006b0348efa4e5e4ce45023656f4c03c1edb0a22

const App = () => {
  return (
    <Provider store={store}>
<<<<<<< HEAD
      <AppNavigation></AppNavigation>
=======
      <Setting/>
>>>>>>> 006b0348efa4e5e4ce45023656f4c03c1edb0a22
    </Provider>
  );
};
export default App;

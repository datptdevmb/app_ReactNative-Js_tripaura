import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './Login/LoginScreen';
import RegisterScreen from './Register/RegisterScreen';
import ForgotScreen from './Forgot/ForgotScreen';
import Otp from './Otp/Otp';
import LoginRegisterScreen from './LoginRegisterScreen';
import MainStaskNavigation from '../../navigation/MainStaskNavigation';
import FavouriteScreenNoItem from '../../screens/main/tabs/favourite/FavouriteScreenNoItem';
import FavoriteScreen from '../../screens/main/tabs/favourite/FavoriteScreen';
import TestFavoriteAddDelete from '../main/tabs/favourite/TestFavoriteAddDelete';
import SplashScreen from './Splash/SplashScreen';
import SearchScreen from '../main/tabs/Sreach/SearchScreen';
import FilterScreen from '../main/stacks/Filter/FilterScreen';

const Stack = createNativeStackNavigator();

const AuthenStackNavigation = () => {
  return (
<<<<<<< HEAD
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabNavigation" component={MainStaskNavigation} />
=======
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainTabNavigation" component={MainStaskNavigation} />
>>>>>>> 8fd71a664d1c1ba1f0c54154897dbaf96aea97d1
      {/* <Stack.Screen

        name="TestFavoriteAddDelete"
        component={TestFavoriteAddDelete}
      /> */}
      {/* <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} /> */}
      <Stack.Screen
        name="LoginRegisterScreen"
        component={LoginRegisterScreen}
      />
<<<<<<< HEAD


=======
    
>>>>>>> 8fd71a664d1c1ba1f0c54154897dbaf96aea97d1
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ForgotScreen" component={ForgotScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="Otp" component={Otp} />
<<<<<<< HEAD

      <Stack.Screen name="MainTabNavigation" component={MainStaskNavigation} />

=======
>>>>>>> 8fd71a664d1c1ba1f0c54154897dbaf96aea97d1
    </Stack.Navigator>
  );
};

export default AuthenStackNavigation;

import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Login/LoginScreen';
import RegisterScreen from './Register/RegisterScreen';
import ForgotScreen from './Forgot/ForgotScreen';
import Otp from './Otp/Otp';
import LoginRegisterScreen from './LoginRegisterScreen';
import MainStaskNavigation from '../../navigation/MainStaskNavigation';

const Stack = createNativeStackNavigator();

const AuthenStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginRegisterScreen" component={LoginRegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ForgotScreen" component={ForgotScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="Otp" component={Otp} />
      <Stack.Screen name="MainTabNavigation" component={MainStaskNavigation} />

    </Stack.Navigator>
  );
};

export default AuthenStackNavigation;

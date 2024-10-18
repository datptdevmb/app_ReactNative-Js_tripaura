import {View, Text} from 'react-native';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/main/tabs/Home/HomeScreen';
import FavouriteScreenNoItem from '../screens/main/tabs/favourite/FavouriteScreenNoItem';
import NotificationScreen from '../screens/main/tabs/notification/NotificationScreen';
import SettingScreen from '../screens/main/tabs/setting/SettingScreen';
import SettingLoggedScreen from '../screens/main/tabs/setting/SettingLoggedScreen';
import EditProfileScreen from '../screens/main/stacks/profile/EditProfileScreen';
import ProfileScreen from '../screens/main/stacks/profile/ProfileScreen';
import FavoriteScreen from '../screens/main/tabs/favourite/FavoriteScreen';
import {NavigationContainer} from '@react-navigation/native';
import ButtomNavigation from './BottomNavigation';
import ImageDetail from '../screens/main/tabs/Home/ImageDetail';
import PanoramaViewer from '../screens/main/tabs/Home/Ponorama';
import Voucher from '../screens/main/stacks/Voucher/Voucher';
import LoginRegisterScreen from '../screens/authen/LoginRegisterScreen';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabNavigation = () => {
  return (
    // <Tab.Navigator
    //     screenOptions={{
    //         headerShown: false,
    //         tabBarActiveTintColor: '#0085FF'
    //     }}>
    //     <Tab.Screen name="Home" component={HomeScreen} />
    //     <Tab.Screen name="Favourite" component={FavoriteScreen} />
    //     <Tab.Screen name="Notification" component={NotificationScreen} />
    //     <Tab.Screen name="Setting" component={SettingLoggedScreen} />
    // </Tab.Navigator>
    <ButtomNavigation />
  );
};

const MainStaskNavigation = () => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MainTabNavigation" component={MainTabNavigation} />
            <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="Ponorama" component={PanoramaViewer} />
            <Stack.Screen name="ImageDetail" component={ImageDetail} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen name="Voucher" component={Voucher} />
            <Stack.Screen name="LoginRegisterScreen" component={LoginRegisterScreen} />
        </Stack.Navigator>
    )
}


export default MainStaskNavigation;

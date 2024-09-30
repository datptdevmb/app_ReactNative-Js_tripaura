import { View, Text } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import FavouriteScreen from '../screens/favourite/FavouriteScreen';
import NotificationScreen from '../screens/notification/NotificationScreen';
import SettingScreen from '../screens/setting/SettingScreen';
import SettingLoggedScreen from '../screens/setting/SettingLoggedScreen';
import EditProfileScreen from '../screens/profile/EditProfileScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#0085FF'
            }}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Favourite" component={FavouriteScreen} />
            <Tab.Screen name="Notification" component={NotificationScreen} />
            <Tab.Screen name="Setting" component={SettingLoggedScreen} />
        </Tab.Navigator>
    )
}


const MainStaskNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MainTabNavigation" component={MainTabNavigation} />
            <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
        </Stack.Navigator>
    )
}

export default MainStaskNavigation
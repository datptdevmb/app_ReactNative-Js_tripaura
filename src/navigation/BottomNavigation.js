import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import FavouriteScreen from '../screens/main/tabs/favourite/FavouriteScreenNoLogin';
import NotificationScreen from '../screens/main/tabs/notification/NotificationScreen';
import SettingScreen from '../screens/main/tabs/setting/SettingScreen';
const Tab = createBottomTabNavigator();

const ButtomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#0085FF'
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favourite" component={FavouriteScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  )
}

export default ButtomNavigation
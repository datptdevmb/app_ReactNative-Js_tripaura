import { View, Text } from 'react-native'
import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainStaskNavigation from './MainStaskNavigation';
const AppNavigation = () => {
  return (
   <NavigationContainer>
      <MainStaskNavigation/>
   </NavigationContainer>
  )
}

export default AppNavigation
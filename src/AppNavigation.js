
import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthenStackNavigation from './screens/authen/AuthenStackNavigation';
import {AppContext} from './screens/AppContext';
import TabNavigation from './navigation/MainStaskNavigation';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthenStackNavigation from './screens/authen/AuthenStackNavigation'
import { AppContext} from './screens/AppContext'
import TabNavigation from './navigation/MainStaskNavigation'


const AppNavigation = () => {

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
    const { isLogin } = useContext(AppContext);
    return (
        <NavigationContainer>
            {
                isLogin ?
                    <AuthenStackNavigation/> :
                    <TabNavigation />
            }
        </NavigationContainer>
    )
}


export default AppNavigation;

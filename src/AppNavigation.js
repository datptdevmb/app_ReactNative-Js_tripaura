
import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthenStackNavigation from './screens/authen/AuthenStackNavigation';
import {AppContext} from './screens/AppContext';
import TabNavigation from './navigation/MainStaskNavigation';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
<<<<<<< HEAD


const AppNavigation = () => {

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

=======
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

>>>>>>> 8fd71a664d1c1ba1f0c54154897dbaf96aea97d1

export default AppNavigation;

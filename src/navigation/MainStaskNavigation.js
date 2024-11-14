import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/main/tabs/home/HomeScreen';
import FavouriteScreenNoItem from '../screens/main/tabs/favourite/FavouriteScreenNoItem';
import NotificationScreen from '../screens/main/tabs/notification/NotificationScreen';
import SettingScreen from '../screens/main/tabs/setting/SettingScreen';
import SettingLoggedScreen from '../screens/main/tabs/setting/SettingLoggedScreen';
import EditProfileScreen from '../screens/main/stacks/profile/EditProfileScreen';
import ProfileScreen from '../screens/main/stacks/profile/ProfileScreen';
import FavoriteScreen from '../screens/main/tabs/favourite/FavoriteScreen';
import { NavigationContainer } from '@react-navigation/native';
import Detail from '../screens/main/stacks/detail/Detail';
import ButtomNavigation from './BottomNavigation';
import ImageDetail from '../screens/main/stacks/detail/ImageDetail';
import PanoramaViewer from '../screens/main/stacks/detail/Ponorama';
import { ROUTES } from '../constants/routes';
import Login from '../screens/authen/LoginRegisterScreen'
import VietnamMap from '../screens/main/stacks/Map/VietnamMap';
import DependentDropdown from '../screens/main/stacks/Filter/FilterScreen';
import FAQsSrceen from '../screens/main/stacks/FAQs/FAQsSrceen';
import OrderReviewScreen from '../screens/main/stacks/order';
import LoginRegisterScreen from '../screens/authen/LoginRegisterScreen';
import FilterScreen from '../screens/main/stacks/Filter/FilterScreen';
import ListTourFilterScreen from '../screens/main/stacks/Filter/ListTourFilterScreen';

import ListVoucherScreen from '../screens/main/stacks/ListVoucherScreen';


import Payment from '../screens/main/stacks/Payment/Payment';
import PaymentScreen from '../screens/main/stacks/Payment/PaymentScreen';
import OrderInformation from '../screens/main/stacks/orderinformation/Orderinformation';
import Purchasehistory from '../screens/main/stacks/purchasehistory/Purchasehistory';




const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabNavigation = () => {

    return (
        <ButtomNavigation />
    )
}


const MainStaskNavigation = () => {


    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MainTabNavigation" component={MainTabNavigation} />
            <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="Ponorama" component={PanoramaViewer} />
            <Stack.Screen name="ImageDetail" component={ImageDetail} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen name="MapScreen" component={VietnamMap} />
            <Stack.Screen name="Filter" component={DependentDropdown} />
            <Stack.Screen name="FAQsSrceen" component={FAQsSrceen} />
            <Stack.Screen name="Order" component={OrderReviewScreen} />
            <Stack.Screen name={ROUTES.login} component={Login} />
            <Stack.Screen name="ListVoucherScreen" component={ListVoucherScreen} />
            {/* <Stack.Screen name="Voucher" component={Voucher} /> */}
            <Stack.Screen name="LoginRegisterScreen" component={LoginRegisterScreen} />
            <Stack.Screen name="FiterScreen" component={FilterScreen} />
            <Stack.Screen name="ListTourFilter" component={ListTourFilterScreen} />
            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen name='PaymentScreen' component={PaymentScreen}/>
            <Stack.Screen name='OrderInformation' component={OrderInformation}/>
            <Stack.Screen name='Purchasehistory' component={Purchasehistory}/>


        </Stack.Navigator>
    )
}


export default MainStaskNavigation;

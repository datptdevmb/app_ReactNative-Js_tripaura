import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import FavouriteScreen from '../screens/favourite/FavouriteScreen';
import NotificationScreen from '../screens/notification/NotificationScreen';
import SettingScreen from '../screens/setting/SettingScreen';
import { ROUTES } from '../constants/routes';
import colors from '../constants/colors';
import SlideChangeText from '../components/common/slide/SlideChangeText';
import DetailScreen from '../screens/Home/Detail';
const Tab = createBottomTabNavigator();


function CustomBottom({ onPress, children }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        {
          top: -15,
          justifyContent: 'center',
          alignItems: 'center'
        }
      }>
      <ImageBackground
        style={{
          width: 95,
          height: 95,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        source={require('../assets/images/imgButtonTab.png')}
      >
        <View
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.onPrimary,

          }}
        >

          <View
            style={
              {
                backgroundColor: colors.primary,
                width: 60,
                height: 60,
                borderRadius: 30,
                borderWidth: 2,
                borderColor: colors.onPrimary
              }
            }>
            {children}
          </View>
          <SlideChangeText />

        </View>

      </ImageBackground>



    </TouchableOpacity>
  )
}

const ButtomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.onPrimary,
          position: 'absolute',
          shadowColor: colors.onPrimary,
          height: 90,
          // left: 10,
          // right: 10,
          // bottom: -30,
          // borderRadius: 16
        }
      }}>
      <Tab.Screen
        name={ROUTES.home}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              borderTopWidth: focused ? 1 : 0,
              borderTopColor: focused ? colors.primary : colors.onPrimary,
              height: 90,

              // backgroundColor:colors.primary
            }}>
              <Image
                resizeMode='contain'
                source={require('../assets/icons/HomeIcon.png')}
                style={{
                  tintColor: focused ? colors.primary : "#A8A8A8",

                }} />
              <Text style={{ fontSize: 8 }}>{ROUTES.home}</Text>
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              borderTopWidth: focused ? 2 : 0,
              borderTopColor: focused ? colors.primary : colors.onPrimary,
              height: 90,

              // backgroundColor:colors.primary
            }}>
              <Image
                resizeMode='contain'
                source={require('../assets/icons/HomeIcon.png')}
                style={{
                  tintColor: focused ? colors.primary : colors.Gray_800,

                }} />
              <Text>Uu dai</Text>
            </View>
          )
        }}
      />
      <Tab.Screen
        name='yeuthich'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image
                resizeMode='contain'
                source={require('../assets/icons/SearchIcon.png')}
                style={{
                  tintColor: colors.onPrimary
                }} />
            </View>
          ),
          tabBarButton: (props) => (
            <CustomBottom {...props} />
          )
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              borderTopWidth: focused ? 2 : 0,
              borderTopColor: focused ? colors.primary : colors.onPrimary,
              height: 90,

              // backgroundColor:colors.primary
            }}>
              <Image
                resizeMode='contain'
                source={require('../assets/icons/HomeIcon.png')}
                style={{
                  tintColor: focused ? colors.primary : colors.Gray_800,

                }} />
              <Text>{ROUTES.home}</Text>
            </View>
          )
        }} />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              justifyContent: 'center',
              width: '100%',
              alignItems: 'center',
              borderTopWidth: focused ? 2 : 0,
              borderTopColor: focused ? colors.primary : colors.onPrimary,
              height: 90,

              // backgroundColor:colors.primary
            }}>
              <Image
                resizeMode='contain'
                source={require('../assets/icons/HomeIcon.png')}
                style={{
                  tintColor: focused ? colors.primary : colors.Gray_800,

                }} />
              <Text>{ROUTES.home}</Text>
            </View>
          )
        }} />
    </Tab.Navigator>
  )
}

export default ButtomNavigation
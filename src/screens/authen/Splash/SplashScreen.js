import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {styles} from './SplashScreenStyle';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    // Tự động chuyển sang HomeScreen sau 5 giây
    const timer = setTimeout(() => {
      navigation.replace('LoginRegisterScreen');
    }, 5000);

    return () => clearTimeout(timer); // Dọn dẹp khi component bị hủy
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>TripAura</Text>
    </View>
  );
};

export default SplashScreen;

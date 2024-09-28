import {StyleSheet, Text, View, Image, ToastAndroid} from 'react-native';
import React from 'react';
import {styles} from './FavouriteScreenNoLoginStyle';
import Button from '../../components/common/button/Button';

const FavouriteScreenNoLogin = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Yêu Thích</Text>
      <Image
        resizeMode="contain"
        source={require('./../../../assets/images/Favorite.png')} 
        style={styles.image}
      />
      <Text style={styles.text2Style}>
        Đăng nhập ngay để mở khóa các tính năng tiện ích khác nhé
      </Text>
      <Button
        label="Đăng nhập"
        onPressed={() => {
          console.log('Thành Công');
        }}
        style={styles.buttonStyle}
      />
    </View>
  );
};

export default FavouriteScreenNoLogin;

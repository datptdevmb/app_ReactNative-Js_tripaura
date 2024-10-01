import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {styles} from './LoginRegisterScreenStyle';
import Header from '../../components/header/Headercomponet';
import SocialButton from '../../components/common/button/SocialButton';

const LoginRegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Header
        style={styles.Header}
        leftIcon={require('../../../assets/images/back.png')}
      />

      <Text style={styles.text}>Đăng nhập / Đăng ký</Text>
      <Text style={styles.text2}>
        Nhận tài khoản <Text style={styles.TripAru}>TripAru</Text> để khám phá
        tiện ích
      </Text>
      <SocialButton
        label=" Email"
        icon={
          <Image
            source={require('../../../assets/images/email.png')}
            style={styles.iconEmailStyle}
          />
        }
        style={styles.EmailButton}
        labelStyle={styles.EmailLabel}
        onPressed={() => {
          console.log(' Email');
        }}
      />
      <SocialButton
        label=" Số điên thoại"
        icon={
          <Image
            source={require('../../../assets/images/phone.png')}
            style={styles.iconPhoneStyle}
          />
        }
        style={styles.PhoneButton}
        labelStyle={styles.PhoneLabel}
        onPressed={() => {
          console.log(' Số điên thoại');
        }}
      />
      <SocialButton
        label=" Đăng nhập bằng Facebook"
        icon={
          <Image
            source={require('../../../assets/images/fb.png')}
            style={styles.iconfbStyle}
          />
        }
        style={styles.fbButton}
        labelStyle={styles.fbLabel}
        onPressed={() => {
          console.log(' Đăng nhập bằng Facebook');
        }}
      />
      <SocialButton
        label=" Đăng nhập bằng Google"
        icon={
          <Image
            source={require('../../../assets/images/gg.png')}
            style={styles.iconggStyle}
          />
        }
        style={styles.ggButton}
        labelStyle={styles.ggLabel}
        onPressed={() => {
          console.log(' google');
        }}
      />
      <Text style={styles.mota}>
        Bằng cách đăng kí hoặc đăng nhập , bạn đã hiểu và đồng ý với Điều khoản
        chung và Chính sách bảo mật của TripAura
      </Text>
    </View>
  );
};

export default LoginRegisterScreen;

import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { styles } from './LoginRegisterScreenStyle';
import Header from '../../components/common/header/Headercomponet';
import SocialButton from '../../components/common/button/SocialButton';
import stylesglobal from '../../constants/global';
import Icons from '../../constants/Icons';
import { useNavigation } from '@react-navigation/native';


const LoginRegisterScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={stylesglobal.container}>
      <Header
        style={styles.Header}
        leftIcon={Icons.ic_leftarrow}
      />
      <Text style={stylesglobal.textheader}>Đăng nhập / Đăng ký</Text>
      <Text style={stylesglobal.textauth_description}>
        Nhận tài khoản <Text style={{ color: '#0572E7'}}>TripAru</Text> để khám phá
        tiện ích
      </Text>
      <SocialButton
        label=" Email"
        icon={
          <Image
            source={Icons.ic_email}
          />
        }
        style={styles.EmailButton}
        labelStyle={styles.EmailLabel}
        onPressed={() => {
            navigation.navigate('RegisterScreen');
        }}
      />
      <SocialButton
        label=" Số điên thoại"
        icon={
          <Image
            source={Icons.ic_phone}
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
            source={Icons.ic_facebook}
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
            source={Icons.ic_google}
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

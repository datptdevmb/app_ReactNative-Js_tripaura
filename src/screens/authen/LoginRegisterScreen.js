import React, { useEffect } from 'react';
import { Button, Text, View, Alert } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { styles } from './LoginRegisterScreenStyle';
import SocialButton from '../../components/common/button/SocialButton';
import Icons from '../../constants/Icons';
import stylesglobal from '../../constants/global';

GoogleSignin.configure({
  webClientId: '467005316673-f7mcvgp3hmoocp41g2ju3rdqrjpbujto.apps.googleusercontent.com', // Thay YOUR_FIREBASE_WEB_CLIENT_ID bằng ID từ Firebase
});

const LoginRegisterScreen = () => {
  const navigation = useNavigation();


  const signInWithGoogle = async () => {
    try {
      // Kiểm tra xem thiết bị có hỗ trợ Google Play services không
      await GoogleSignin.hasPlayServices();

      // Đăng nhập và lấy idToken từ Google
      const { idToken } = await GoogleSignin.signIn();

      // Tạo credential Firebase từ idToken của Google
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Đăng nhập vào Firebase bằng credential từ Google
      const userCredential = await auth().signInWithCredential(googleCredential);
      console.log('User Info:', userCredential.user);

      // Hiển thị thông báo đăng nhập thành công
      Alert.alert('Login Success', `Welcome ${userCredential.user.displayName}!`);

      // Điều hướng sau khi đăng nhập thành công
      navigation.navigate('HomeScreen');
    } catch (error) {
      console.error('Error during Google Sign-In', error);

      // Xử lý lỗi đăng nhập Google
      Alert.alert('Login Failed', 'An error occurred during Google sign-in.');
    }
  };

  return (
    <View style={stylesglobal.container}>
      <Text style={stylesglobal.textheader}>Đăng nhập / Đăng ký</Text>
      <Text style={stylesglobal.textauth_description}>
        Nhận tài khoản <Text style={{ color: '#0572E7' }}>TripAura</Text> để khám phá tiện ích
      </Text>
      <SocialButton
        label="Đăng nhập bằng Google"
        // icon={<Icons.ic_google />} // Icon của Google
        style={styles.ggButton}
        labelStyle={styles.ggLabel}
        onPressed={signInWithGoogle} // Gọi hàm đăng nhập Google
      />
    </View>
  );
};

export default LoginRegisterScreen;

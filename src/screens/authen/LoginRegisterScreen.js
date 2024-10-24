import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './LoginRegisterScreenStyle';
import Header from '../../components/common/header/Headercomponet';
import SocialButton from '../../components/common/button/SocialButton';
import stylesglobal from '../../constants/global';
import Icons from '../../constants/Icons';
import { fetchGoogleUser } from '../../redux/slices/auth.slice';
import { AppContext } from '../AppContext';

const LoginRegisterScreen = (props) => {
  const { navigation, route } = props;
  const [loginType, setLoginType] = useState('email');
  const dispatch = useDispatch();
  const { isLogin } = useSelector(state => state.reducer.auth);
  const [loading, setLoading] = useState(false);
  const { setUser, setIsLogin } = useContext(AppContext);

  const loginemail = () => {
    setLoginType('email');
    navigation.navigate('Login', { loginType: 'email' });
  };

  const loginphone = () => {
    setLoginType('phone');
    navigation.navigate('Login', { loginType: 'phone' });
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '425470674648-kruk5stcsfk9gbi4chvoqu00fd02jad0.apps.googleusercontent.com',
    });
  }, []);

  const handleLoginWithGoogle = async () => {
    setLoading(true);
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      const { data } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(data.idToken);
      const currentUser = await auth().signInWithCredential(googleCredential);

      const { uid, email, displayName, photoURL } = currentUser.user;
      const userRequest = { uid, email, displayName, photoURL };
      setUser(userRequest);
      setIsLogin(true); // Optionally update the login state
  
      // Dispatch action if needed
      dispatch(fetchGoogleUser(userRequest));

    } catch (error) {
      handleSignInError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignInError = (error) => {
    switch (error.code) {
      case statusCodes.SIGN_IN_CANCELLED:
        Alert.alert('Sign in cancelled', 'Bạn đã hủy đăng nhập.');
        break;
      case statusCodes.IN_PROGRESS:
        Alert.alert('Sign in in progress', 'Đang tiến hành đăng nhập...');
        break;
      case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
        Alert.alert('Play services unavailable', 'Dịch vụ Google Play không khả dụng.');
        break;
      default:
        Alert.alert('Error', `Đã xảy ra lỗi: ${error.message}`);
        console.error(error);
    }
  };

  useEffect(() => {
    if (isLogin) {
      navigation.goBack();
    }
  }, [isLogin, navigation]);


  return (
    <View style={stylesglobal.container}>
      <Header style={styles.Header} leftIcon={Icons.ic_leftarrow} />
      <Text style={stylesglobal.textheader}>Đăng nhập / Đăng ký</Text>
      <Text style={stylesglobal.textauth_description}>
        Nhận tài khoản <Text style={{ color: '#0572E7' }}>TripAru</Text> để khám
        phá tiện ích
      </Text>
      <SocialButton
        label=" Email"
        icon={<Image source={Icons.ic_email} />}
        style={styles.EmailButton}
        labelStyle={styles.EmailLabel}
        onPressed={loginemail}

      />
      <SocialButton
        label=" Số điên thoại"
        icon={<Image source={Icons.ic_phone} />}
        style={styles.PhoneButton}
        labelStyle={styles.PhoneLabel}
        onPressed={loginphone}
      />
      <SocialButton
        label=" Đăng nhập bằng Facebook"
        icon={<Image source={Icons.ic_facebook} />}
        style={styles.fbButton}
        labelStyle={styles.fbLabel}
        onPressed={() => {
          console.log(' Đăng nhập bằng Facebook');
        }}
      />
      <SocialButton
        onPressed={handleLoginWithGoogle}
        label=" Đăng nhập bằng Google"
        icon={<Image source={Icons.ic_google} />}
        style={styles.ggButton}
        labelStyle={styles.ggLabel}
      />
      <Text style={styles.mota}>
        Bằng cách đăng kí hoặc đăng nhập , bạn đã hiểu và đồng ý với Điều khoản
        chung và Chính sách bảo mật của TripAura
      </Text>
    </View>
  );
};
export default LoginRegisterScreen;

import { Text, TouchableOpacity, View, ToastAndroid } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../../../components/common/header/Headercomponet';
import InputComponent from '../../../components/common/input/InputCompoment';
import Button from '../../../components/common/button/Button';
import stylesglobal from '../../../constants/global';
import Icons from '../../../constants/Icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { DangNhapTaiKhoan } from '../../../api/slice/loginreducers';

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginData, loginStatus } = useSelector((state) => state.login);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log('Login Status:', loginStatus);
    console.log('Login Data:', loginData);

    if (loginStatus === 'succeeded' && loginData.status) {
      ToastAndroid.show(loginData.message, ToastAndroid.SHORT);
      setIsLoggedIn(true);
      navigation.navigate('MainTabNavigation');
    }

    if (loginStatus === 'failed') {
      if (loginData.code === 400) {
        ToastAndroid.show(loginData.message, ToastAndroid.SHORT);
        console.log('Error:', loginData.message);
      }
    }
  }, [loginStatus, loginData, navigation]);

  useEffect(() => {
    if (isLoggedIn) {
      setEmail('');
      setPassword('');
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  const back = () => {
    navigation.goBack();
  };

  const validateInputs = () => {
    let valid = true;
    if (!email) {
      ToastAndroid.show('Email không được để trống', ToastAndroid.SHORT);
      valid = false;
    }

    if (!password) {
      ToastAndroid.show('Mật khẩu không được để trống', ToastAndroid.SHORT);
      valid = false;
    }

    return valid;
  };

  const dangnhaptaikhoan = () => {
   
  };

  return (
    <View style={stylesglobal.container}>
      <Header
        leftIcon={Icons.ic_leftarrow}
        onPressLeftIcon={back}
      />
      <Text style={[stylesglobal.textheader, { marginTop: 14 }]}>Đăng nhập</Text>
      <Text style={stylesglobal.textauth_description}>
        Trải nghiệm & khám phá tiện ích của{' '}
        <Text style={{ color: '#0572E7' }}>TripAura</Text>
      </Text>

      <Text style={[stylesglobal.textauth_description, { marginTop: 30 }]}>Email</Text>
      <InputComponent
        placeholder="Nhập email của bạn"
        onTextChange={text => setEmail(text)}
        value={email}
        hidePassword={false}
        placeholderTextColor="#B0B0B0"
        keyboardType="email-address"
      />

      <Text style={[stylesglobal.textauth_description, { marginTop: 12 }]}>Mật khẩu</Text>
      <InputComponent
        placeholder="Nhập mật khẩu của bạn"
        onTextChange={text => setPassword(text)}
        value={password}
        hidePassword={true}
        placeholderTextColor="#B0B0B0"
        keyboardType="default"
      />
      <Button
        label="Đăng nhập"
        onPressed={dangnhaptaikhoan}
        style={{ marginTop: 29 }}
      />
      <View style={[stylesglobal.containerTextOptions, { marginTop: 30 }]}>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={stylesglobal.commonTextStyle}>Tạo tài khoản</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotScreen')}>
          <Text style={stylesglobal.commonTextStyle}>Quên mật khẩu</Text>
        </TouchableOpacity>
      </View>
      <Text style={[stylesglobal.descriptionText, { marginTop: 104 }]}>
        Bằng cách đăng kí hoặc đăng nhập, bạn đã hiểu và đồng ý với Điều khoản
        chung và Chính sách bảo mật của TripAura
      </Text>
    </View>
  );
};

export default Login;

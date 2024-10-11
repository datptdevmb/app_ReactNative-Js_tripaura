import { Text, View, ToastAndroid, TouchableOpacity } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppContext } from '../../AppContext';
import Header from '../../../components/common/header/Headercomponet';
import InputComponent from '../../../components/common/input/InputCompoment';
import Button from '../../../components/common/button/Button';
import stylesglobal from '../../../constants/global';
import Icons from '../../../constants/Icons';
import { DangNhapTaiKhoan } from '../../../api/slice/loginreducers';

const Login = (props) => {
  const { navigation } = props;
  const { setUser, setIsLogin } = useContext(AppContext);
  const dispatch = useDispatch();
  const { loginData, loginStatus } = useSelector((state) => state.login);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (loginStatus === 'succeeded' && loginData.code === 200) {
      ToastAndroid.show(loginData.message, ToastAndroid.SHORT);
      setUser(loginData.data);
      setIsLoggedIn(true);
      setIsLogin(true);
      navigation.navigate('MainTabNavigation');
    }

    if (loginStatus === 'failed' && loginData.code === 400) {
      ToastAndroid.show(loginData.message, ToastAndroid.SHORT);
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
    if (validateInputs()) {
      dispatch(DangNhapTaiKhoan({ email, password }));
    }
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

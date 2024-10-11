import { Text, View, ToastAndroid } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppContext } from '../../AppContext'
import Header from '../../../components/common/header/Headercomponet';
import InputComponent from '../../../components/common/input/InputCompoment';
import Button from '../../../components/common/button/Button';
import stylesglobal from '../../../constants/global';
import Icons from '../../../constants/Icons';
import { DangNhap } from '../../../api/slices/LoginSlice';

const Login = (props) => {
  const { navigation } = props;
  const { user, setUser } = useContext(AppContext)
  const { isLogin, setIsLogin } = useContext(AppContext)
  const { loginData, loginStatus } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  useEffect(() => {
    if (loginStatus === 'successed') {
      if (loginData.status === true) {
        setUser(loginData.data)
        // console.log("============data", loginData.data);
        // console.log("============user", user);
        // ToastAndroid.show(changeUserData.message, ToastAndroid.SHORT)
        ToastAndroid.show(loginData.message, ToastAndroid.SHORT)
        setIsLogin(true)

      }
    }
  }, [loginData])

  const NhanDangNhap = () => {
    dispatch(
      DangNhap({
        email: email,
        password: password
      }),
    );
    // {
    //   !loginData.message &&
    //     ToastAndroid.show(loginData.message, ToastAndroid.SHORT)
    // }
  }

  return (
    <View style={stylesglobal.container}>
      <Header
        leftIcon={Icons.ic_leftarrow}
      />
      <Text style={[stylesglobal.textheader, { marginTop: 14 }]}>Đăng nhập</Text>
      <Text style={stylesglobal.textauth_description}>
        Trải nghiệm & khám phá tiện ích của{' '}
        <Text style={{ color: '#0572E7' }}>TripAru</Text>
      </Text>

      <Text style={[stylesglobal.textauth_description, { marginTop: 30 }]}>Email</Text>
      <InputComponent
        placeholder="Nhập email của bạn"
        onTextChange={text => setEmail(text)}
        value=""
        hidePassword={false}
        placeholderTextColor="#B0B0B0"
        keyboardType="email-address"
      />
      <Text style={[stylesglobal.textauth_description, { marginTop: 12 }]}>Mật khẩu</Text>
      <InputComponent
        placeholder="Nhập mật khẩu của bạn"
        onTextChange={text => setPassword(text)}
        value=""
        hidePassword={true}
        placeholderTextColor="#B0B0B0"
        keyboardType="default"
      />
      <Button
        label="Đăng nhập"
        onPressed={NhanDangNhap}
        style={{ marginTop: 29 }}
      />
      <View style={[stylesglobal.containerTextOptions, { marginTop: 30 }]}>
        <Text style={stylesglobal.commonTextStyle}>Tạo tài khoản</Text>
        <Text style={stylesglobal.commonTextStyle}>Quên mật khẩu ?</Text>
      </View>
      <Text style={[stylesglobal.descriptionText, { marginTop: 104 }]}>
        Bằng cách đăng kí hoặc đăng nhập , bạn đã hiểu và đồng ý với Điều khoản
        chung và Chính sách bảo mật của TripAura
      </Text>
    </View>
  );
};
export default Login;

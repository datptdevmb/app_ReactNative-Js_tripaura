import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Header from '../../../components/common/header/Headercomponet';
import InputComponent from '../../../components/common/input/InputCompoment';
import Button from '../../../components/common/button/Button';
import stylesglobal from '../../../constants/global';
import Icons from '../../../constants/Icons';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const back = () => {
    navigation.goBack()
  }
  return (
    <View style={stylesglobal.container}>
      <Header
        leftIcon={Icons.ic_leftarrow}
        onPressLeftIcon={back}
      />
      <Text style={[stylesglobal.textheader, { marginTop: 14 }]}>Đăng nhập</Text>
      <Text style={stylesglobal.textauth_description}>
        Trải nghiệm & khám phá tiện ích của{' '}
        <Text style={{ color: '#0572E7' }}>TripAru</Text>
      </Text>

      <Text style={[stylesglobal.textauth_description, { marginTop: 30 }]}>Email</Text>
      <InputComponent
        placeholder="Nhập email của bạn"
        onTextChange={text => console.log(text)}
        value=""
        hidePassword={false}
        placeholderTextColor="#B0B0B0"
        keyboardType="email-address"
      />
      <Text style={[stylesglobal.textauth_description, { marginTop: 12 }]}>Mật khẩu</Text>
      <InputComponent
        placeholder="Nhập mật khẩu của bạn"
        onTextChange={text => console.log(text)}
        value=""
        hidePassword={true}
        placeholderTextColor="#B0B0B0"
        keyboardType="default"
      />
      <Button
        label="Đăng nhập"
        onPressed={() => navigation.navigate('MainTabNavigation')}
        style={{ marginTop: 29 }}
      />
      <View style={[stylesglobal.containerTextOptions, { marginTop: 30 }]}>
        <TouchableOpacity  onPress={() => navigation.goBack()}  >
          <Text style={stylesglobal.commonTextStyle}>Tạo tài khoản</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotScreen')} >
          <Text style={stylesglobal.commonTextStyle}>Quên mật khẩu</Text>
        </TouchableOpacity>
      </View>
      <Text style={[stylesglobal.descriptionText, { marginTop: 104 }]}>
        Bằng cách đăng kí hoặc đăng nhập , bạn đã hiểu và đồng ý với Điều khoản
        chung và Chính sách bảo mật của TripAura
      </Text>
    </View>
  );
};
export default Login;

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { styles } from './RegisterScreenStyle';
import Header from '../../../components/common/header/Headercomponet';
import InputComponent from '../../../components/common/input/InputCompoment';
import Button from '../../../components/common/button/Button';
import stylesglobal from '../../../constants/global';

const RegisterScreen = () => {
  return (
    <View style={stylesglobal.container}>
      <Header
        leftIcon={require('../../../../assets/images/back1.png')}
      />

      <Text style={[stylesglobal.textheader,{marginTop:7}]}>Đăng Ký</Text>
      <Text style={stylesglobal.textauth_description}>
        Nhận tài khoản <Text style={{ color: '#0572E7'}}>TripAru</Text> để khám phá tiện ích
      </Text>
      <Text style={[stylesglobal.textauth_description,{marginTop: 29}]}>Email</Text>

      <InputComponent
        placeholder="Nhập email của bạn"
        onTextChange={text => console.log(text)}
        value=""
        hidePassword={false}
        placeholderTextColor="#B0B0B0"
        keyboardType="email-address"
      />

      <Text style={[stylesglobal.textauth_description,{marginTop: 12}]}>Mật khẩu</Text>
      <InputComponent
        placeholder="Nhập mật khẩu của bạn"
        onTextChange={text => console.log(text)}
        value=""
        hidePassword={true}
        placeholderTextColor="#B0B0B0"
        keyboardType="default"
      />
      <Text style={[stylesglobal.textauth_description,{marginTop: 12}]}> Xác nhận mật khẩu</Text>
      <InputComponent
        placeholder="Nhập mật khẩu của bạn"
        onTextChange={text => console.log(text)}
        value=""
        hidePassword={true}
        placeholderTextColor="#B0B0B0"
        keyboardType="default"
      />
      <Button
        label="Đăng nhập" // Nội dung nút
        onPressed={''} // Hàm xử lý nhấn nút
        style={{marginTop: 29}} 
      />
      <View style={[stylesglobal.containerTextOptions,{marginTop: 29}]}>
        <Text style={stylesglobal.commonTextStyle}>Tạo tài khoản</Text>
        <Text style={stylesglobal.commonTextStyle}>Quên mật khẩu ?</Text>
      </View>
      <Text style={[stylesglobal.descriptionText,{marginTop:100}]}>
        Bằng cách đăng kí hoặc đăng nhập , bạn đã hiểu và đồng ý với Điều khoản
        chung và Chính sách bảo mật của TripAura
      </Text>
    </View>
  );
};
export default RegisterScreen;

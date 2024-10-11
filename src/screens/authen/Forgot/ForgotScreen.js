import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../../../components/common/header/Headercomponet';
import InputComponent from '../../../components/common/input/InputCompoment';
import Button from '../../../components/common/button/Button';
import stylesglobal from '../../../constants/global';
import Icons from '../../../constants/Icons';
import { useNavigation } from '@react-navigation/native';

const Forgot = () => {
  const navigation = useNavigation();

  return (
    <View style={stylesglobal.container}>
      <Header
        leftIcon={Icons.ic_leftarrow}
        onPressLeftIcon={() => navigation.goBack()}
      />

      <Text style={[stylesglobal.textheader, { marginTop: 14 }]}>Quên mật khẩu   </Text>
      <Text style={stylesglobal.textauth_description}>
        Nhập email của bạn để đặc lại mật khẩu
      </Text>

      <InputComponent
        placeholder="Nhập email của bạn"
        onTextChange={text => console.log(text)}
        value=""
        hidePassword={false}
        placeholderTextColor="#B0B0B0"
        keyboardType="email-address"
        style={{marginTop:18}}
      />
      <Button
        label="Gửi mã xác thực" 
        onPressed={() => navigation.navigate('Otp')}
        style={{marginTop: 32}} 
      />

    </View>
  );
};
export default Forgot;

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from '../Login/LoginScreenStyle';
import Header from '../../../components/common/header/Headercomponet';
import InputComponent from '../../../components/common/input/InputCompoment';
import Button from '../../../components/common/button/Button';
import stylesglobal from '../../../constants/global';

const Forgot= () => {
  return (
    <View style={stylesglobal.container}>
      <Header
        leftIcon={require('../../../../assets/images/back1.png')}
      />

      <Text style={styles.text}>Quên mật khẩu   </Text>
      <Text style={styles.text2}>
      Nhập email của bạn để đặc lại mật khẩu{' '}
        <Text style={styles.TripAru}>TripAru</Text>
      </Text>
      <InputComponent
        placeholder="Nhập email của bạn"
        onTextChange={text => console.log(text)}
        value=""
        hidePassword={false}
        placeholderTextColor="#B0B0B0"
        keyboardType="email-address"
      />

      
      <Button
        label="Gửi mã xác thực" // Nội dung nút
        onPressed={''} // Hàm xử lý nhấn nút
        style={styles.button} // Có thể thêm style tùy chỉnh
      />
      
    </View>
  );
};
export default Forgot;

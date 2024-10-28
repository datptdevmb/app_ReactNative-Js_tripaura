// ContactInfo.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import InputComponent from '../../../components/common/input/InputCompoment';
import Lable from '../../../components/common/labelText';
import Button from '../../../components/common/button/Button';

const ContactInfo = () => {
    return (
        <View style={styles.container}>
            <Lable lable={'Thông tin liên lạc'} />
            <InputComponent
                style={styles.input}
                value={""}
                placeholder={'Họ và Tên'} />
            <InputComponent
                style={styles.input}
                value={""}
                placeholder={'Địa chỉ Email'} />
            <InputComponent
                style={styles.input}
                value={""}
                placeholder={'Số điện thoại'} />
            <Button 
            label='Tải từ hồ sơ'
            style={styles.btn} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 16,
        paddingVertical: 16,
        marginTop: 6,
        flex: 1
    },
    input: {
        height: 44,
        marginTop: 12
    },
    btn:{
        backgroundColor:'#B0B0B0',
        marginTop:10,
        height:44,
        width:90
    }
});

export default ContactInfo;

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Headercomponet from '../../components/common/header/Headercomponet'
import Icons from '../../constants/Icons'
import colors from '../../constants/colors'
import InputOtpComponent from '../../components/common/inputotp/inputotpcomponent'
import Button from '../../components/common/button/Button'

const Otp = () => {
  return (
    <View style={styles.container}>
      <Headercomponet
        leftIcon={Icons.lefticon}
      />
      <View style={styles.containerotp}>
        <Text style={styles.textotp}>Xác minh OTP</Text>
        <Text style={styles.textthongbao}> Vui lòng kiểm tra email nhutnm2306@gmail.com{"\n"}để xem mã xác minh</Text>
        <Text style={styles.textmaotp}>Mã OTP</Text>
        <View style={styles.containerinputotp}>
          <InputOtpComponent />
          <InputOtpComponent />
          <InputOtpComponent />
          <InputOtpComponent />
        </View>
        <Button
          style={styles.btnnext}
          label='Very' />
        <View style={styles.containercountnumbers}>
          <Text style={styles.textcountnumbers}>Gửi lại mã tới</Text>
          <Text style={styles.textcountnumbers}>01:28</Text>

        </View>
      </View>
    </View>
  )
}

export default Otp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15
  },
  containerotp: {
    width: '100%',
    height: 'auto',
    marginTop: 45,
  },
  textotp: {
    textAlign: 'center',
    fontFamily: 'Lato',
    fontSize: 26,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 34,
    color: colors.Gray_800,
  },
  textthongbao: {
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    color: '#7D848D',
    marginTop: 12,
  },
  textmaotp: {
    fontFamily: 'Lato',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 28,
    color: colors.Gray_800,
    marginTop: 40,
  },
  containerinputotp: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between'
  },
  btnnext: {
    marginTop: 40,
  },
  containercountnumbers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  textcountnumbers: {
    fontFamily: 'Lato',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 16,
    color: colors.Gray_400,
  }


})
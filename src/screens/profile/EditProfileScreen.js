import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Headercomponet from '../../components/header/Headercomponet'
import InputComponent from '../../components/common/input/InputCompoment'
import DropdownComponent from '../../components/common/dropdown/DropdownComponent'
import Button from '../../components/common/button/Button'

const EditProfileScreen = (props) => {
  const { navigation } = props;
  const nhanBack = () => {
    navigation.goBack()
  }
  return (
    <View style={styles.container}>
      <Headercomponet
        leftIcon={require('../../../assets/images/icBack.png')}
        title={"Cập nhật thông tin cá nhân"}
        style={styles.header}
        onPressLeftIcon={nhanBack}
      />
      <View style={styles.inputEmail}>
        <Text>Email</Text>
        <InputComponent
          placeholder={'Nhập email của bạn'}
        />
      </View>
      <View style={styles.inputPhone}>
        <Text>Số điện thoại</Text>
        <InputComponent
          placeholder={'Nhập số điện thoại của bạn'}
        />
      </View>
      <View style={styles.adressContainer}>
        <DropdownComponent/>
      </View>
      <View style={styles.inputPhone}>
        <Text>Chi tiết</Text>
        <InputComponent
          placeholder={'Số nha, tên đường'}
        />
      </View>
      <View style={styles.btnCapNhat}>
        <Button label='Cập nhập' />
      </View>
    </View>
  )
}

export default EditProfileScreen

const styles = StyleSheet.create({
  btnCapNhat: {
    marginTop: 50
  },
  adressContainer: {
    marginTop: 20
  },
  inputPhone: {
    marginTop: 20

  },
  inputEmail: {
    marginTop: 35
  },
  header: {
    color: '#2E2E2E',
    fontFamily: 'Lato',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 27
  },
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center'
  }
})
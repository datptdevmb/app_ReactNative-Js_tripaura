import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Headercomponet from '../../../../components/common/header/Headercomponet'
import InputComponent from '../../../../components/common/input/InputCompoment'
import DropdownComponent from '../../../../components/common/dropdown/DropdownComponent'
import Button from '../../../../components/common/button/Button'
import stylesglobal from '../../../../constants/global'
import Icons from '../../../../constants/Icons'
import colors from '../../../../constants/colors'
import fontsize from '../../../../constants/fontsize'

const EditProfileScreen = (props) => {
  const { navigation } = props;
  const nhanBack = () => {
    navigation.goBack()
  }
  return (
    <View style={stylesglobal.container}>
      <Headercomponet
        leftIcon={Icons.ic_leftarrow}
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
    color: colors.Grey_900,
    fontFamily: 'Lato',
    fontSize: fontsize.md,
    fontWeight: '700',
    lineHeight: 27
  },
})
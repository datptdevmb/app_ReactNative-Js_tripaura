import { StyleSheet, Text, View, ToastAndroid } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import Headercomponet from '../../../../components/common/header/Headercomponet'
import InputComponent from '../../../../components/common/input/InputCompoment'
import DropdownComponent from '../../../../components/common/dropdown/DropdownComponent'
import Button from '../../../../components/common/button/Button'
import stylesglobal from '../../../../constants/global'
import Icons from '../../../../constants/Icons'
import colors from '../../../../constants/colors'
import fontsize from '../../../../constants/fontsize'
import { useDispatch, useSelector } from 'react-redux';
import { ThayDoiThongTin } from '../../../../redux/slices/ChangeUserSlice'
import { AppContext } from '../../../AppContext'
import { number } from 'prop-types'
import { data } from '../../../../constants/data'


const EditProfileScreen = (props) => {
  const { navigation } = props;
  const { user, setUser } = useContext(AppContext);
  const { changeUserData, changeUserStatus } = useSelector((state) => state.changeUser);
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [fullname, setFullname] = useState("Nguyễn Văn Bảo Hoàng");
  const [email, setEmail] = useState(user.email)
  const [phone, setPhone] = useState(user.phone)
  const [textError, setTextError] = useState()
  const [gender, setGender] = useState("Nam")
  const [address, setAddress] = useState("Quảng Trị")
  const [nationality, setNationality] = useState("Việt Nam")
  const [dateofbirth, setDateofbirths] = useState("2024-10-11")
  const [street, setStreet] = useState()


  const changeTextEmail = (data) => {
    setEmail(data);
    setTextError("")
  }

  const changeTextPhone = (data) => {
    setPhone(data);
    setTextError("")
  }

  const changeTextStreet = (data) => {
    setStreet(data);
    setTextError("")
  }

  const nhanBack = () => {
    navigation.goBack()
  }

  useEffect(() => {
    if (changeUserStatus === 'successed') {
      if (changeUserData.status === true) {
        setUser({ ...changeUserData.data })
        console.log("============user", user);
        // ToastAndroid.show(changeUserData.message, ToastAndroid.SHORT)

      }
    }
  }, [changeUserData])

  const thayDoi = () => {
    if (!email || !phone || !street) {
      setTextError('Bạn cần nhập đầy đủ thông tin.')
      return;
    }
    dispatch(
      ThayDoiThongTin({
        userId: "6705e798df463fee90387e79",
        fullname: fullname,
        email: email,
        phone: phone,
        nationality: nationality,
        gender: gender,
        address: address,
        dateofbirth: dateofbirth
      }),
    );
    {
      changeUserData.message ?
        ToastAndroid.show(changeUserData.message, ToastAndroid.SHORT) : ToastAndroid.show("Đã cập nhật", ToastAndroid.SHORT)
    }

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
          keyboardType={"email-address"}
          value={email}
          onTextChange={(data) => changeTextEmail(data)}
          placeholder={'Nhập email của bạn'}
        />
      </View>
      <View style={styles.inputPhone}>
        <Text>Số điện thoại</Text>
        <InputComponent
          keyboardType={"phone-pad"}
          value={phone}
          onTextChange={(data) => changeTextPhone(data)}
          placeholder={'Nhập số điện thoại của bạn'}
        />
      </View>
      <View style={styles.adressContainer}>
        <DropdownComponent />
      </View>
      <View style={styles.inputPhone}>
        <Text>Chi tiết</Text>
        <InputComponent
          onTextChange={(data) => changeTextStreet(data)}
          placeholder={'Số nha, tên đường'}
        />
      </View>
      {!!textError && <Text style={styles.textError}>{textError}</Text>}
      <View style={styles.btnCapNhat}>
        <Button
          label='Cập nhập'
          onPressed={thayDoi} />
      </View>
    </View>
  )
}

export default EditProfileScreen

const styles = StyleSheet.create({
  textError: {
    color: 'red',
    textAlign:'center'
  },
  btnCapNhat: {
    marginTop: 50,
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
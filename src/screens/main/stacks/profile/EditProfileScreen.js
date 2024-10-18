import { StyleSheet, Text, View, ToastAndroid } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import Headercomponet from '../../../../components/common/header/Headercomponet';
import InputComponent from '../../../../components/common/input/InputCompoment';
import DropdownComponent from '../../../../components/common/dropdown/DropdownComponent';
import Button from '../../../../components/common/button/Button';
import stylesglobal from '../../../../constants/global';
import Icons from '../../../../constants/Icons';
import colors from '../../../../constants/colors';
import fontsize from '../../../../constants/fontsize';
import { useDispatch, useSelector } from 'react-redux';
import { ThayDoiThongTin } from '../../../../redux/slices/ChangeUserSlice';
import { AppContext } from '../../../AppContext';

const EditProfileScreen = (props) => {
  const { navigation } = props
  const { user, setUser } = useContext(AppContext);
  const { changeUserData, changeUserStatus } = useSelector((state) => state.changeUser);
  const dispatch = useDispatch();
  const { provinces } = useSelector((state) => state.provinces);
  const { districts } = useSelector((state) => state.district);

  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [textError, setTextError] = useState("");
  const [address, setAddress] = useState(user?.address || "");
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const filteredDistricts = selectedProvince
    ? districts.filter(district => district.province_code === selectedProvince.code)
    : [];

  const handleProvinceSelect = (provinceCode) => {
    const province = provinces.find(p => p.code === provinceCode);
    setSelectedProvince(province);
    setSelectedDistrict(null);
  };

  const handleDistrictSelect = (districtCode) => {
    const district = filteredDistricts.find(d => d.code === districtCode);
    setSelectedDistrict(district);
  };

  useEffect(() => {
    if (changeUserStatus === 'successed') {
      const { status, message, data } = changeUserData;
      if (changeUserData.status == true) {
        setUser(data);
        // ToastAndroid.show("Cập nhật thành công!", ToastAndroid.SHORT);
        // navigation.goBack();
      } else {
        ToastAndroid.show(message || "Cập nhật không thành công", ToastAndroid.SHORT);
      }
    }
    console.log("========== changeData ==========", changeUserData);

  }, [changeUserData, changeUserStatus]);

  const validateInputs = () => {
    if (!email || !phone || !address || !selectedDistrict || !selectedProvince) {
      setTextError("Vui lòng điền đầy đủ thông tin!");
      return false;
    }
    setTextError("");
    return true;
  };

  const thayDoi = () => {
    if (!validateInputs()) return;

    const districtName = selectedDistrict?.name || "Chưa chọn quận huyện";
    const provinceName = selectedProvince?.name || "Chưa chọn tỉnh thành";
    const addressWithDetails = `${address}, ${districtName}, ${provinceName}`;

    dispatch(ThayDoiThongTin({
      userId: user._id,
      email,
      phone,
      address: addressWithDetails,
    }));
  };

  return (
    <View style={stylesglobal.container}>
      <Headercomponet
        leftIcon={Icons.ic_leftarrow}
        title={"Cập nhật thông tin cá nhân"}
        onPressLeftIcon={() => navigation.goBack()}
      />
      <View style={styles.inputEmail}>
        <Text>Email</Text>
        <InputComponent
          keyboardType={"email-address"}
          value={email}
          onTextChange={(text) => {
            console.log("Email changed:", text);
            setEmail(text);
          }}
          placeholder={'Nhập email của bạn'}
        />
      </View>
      <View style={styles.inputPhone}>
        <Text>Số điện thoại</Text>
        <InputComponent
          keyboardType={"phone-pad"}
          value={phone}
          onTextChange={(text) => {
            console.log("Phone number changed:", text);
            setPhone(text);
          }}
          placeholder={'Nhập số điện thoại của bạn'}
        />
      </View>
      <View style={styles.adressContainer}>
        <DropdownComponent
          onProvinceSelect={handleProvinceSelect}
          onDistrictSelect={handleDistrictSelect}
        />
      </View>
      <View style={styles.inputPhone}>
        <Text>Chi tiết</Text>
        <InputComponent
          onTextChange={(text) => {
            console.log("Street changed:", text);
            setAddress(text);
          }}
          placeholder={`Số nhà, tên đường`}
        />
      </View>
      {!!textError && <Text style={styles.textError}>{textError}</Text>}
      <View style={styles.btnCapNhat}>
        <Button label='Cập nhật' onPressed={thayDoi} />
      </View>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  textError: {
    color: 'red',
    textAlign: 'center',
  },
  btnCapNhat: {
    marginTop: 50,
  },
  adressContainer: {
    marginTop: 20,
  },
  inputPhone: {
    marginTop: 20,
  },
  inputEmail: {
    marginTop: 35,
  },
  selectedInfo: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.Grey_300,
    borderRadius: 5,
  },
  header: {
    color: colors.Grey_900,
    fontFamily: 'Lato',
    fontSize: fontsize.md,
    fontWeight: '700',
    lineHeight: 27,
  },
});

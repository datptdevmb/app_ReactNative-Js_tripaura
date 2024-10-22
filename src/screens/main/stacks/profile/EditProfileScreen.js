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
  const { navigation } = props;
  const { user, setUser } = useContext(AppContext);
  const { changeUserData, changeUserStatus } = useSelector((state) => state.changeUser);
  const dispatch = useDispatch();
  const { provinces } = useSelector((state) => state.provinces);
  const { districts } = useSelector((state) => state.district);

  const [email, setEmail] = useState(user?.email || "");
  const [fullname, setFullname] = useState(user?.fullname || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [address, setAddress] = useState(user?.address?.split(', ')[0] || "");
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const filteredDistricts = selectedProvince
    ? districts.filter(district => district.province_code === selectedProvince.code)
    : [];

  const handleProvinceSelect = (provinceCode) => {

    const province = provinces.find(p => p.code === provinceCode);

    if (province) {
      setSelectedProvince(province);
      console.log("Selected Province:", province);
      setSelectedDistrict(null);
      setAddress("");
    }
  };

  const handleDistrictSelect = (districtCode) => {
    const district = filteredDistricts.find(d => d.code === districtCode);
    setSelectedDistrict(district);

    if (district) {
      const districtName = district.name;
      const provinceName = selectedProvince?.name || "Chưa chọn tỉnh thành";
      setAddress(prev => `${prev}, ${districtName}, ${provinceName}`);
    }
  };

  useEffect(() => {
    if (changeUserStatus === 'successed') {
      const { status, message, data } = changeUserData;
      if (status) {
        setUser(data);
      } else {
        ToastAndroid.show(message || "Cập nhật không thành công", ToastAndroid.SHORT);
      }
    }
  }, [changeUserData, changeUserStatus, setUser]);

  useEffect(() => {
    if (user.address) {
      const addressParts = user.address.split(', ');
      const street = addressParts[0];
      const districtName = addressParts[1];
      const provinceName = addressParts[2];

      const province = provinces.find(p => p.name === provinceName);
      console.log('province: ' + provinceName)
      const district = districts.find(d => d.name === districtName);

      setAddress(street);
      setSelectedProvince(province || null);
      setSelectedDistrict(district || null);
    }
  }, [user, provinces, districts]);

  const thayDoi = () => {
    try {
      const districtName = selectedDistrict?.name || "Chưa chọn quận huyện";
      const provinceName = selectedProvince?.name || "Chưa chọn tỉnh thành";
      const addressWithDetails = `${address}, ${districtName}, ${provinceName}`;

      dispatch(ThayDoiThongTin({
        userId: user._id,
        fullname,
        email,
        phone,
        address: addressWithDetails,
      }));
      ToastAndroid.show("Cập nhật thành công", ToastAndroid.SHORT);
    } catch (error) {
      ToastAndroid.show("Cập nhật không thành công: " + error.message, ToastAndroid.SHORT);
    }
  };

  return (
    <View style={stylesglobal.container}>
      <Headercomponet
        leftIcon={Icons.ic_leftarrow}
        title={"Cập nhật thông tin cá nhân"}
        onPressLeftIcon={() => navigation.goBack()}
      />
      <View style={styles.inputEmail}>
        <Text>Họ và tên</Text>
        <InputComponent
          keyboardType={"name"}
          value={fullname}
          onTextChange={(text) => setFullname(text)}
          placeholder={'Nhập họ và tên của bạn'}
        />
        <Text>Email</Text>
        <InputComponent
          keyboardType={"email-address"}
          value={email}
          onTextChange={(text) => setEmail(text)}
          placeholder={'Nhập email của bạn'}
        />
      </View>
      <View style={styles.inputPhone}>
        <Text>Số điện thoại</Text>
        <InputComponent
          keyboardType={"phone-pad"}
          value={phone}
          onTextChange={(text) => setPhone(text)}
          placeholder={'Nhập số điện thoại của bạn'}
        />
      </View>
      <View style={styles.adressContainer}>
        <DropdownComponent
          onProvinceSelect={handleProvinceSelect}
          onDistrictSelect={handleDistrictSelect}
          selectedProvince={selectedProvince?.code || null}
          selectedDistrict={selectedDistrict?.code || null}
        />
      </View>
      <View style={styles.inputPhone}>
        <Text>Chi tiết</Text>
        <InputComponent
          value={address}
          onTextChange={(text) => setAddress(text)}
          placeholder={`Số nhà, tên đường`}
        />
      </View>
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

import { StyleSheet, Text, Image, View, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Headercomponet from './../../../../components/common/header/Headercomponet';
import Icons from './../../../../constants/Icons';
import CategroryCity from './../../../../components/multiComponent/categroryctity';
import { datacity, voucher, placename } from './../../../../constants/data';
import Vouchercomponent from './../../../../components/multiComponent/vouchercomponent';
import SectionViewVoucher from './../../../../components/multiComponent/SectionViewVoucher';
import stylesglobal from '../../../../constants/global';
import colors from '../../../../constants/colors';
import fontsize from '../../../../constants/fontsize';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { LayDanhSachVoucher } from '../../../../redux/slices/vouchersSlice';



const Voucher = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const { getVoucherData, getVoucherStatus } = useSelector((state) => state.reducer.vouchers);
  const userReducer = useSelector(state => state.reducer.auth);
  const user = userReducer.user

  console.log(user.user._id);
  useEffect(() => {
    dispatch(LayDanhSachVoucher(user.user._id))
  }, [])
  console.log("===============", getVoucherData.data);

  return (
    <ScrollView style={stylesglobal.container}>
      <Headercomponet
        leftIcon={Icons.ic_leftarrow}
        title={"Ưu đãi"}
        onPressLeftIcon={() => navigation.goBack()}
      />
      <View style={{ marginTop: 40 }}>
        <CategroryCity data={datacity} />
      </View>
      <View style={styles.containervoucher}>
        <Text style={styles.txtmauudai}>
          Mã ưu đãi
        </Text>
        <View style={styles.contaivorcher}>
          <Vouchercomponent data={getVoucherData.data} key={getVoucherData.data._id} />
        </View>
      </View>
      <View style={{ width: '100%', marginTop: 13, flexDirection: 'column' }}>
        <Text style={styles.text}>Các địa danh nổi tiếng</Text>
        <View style={{ width: 149, height: 1, backgroundColor: '#000' }} />
        <SectionViewVoucher
          data={placename}
          key={placename.id}
        />
      </View>
    </ScrollView>
  );
};

export default Voucher;

const styles = StyleSheet.create({
  containervoucher: {
    display: 'flex',
    width: '100%',
    height: 'auto',
    alignItems: 'flex-start',
    flexDirection: 'column',
    borderRadius: 20,
    backgroundColor: colors.Coralred,
    marginTop: 33,
  },
  txtmauudai: {
    color: '#EDEDED',
    fontFamily: 'Lato',
    fontSize: fontsize.sm,
    fontWeight: '700',
    marginStart: 10,
    paddingVertical: 10
  },
  contaivorcher: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 7,
    borderRadius: 15,
    backgroundColor: colors.Lavendermist,
    flexDirection: 'row',
    bottom: 0,
    paddingHorizontal:10
  },
  text: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0.035,
  }
});

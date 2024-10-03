import { StyleSheet, Text, Image, View } from 'react-native';
import React from 'react';
import Headercomponet from './../../../../components/common/header/Headercomponet';
import Icons from './../../../../constants/Icons';
import CategroryCity from './../../../../components/multiComponent/categroryctity';
import { datacity, voucher,placename } from './../../../../constants/data';
import Vouchercomponent from './../../../../components/multiComponent/vouchercomponent';
import SectionViewVoucher from './../../../../components/multiComponent/SectionViewVoucher';


const Voucher = () => {
  return (
    <View style={styles.container}>
      <Headercomponet
        leftIcon={Icons.lefticon}
        title={"Ưu đãi"}
      />
      <View style={{ marginTop: 40 }}>
        <CategroryCity data={datacity} />
      </View>
      <View style={styles.containervoucher}>
        <Text style={styles.txtmauudai}>
          Mã ưu đãi
        </Text>
        <View style={styles.contaivorcher}>
          <Vouchercomponent data={voucher} />
        </View>
      </View>
      <View style={{width:'100%',marginTop:13,flexDirection:'column'}}>
        <Text style={styles.text}>Các địa danh nổi tiếng</Text>
        <View style={{ width: 149,height:1, backgroundColor: '#000'}} />
        <SectionViewVoucher
          data={placename}
        />
      </View>
    </View>
  );
};

export default Voucher;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  containervoucher: {
    display: 'flex',
    width: '100%',
    height: 'auto',
    alignItems: 'flex-start',
    flexDirection: 'column',
    borderRadius: 20,
    backgroundColor: '#ff5348',
    marginTop: 33,
  },
  txtmauudai: {
    color: '#EDEDED',
    fontFamily: 'Lato',
    fontSize: 14,
    fontWeight: '700',
    marginStart: 10,
    paddingVertical: 10
  },
  contaivorcher: {
    width: '100%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 7,
    borderRadius: 15,
    backgroundColor: '#E6E6E6',
    flexDirection: 'row',
    bottom: 0,
  },
  text: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0.035,
}
});

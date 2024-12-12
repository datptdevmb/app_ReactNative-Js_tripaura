import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import formatCurrencyVND from '../../../untils/formatCurrencyVND';

const TourInforTotal = ({price, adultPrice, childPrice}) => {
  return (
    <View style={styles.tourInfor}>
      <Text
        style={
          styles.text
        }>{`Giá người lớn: ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ  ${formatCurrencyVND(
        childPrice,
      )}`}</Text>
      <Text style={styles.textcong}>
        {' '}
        ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ +
      </Text>
      <Text
        style={
          styles.text
        }>{`Giá trẻ em: ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ ${formatCurrencyVND(
        adultPrice,
      )}`}</Text>
      <Text style={styles.live}></Text>
      <Text style={styles.textTong}>
        Giá tổng:
        <Text style={styles.price}>
          ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ {formatCurrencyVND(price)}
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textcong: {
    fontStyle: 'normal',
    fontWeight: '300',
    fontFamily: 'Lato',
    fontSize: 15,
    color: '#757575',
  },
  textTong: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Lato',
  },
  live: {height: 1, backgroundColor: 'black', width: 380},
  tourInfor: {
    backgroundColor: 'white',
    padding: 16,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#DA712F',
  },
  text: {
    height: 25,
    fontStyle: 'normal',
    fontWeight: '300',
    fontFamily: 'Lato',
    marginTop: 5,
    fontSize: 15,
    color: '#757575',
  },
});

export default TourInforTotal;

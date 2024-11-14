// OrderReviewScreen.js

import { ScrollView, StatusBar, StyleSheet, Text, View, NativeModules } from "react-native";
const { ZaloPayModule } = NativeModules;
import Header from "../../../components/common/header/Header";
import TourInfo from "./TourInfor";
import DepartureInfo from "./DepartureInfo";
import ContactInfo from "./ContactInfo";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../components/common/button/Button";
import formatCurrencyVND from "../../../untils/formatCurrencyVND";
import Paymethod from "./Paymethod";
import { useCallback, useEffect, useState } from "react";
import { LayDanhSachVoucher } from "../../../redux/slices/vouchersSlice";
import SelecVoucher from "./selecVoucher";

const OrderReviewScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { tourById, adultTickets, childTickets, totalPrice, selectedDate } =
    useSelector(state => state.reducer.tour);
  const { tourName } = tourById;

  const { getVoucherData } = useSelector(state => state.reducer.vouchers);
  const { user } = useSelector(state => state.reducer.auth);
  const userId = user?.user?._id;

  const [selectedMethod, setSelectedMethod] = useState(null);

  const { discount } = route.params

  const { voucherId } = route.params
  console.log("=================== discount", discount);
  console.log("=================== voucherId", voucherId);


  useEffect(() => {
    dispatch(LayDanhSachVoucher(userId));
  }, [userId]);

  const handleVoucher = useCallback(() => {
    navigation.navigate('ListVoucherScreen', { totalPrice: totalPrice });
  });

  const handlePuchase = useCallback(() => {
    const totalPriceString = totalPrice.toString();
    if (!selectedMethod) return;
    if (selectedMethod == 1) {
      ZaloPayModule.createOrder(totalPriceString);
    }
    if (selectedMethod == 2) {
      console.log('payos');
    }
  });

  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={false}
        barStyle="dark-content"
        backgroundColor="#FFF"
      />
      <Header title={'Hoàn tất hóa đơn'} onBackPress={handleBack} />
      <ScrollView>
        <View style={styles.content}>
          <TourInfo
            tourName={tourName}
            date={selectedDate}
            adultCount={adultTickets}
            childCount={childTickets}
            price={totalPrice}
          />
          <DepartureInfo />
          {/* <ContactInfo /> */}
          <SelecVoucher onPress={handleVoucher}
            discount={discount} />
          <Paymethod
            selectedMethod={selectedMethod}
            setSelectedMethod={setSelectedMethod}
          />
        </View>
      </ScrollView>
      <View style={styles.buttonBottom}>
        <View style={styles.row}>
          <View>
            <Text style={styles.text}>Tổng giá tiền</Text>
            <Text style={styles.caption}>Đã bao gồm phí </Text>
          </View>
          <Text style={styles.textPrice}>{formatCurrencyVND(totalPrice)}</Text>
        </View>
        <Button onPressed={handlePuchase} style={styles.btn} label="Mua ngay" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 11,
    fontStyle: 'italic',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#DA712F',
  },
  content: {
    paddingBottom: 300,
  },
  buttonBottom: {
    width: '100%',
    position: 'absolute',
    backgroundColor: 'white',
    bottom: 0,
    paddingHorizontal: 16,
    paddingVertical: 20,
    shadowColor: 'red',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  btn: {
    height: 44,
    marginTop: 10,
  },
});

export default OrderReviewScreen;

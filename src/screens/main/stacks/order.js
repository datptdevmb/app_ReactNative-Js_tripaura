import { ScrollView, StatusBar, StyleSheet, Text, View, NativeModules, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native'; 
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
import { fetchBooking } from "../../../redux/slices/booking.slice";
import { clearPaymentData, createPayment } from "../../../redux/slices/paymentSlice";

const OrderReviewScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { tourById, adultTickets, childTickets, totalPrice, selectedDate } =
    useSelector(state => state.reducer.tour);
  const { tourName } = tourById;

  const { getVoucherData } = useSelector(state => state.reducer.vouchers);
  const { user } = useSelector(state => state.reducer.auth);
  const userId = user?.user?._id;

  const detailId = tourById.details?.[0]?._id;
  const adultPrice = tourById.details?.[0]?.priceAdult;
  const childPrice = tourById.details?.[0]?.priceChildren;

  const { discount, voucherId } = route.params || {};

  const finalPrice = discount ? totalPrice - discount : totalPrice;

  const [bookingId, setBookingId] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState(null);

  useEffect(() => {
    if (userId) {
      dispatch(LayDanhSachVoucher(userId));
    }
  }, [userId]);

  const handleVoucher = useCallback(() => {
    navigation.navigate('ListVoucherScreen', { totalPrice: totalPrice });
  }, [totalPrice, navigation]);

  const handleSaveBooking = async () => {
    if (bookingId) {
      console.log('Booking already exists');
      return;
    }

    const bookingData = {
      detailId,
      userId,
      voucherId: voucherId || null,
      numAdult: adultTickets,
      numChildren: childTickets,
      priceAdult: adultPrice,
      priceChildren: childPrice,
    };

    try {
      console.log('Sending booking data:', bookingData);
      const response = await dispatch(fetchBooking(bookingData)).unwrap();

      if (response.code === 200 && response.data && response.data._id) {
        setBookingId(response.data._id);
        handleNavigateToPayment(response.data._id);
      } else {
        console.log('Error fetching bookingId');
      }
    } catch (error) {
      console.error('Error calling fetchBooking:', error);
    }
  };

  const handlePurchase = useCallback(async () => {
    const totalPriceString = totalPrice.toString();
    if (!selectedMethod) {
      console.log('No payment method selected');
      return;
    }

    if (selectedMethod === 1) {
      if (!bookingId) {
        const booking = await handleSaveBooking();
        if (booking) {
          ZaloPayModule.createOrder(totalPriceString, bookingId);
        }
      }
    }
    if (selectedMethod === 2) {
      handleSaveBooking();
      payos();
    }
  }, [selectedMethod, totalPrice, bookingId]);

  const payos = () => {
    const orderId = Math.floor(100000 + Math.random() * 900000);
    const shortenedTourName = tourName.slice(0, 20);
    const fullname = user?.user?.fullname;
    const phone = user?.user?.phone;
    const email = user?.user?.email;

    if (!totalPrice || !tourName || !orderId || !fullname || !phone || !email) {
      Alert.alert('Error', 'Incomplete payment information. Please check again.');
      return;
    }

    dispatch(createPayment({
      amount: totalPrice,
      orderId,
      description: shortenedTourName,
      fullname,
      phone,
      email,
      bookingId,
    }));
  };

  const handleBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    if (paymentStatus === 'succeeded') {
      if (paymentInfo.paymentLink && bookingId) {
        navigation.navigate('PaymentScreen', { url: paymentInfo.paymentLink, bookingId });
      } else {
        console.warn("Payment succeeded, but bookingId or paymentLink is missing");
      }
      dispatch(clearPaymentData());
    } else if (paymentStatus === 'failed') {
      dispatch(clearPaymentData());
    }
  }, [paymentStatus, paymentInfo, bookingId, dispatch]);

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
          <SelecVoucher onPress={handleVoucher} discount={discount} />
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
            <Text style={styles.caption}>Đã bao gồm phí</Text>
          </View>
          <Text style={styles.textPrice}>{formatCurrencyVND(finalPrice)}</Text>
        </View>
        <Button onPressed={handlePurchase} style={styles.btn} label="Mua ngay" />
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

import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';
import { updateBookingStatus, updateMaxTicket } from '../../../../sevices/apiServices';
import { clearTourData } from '../../../../redux/slices/tour.slice'
import { useDispatch } from 'react-redux';


const PaymentScreen = ({ route }) => {
  const { url, bookingId } = route.params;
  const [maxTicketState, setMaxTicketState] = useState(route.params.maxTicket);
  console.log('setMaxTicketState', maxTicketState);

  const [childTicketsState, setChildTickets] = useState(route.params.childTickets);
  console.log('childTicketsState', childTicketsState);

  const [adultTicketsState, setAdultTickets] = useState(route.params.adultTickets);
  console.log('adultTicketsState', adultTicketsState);

  const [detailId, setDetailId] = useState(route.params.detailId);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const ticker = (maxTicketState - ((childTicketsState || 0) + (adultTicketsState || 0))) || 0;
  console.log('TICKER', ticker);

  const handleNavigationChange = (navState) => {
    const { url } = navState;
    if (url.includes('/payment/success')) {
      Alert.alert('Thành công', 'Bạn đã thanh toán thành công');
      updateBookingStatus(bookingId, 'success');
      setTimeout(() => navigation.navigate('MainTabNavigation'), 1000);
      dispatch(clearTourData())
    } else if (url.includes('/payment/cancel')) {
      Alert.alert('Thất bại', 'Đã hủy thanh toán.');
      updateBookingStatus(bookingId, 'cancel');
      setTimeout(() => navigation.navigate('MainTabNavigation'), 1000);
      dispatch(clearTourData())
    }
  };

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: url }}
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        onNavigationStateChange={handleNavigationChange}
        onError={() => {
          Alert.alert('Thất bại', 'Lỗi Thanh toán');
        }}
      />
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

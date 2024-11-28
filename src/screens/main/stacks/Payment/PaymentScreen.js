import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';
import { updateBookingStatus, updateMaxTicket } from '../../../../sevices/apiServices';


const PaymentScreen = ({ route }) => {
  const { url, bookingId } = route.params;
  const [maxTicketState, setMaxTicketState] = useState(route.params.maxTicket);
  const [childTicketsState, setChildTickets] = useState(route.params.childTickets);
  const [adultTicketsState, setAdultTickets] = useState(route.params.adultTickets);
  const [detailId, setDetailId] = useState(route.params.detailId);

  const navigation = useNavigation();

  const ticker = maxTicketState - ((childTicketsState || 0) + (adultTicketsState || 0));

  const handleNavigationChange = (navState) => {
    const { url } = navState;
    if (url.includes('/payment/success')) {
      Alert.alert('Thành công', 'Bạn đã thanh toán thành công');
      updateBookingStatus(bookingId, 'success');
      updateMaxTicket(detailId, ticker);
      setTimeout(() => navigation.navigate('MainTabNavigation'), 1000);
    } else if (url.includes('/payment/cancel')) {
      Alert.alert('Thất bại', 'Đã hủy thanh toán.');
      updateBookingStatus(bookingId, 'cancel');
      setTimeout(() => navigation.navigate('MainTabNavigation'), 1000);
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

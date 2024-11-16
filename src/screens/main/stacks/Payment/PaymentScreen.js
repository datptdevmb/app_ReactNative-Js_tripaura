import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const PaymentScreen = ({ route }) => {
  const { url, bookingId } = route.params;

  console.log('bookingIdddd', bookingId);

  const navigation = useNavigation();

  const updateBookingStatus = async (status) => {
    console.log('Updating booking status with:', status);
    try {
      const response = await fetch(`https://trip-aura-server.vercel.app/booking/api/update/${bookingId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      console.log('Response from server:', response);

      const data = await response.json();
      console.log('Parsed response data:', data);

      if (data.code === 200) {
        Toast.show({
          type: 'success',
          text1: 'Cập nhật booking thành công',
        });
      } else {
        Toast.show({
          type: 'error',
          text1: 'Cập nhật thất bại',
        });
      }
    } catch (error) {
      console.error('Error updating booking status:', error);
      Toast.show({
        type: 'error',
        text1: 'Có lỗi xảy ra khi cập nhật',
      });
    }
  };

  const handleNavigationChange = (navState) => {
    const { url } = navState;

    console.log('Current URL:', url);

    if (url.includes('/payment/success')) {
      console.log('Navigation detected success URL');
      Alert.alert('Thành công', 'Bạn đã thanh toán thành công');

      updateBookingStatus('success');

      setTimeout(() => navigation.navigate('MainTabNavigation'), 1000);
    } else if (url.includes('/payment/cancel')) {
      console.log('Navigation detected cancel URL');
      Alert.alert('Thất bại', 'Đã hủy thanh toán.');
      updateBookingStatus('cancel');
      navigation.navigate('MainTabNavigation');
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
      <Toast />
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

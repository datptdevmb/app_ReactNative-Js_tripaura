import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookingById } from '../../../../redux/slices/booking.slice';
import Icons from '../../../../constants/Icons';
import Header from '../../../../components/common/header/Header';

const OrderInformation = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { bookingId } = route.params;


  const [loading, setLoading] = useState(true);


  const bookingData = useSelector((state) => state.reducer.booking);
  console.log('Redux Booking Data:', bookingData);
  

  useEffect(() => {
    if (bookingId) {
      dispatch(fetchBookingById(bookingId));
    }
  }, [dispatch, bookingId]);

  useEffect(() => {
    if (bookingData?.bookingData?.data) {
      setLoading(false);
    }
  }, [bookingData]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2980B9" />
      </View>
    );
  }

  if (!bookingData || !bookingData.bookingData) {
    return <Text style={styles.errorText}>Không có dữ liệu đặt tour</Text>;
  }
  const booking = bookingData?.bookingData?.data;

  console.log('booking', booking);
  const formattedDate = new Date(booking.createAt).toLocaleDateString('vi-VN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  const onBackPress = function () {
    navigation.navigate('MainTabNavigation')
  }

  const image = booking?.linkImage?.[0];  
  console.log('First Image URL:', image);

  console.log('fullname', booking?.fullname);
  console.log('email', booking?.email);
  console.log('phone', booking?.phone);
  console.log('tourName', booking?.tourName);

  return (
    <ScrollView style={styles.container}>
      <Header
        onBackPress={onBackPress}
        title="Chi tiết thanh toán" />
      <View style={styles.containerformation}>
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Thông tin khách hàng</Text>
          <Text style={styles.infoText}>Tên khách hàng: <Text style={styles.highlight}>{booking.fullname || 'N/A'}</Text></Text>
          <Text style={styles.infoText}>Email: <Text style={styles.highlight}>{booking.email || 'N/A'}</Text></Text>
          <Text style={styles.infoText}>Số điện thoại: <Text style={styles.highlight}>{booking.phone || 'Không có'}</Text></Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Chi tiết đơn hàng</Text>
          <Text style={styles.infoText}>Tour: <Text style={styles.highlight}>{booking.tourName || 'N/A'}</Text></Text>
          <Image source={{ uri: image }} style={styles.image} />
          <Text style={styles.infoText}>Số lượng người lớn: <Text style={styles.highlight}>{booking.numAdult || 0}</Text></Text>
          <Text style={styles.infoText}>Số lượng trẻ em: <Text style={styles.highlight}>{booking.numChildren || 0}</Text></Text>
          <Text style={styles.infoText}>Ngày đặt: <Text style={styles.highlight}>{formattedDate || 'N/A'}</Text></Text>
          <Text style={styles.infoText}>Giá tour người lớn: <Text style={styles.highlight}>{booking.priceAdult || 'N/A'}</Text></Text>
          <Text style={styles.infoText}>Giá tour trẻ em: <Text style={styles.highlight}>{booking.priceChildren || 'N/A'}</Text></Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Thông tin thanh toán</Text>
          <Text style={styles.infoText}>Phương thức thanh toán: <Text style={styles.highlight}>Thanh toán qua ngân hàng</Text></Text>
          <Text style={[styles.infoText, styles.statusText]}>Tình trạng: <Text style={styles.highlight}>{booking.status === 1 ? 'Chưa thanh toán' : booking.status === 0 ? 'Đã thanh toán' : 'N/A'}</Text></Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default OrderInformation;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  containerformation: {
    padding: 15,
  },
  card: {
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#B0BEC5',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 15,
    textAlign: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#D1D8E0',
    paddingBottom: 5,
  },
  infoText: {
    fontSize: 15,
    color: '#34495E',
    marginBottom: 8,
    lineHeight: 24,
  },
  statusText: {
    color: '#27AE60',
    fontWeight: '600',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#2980B9',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  errorText: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginVertical: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D1D8E0',
  },
});

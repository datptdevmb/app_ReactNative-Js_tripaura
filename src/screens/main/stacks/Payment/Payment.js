import React, { useEffect } from 'react';
import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import Header from '../../../../components/common/header/Header';
import stylesglobal from '../../../../constants/global';
import Button from '../../../../components/common/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { clearPaymentData, createPayment } from '../../../../redux/slices/paymentSlice';

const Payment = ({ navigation, route }) => {
    const paymentStatus = useSelector((state) => state.reducer.payment.status);
    const paymentInfo = useSelector((state) => state.reducer.payment.paymentInfo);
    const paymentError = useSelector((state) => state.reducer.payment.error);
    const { tourName, selectedDate, adultTickets, childTickets, totalPrice, contactInfo, image,bookingId } = route.params;
    const dispatch = useDispatch();

    console.log('bookingid',bookingId);
    
    const handleBack = () => {
        navigation.goBack();
    };

    const zalopay = () => {
        // Hàm xử lý thanh toán qua Zalo Pay
    };

    const payos = () => {
        const amount = totalPrice;
        const description = tourName;
        const orderId = Math.floor(100000 + Math.random() * 900000);
        const fullname = contactInfo.name;
        const phone = contactInfo.phone;
        const email = contactInfo.email;
        console.log('fullname',fullname);      

        if (!amount || !description || !orderId || !fullname || !phone || !email) {
            Alert.alert('Lỗi', 'Thông tin thanh toán không đầy đủ. Vui lòng kiểm tra lại.');
            return;
        }

        dispatch(createPayment({ amount, orderId, description, fullname, phone, email,bookingId  }));
    };
    useEffect(() => {
        if (paymentStatus === 'succeeded') {
            console.log('Truyền thành công:', paymentInfo);
            if (paymentInfo.paymentLink) {
                navigation.navigate('PaymentScreen', { url: paymentInfo.paymentLink , bookingId: bookingId});
            }
            dispatch(clearPaymentData());  
        } else if (paymentStatus === 'failed') {
            console.log('Truyền thất bại:', paymentError);
            Alert.alert('Thất bại', `Không thể tạo liên kết thanh toán: ${paymentError || 'Lỗi không xác định.'}`);
            dispatch(clearPaymentData());
        }
    }, [paymentStatus, paymentInfo, paymentError, dispatch,bookingId]);
    
    return (
        <View style={styles.container}>
            <Header title={'Thanh toán'} onBackPress={handleBack} />
            <View style={stylesglobal.container}>
                <View style={styles.containerInformation}>
                    <Image
                        source={image ? { uri: image } : require('../../../../assets/images/image.png')}
                        style={styles.image}
                    />
                    <View style={styles.infoContainer}>
                        <Text style={styles.textTourName}>Tên tour: {tourName} </Text>
                        <Text style={styles.textDate}>Ngày khởi hành: {selectedDate} </Text>
                        <Text style={styles.textContactInfo}>Thông tin liên hệ</Text>
                        <Text style={styles.label}>Name: {contactInfo.name}</Text>
                        <Text style={styles.label}>Email: {contactInfo.email}</Text>
                        <Text style={styles.label}>Phone: {contactInfo.phone}</Text>
                    </View>
                </View>
                <View style={styles.horizontalLine} />

                <View>
                    <Text style={styles.textTransactionInformation}>Thông tin giao dịch</Text>
                    <View>
                        <Text style={styles.transaction}>Vé người lớn : {adultTickets}</Text>
                        <Text style={styles.transaction}>Vé trẻ em : {childTickets}</Text>
                        <View style={styles.horizontalLine} />
                        <Text style={styles.transactionthanhtoan}>Tổng tiền thanh toán: {totalPrice}đ</Text>
                    </View>
                </View>

                <View style={styles.containerpayment}>
                    <Text style={styles.textTotalPrice}>Phương thức thanh toán</Text>
                    <View style={styles.paymentMethods}>
                        <Button label="Thanh toán qua zalo pay" onPressed={zalopay} style={{ marginTop: 29 }} />
                        <Button label='Thanh toán payos' style={{ marginTop: 15 }} onPressed={payos} />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    containerInformation: { flexDirection: 'row' },
    image: { width: 100, height: 140 },
    infoContainer: { marginStart: 10 },
    textTourName: { fontSize: 16, fontWeight: 'bold' },
    textDate: { fontSize: 14, color: 'black', marginTop: 5 },
    textTotalPrice: { fontSize: 14, color: 'black', marginTop: 5 },
    textContactInfo: { fontSize: 14, color: 'black', marginTop: 5 },
    label: { fontSize: 12, color: 'black', marginTop: 5 },
    horizontalLine: { height: 1, backgroundColor: '#B0B0B0', marginVertical: 10, width: '100%' },
    textTransactionInformation: { textAlign: 'center', fontSize: 18, fontWeight: 'bold', marginTop: 10 },
    transaction: { fontSize: 16, marginBottom: 5 },
    transactionthanhtoan: { fontSize: 16, fontWeight: 'bold', marginTop: 10, marginBottom: 5, textAlign: 'right', color: 'red' },
    containerpayment: { backgroundColor: '#F8F9FE', borderRadius: 10, marginTop: 50 }
});

export default Payment;

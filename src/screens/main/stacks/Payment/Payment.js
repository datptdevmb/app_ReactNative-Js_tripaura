import React, { useEffect, useState } from 'react';
import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import Header from '../../../../components/common/header/Header';
import stylesglobal from '../../../../constants/global';
import Button from '../../../../components/common/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { clearPaymentData, createPayment } from '../../../../redux/slices/paymentSlice';
import { fetchBookingById } from '../../../../redux/slices/booking.slice';

const Payment = ({ navigation, route }) => {
    const { bookingId } = route.params;
    const dispatch = useDispatch();

    // Redux states
    const paymentStatus = useSelector((state) => state.reducer.payment.status);
    const paymentInfo = useSelector((state) => state.reducer.payment.paymentInfo);
    const paymentError = useSelector((state) => state.reducer.payment.error);
    const bookingData = useSelector((state) => state.reducer.booking.bookingData);

    const [tourName, setTourName] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [numAdult, setNumAdult] = useState(0);
    const [numChildren, setNumChildren] = useState(0);
    const [priceAdult, setPriceAdult] = useState(0);
    const [priceChildren, setPriceChildren] = useState(0);
    const [fullname, setFullname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const [image, setImage] = useState('');

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(amount);
    };

    useEffect(() => {
        if (bookingId) {
            dispatch(fetchBookingById(bookingId));
        }
    }, [dispatch, bookingId]);

    useEffect(() => {
        if (bookingData?.data) {
            const booking = bookingData.data;
            setTourName(booking.tourName);
            setSelectedDate(booking.selectedDate);
            setNumAdult(booking.numAdult);
            setNumChildren(booking.numChildren);
            setPriceAdult(booking.priceAdult);
            setPriceChildren(booking.priceChildren);
            setFullname(booking.fullname);
            setPhone(booking.phone);
            setEmail(booking.email);
            setImage(booking.linkImage ? booking.linkImage[0] : '');
            const calculatedTotalPrice = (booking.numAdult * booking.priceAdult) + (booking.numChildren * booking.priceChildren);
            setTotalPrice(calculatedTotalPrice);
        }
    }, [bookingData]);

    useEffect(() => {
        if (paymentStatus === 'succeeded') {
            if (paymentInfo.paymentLink) {
                navigation.navigate('PaymentScreen', { url: paymentInfo.paymentLink, bookingId });
            }
            dispatch(clearPaymentData());
        } else if (paymentStatus === 'failed') {
            dispatch(clearPaymentData());
        }
    }, [paymentStatus, paymentInfo, dispatch, bookingId]);

    const handleBack = () => {
        navigation.goBack();
    };

    const zalopay = () => {
        // Implement ZaloPay payment here
    };

    const payos = () => {
        const orderId = Math.floor(100000 + Math.random() * 900000);

        if (!totalPrice || !tourName || !orderId || !fullname || !phone || !email) {
            Alert.alert('Lỗi', 'Thông tin thanh toán không đầy đủ. Vui lòng kiểm tra lại.');
            return;
        }

        dispatch(createPayment({
            amount: totalPrice,
            orderId,
            description: tourName,
            fullname,
            phone,
            email,
            bookingId
        }));
    };

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
                        <Text style={styles.textTourName}>Tên tour: {tourName}</Text>
                        <Text style={styles.textDate}>Ngày khởi hành: {selectedDate}</Text>
                        <Text style={styles.textContactInfo}>Thông tin liên hệ</Text>
                        <Text style={styles.label}>Name: {fullname}</Text>
                        <Text style={styles.label}>Email: {email}</Text>
                        <Text style={styles.label}>Phone: {phone}</Text>
                    </View>
                </View>

                <View style={styles.horizontalLine} />

                <View>
                    <Text style={styles.textTransactionInformation}>Thông tin giao dịch</Text>
                    <View>
                        <Text style={styles.transaction}>Vé người lớn: {numAdult}</Text>
                        <Text style={styles.transaction}>Vé trẻ em: {numChildren}</Text>
                        <View style={styles.horizontalLine} />
                        <Text style={styles.transactionthanhtoan}>Tổng tiền thanh toán: {formatCurrency(totalPrice)}</Text>
                    </View>
                </View>

                <View style={styles.containerpayment}>
                    <Text style={styles.textTotalPrice}>Phương thức thanh toán</Text>
                    <View style={styles.paymentMethods}>
                        <Button label="Thanh toán qua ZaloPay" onPressed={zalopay} style={{ marginTop: 29 }} />
                        <Button label="Thanh toán Payos" style={{ marginTop: 15 }} onPressed={payos} />
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
    containerpayment: { backgroundColor: '#F8F9FE', borderRadius: 10, marginTop: 50 },
    paymentMethods: { marginTop: 15 }
});

export default Payment;

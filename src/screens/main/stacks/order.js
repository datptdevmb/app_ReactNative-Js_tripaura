// OrderReviewScreen.js
import { ScrollView, StatusBar, StyleSheet, Text, View, NativeModules, Alert } from "react-native";
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

const OrderReviewScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const { tourById, adultTickets, childTickets, totalPrice, selectedDate } = useSelector((state) => state.reducer.tour);
    const { tourName } = tourById;

    console.log('tour name: ' + tourName);

    const paymentStatus = useSelector((state) => state.reducer.payment.status);

    console.log('paymentStatus', paymentStatus);

    const paymentInfo = useSelector((state) => state.reducer.payment.paymentInfo);
    console.log('paymentInfo', paymentInfo);

    const { getVoucherData } = useSelector((state) => state.reducer.vouchers);

    const detailId = tourById.details?.[0]?._id;
    const adultPrice = tourById.details?.[0]?.priceAdult;
    const childPrice = tourById.details?.[0]?.priceChildren;


    const voucherId = null;

    const userReducer = useSelector(state => state.reducer.auth);
    const user = userReducer.user;
    console.log('user: ', user);
    const userId = user.user._id

    const [selectedMethod, setSelectedMethod] = useState(null);


    useEffect(() => {
        dispatch(LayDanhSachVoucher(userId));
    }, [userId]);

    const handleVoucher = useCallback(() => {
        navigation.navigate('ListVoucherScreen');
    }, [navigation]);

    const handlePurchase = useCallback(async () => {
        const totalPriceString = totalPrice.toString();
        if (!selectedMethod) {
            console.log('No payment method selected');
            return;
        }

        console.log('Selected method:', selectedMethod);

        if (selectedMethod === 1) {
            ZaloPayModule.createOrder(totalPriceString, bookingId);
        }
        if (selectedMethod === 2) {
            console.log('Selected Pay on Site');
            payos();
        }
    }, [selectedMethod, totalPrice]);


    useEffect(() => {
        if (paymentStatus === 'succeeded') {
            if (paymentInfo.paymentLink && bookingId) {
                console.log('Navigating to PaymentScreen with bookingId:', bookingId);
                navigation.navigate('PaymentScreen', { url: paymentInfo.paymentLink, bookingId });
            } else {
                console.warn("Payment succeeded, but bookingId or paymentLink is missing");
            }
            dispatch(clearPaymentData());
        } else if (paymentStatus === 'failed') {
            console.log('Payment failed');
            dispatch(clearPaymentData());
        }
    }, [paymentStatus, paymentInfo, bookingId, dispatch]);


    const fullname = user.fullname
    const phone = user.phone
    const email = user.email

    console.log('fullname: ' + fullname);
    console.log('phone:'+ phone);
    console.log('email:'+ email);
    
    const payos = () => {
        console.log('payos function called');
        const orderId = Math.floor(100000 + Math.random() * 900000);
        const shortenedTourName = tourName.slice(0, 20);
        if (!totalPrice || !tourName || !orderId || !fullname || !phone || !email) {
            Alert.alert('Lỗi', 'Thông tin thanh toán không đầy đủ. Vui lòng kiểm tra lại.');
            return;
        }

        console.log('Dispatching createPayment action');
        dispatch(createPayment({
            amount: totalPrice,
            orderId,
            description: shortenedTourName,
            fullname,
            phone,
            email,
            bookingId
        }));
    };

    const handleBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <StatusBar translucent={false} barStyle="dark-content" backgroundColor="#FFF" />
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
                    <SelecVoucher onPress={handleVoucher} />
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
                    <Text style={styles.textPrice}>{formatCurrencyVND(totalPrice)}</Text>
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
        position: "absolute",
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

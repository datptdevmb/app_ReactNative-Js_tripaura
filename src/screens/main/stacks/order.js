import { ScrollView, StatusBar, StyleSheet, Text, View, NativeModules, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
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

const OrderReviewScreen = ({ route }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { bookingId: routeBookingId } = route.params;
    const { tourById, adultTickets, childTickets, totalPrice, selectedDate } = useSelector((state) => state.reducer.tour);
    const { tourName } = tourById;
    const [bookingId, setBookingId] = useState(routeBookingId);

    const paymentStatus = useSelector((state) => state.reducer.payment.status);
    const paymentInfo = useSelector((state) => state.reducer.payment.paymentInfo);

    const { getVoucherData } = useSelector((state) => state.reducer.vouchers);
    const detailId = tourById.details?.[0]?._id;
    const adultPrice = tourById.details?.[0]?.priceAdult;
    const childPrice = tourById.details?.[0]?.priceChildren;

    const { discount } = route.params
    const { voucherId } = route.params

    let finalPrice = (totalPrice && discount) ? totalPrice - discount : totalPrice;


    console.log('Total Price:', totalPrice);
    console.log('Discount:', discount);

    console.log('finalPrice', finalPrice);

    console.log("=================== discount", discount);
    console.log("=================== voucherId", voucherId);

    const userReducer = useSelector(state => state.reducer.auth);
    const user = userReducer.user;
    const userId = user.user._id;

    const [selectedMethod, setSelectedMethod] = useState(null);

    useEffect(() => {
        dispatch(LayDanhSachVoucher(userId));
    }, [userId]);

    const handleVoucher = useCallback(() => {
        navigation.navigate('ListVoucherScreen', { totalPrice: totalPrice });
    });


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

    const handleSaveBooking = async () => {
        if (bookingId) {
            console.log('Already have bookingId, no need to create a new one');
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
                handelNavigateToPayment(response.data._id);
            } else {
                console.log('Could not fetch bookingId');
            }
        } catch (error) {
            console.log('Error calling fetchBooking:', error);
        }
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

    const fullname = user.user.fullname;
    const phone = user.user.phone;
    const email = user.user.email;

    const payos = () => {
        const orderId = Math.floor(100000 + Math.random() * 900000);
        const shortenedTourName = tourName.slice(0, 20);
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
        position: "absolute",
        backgroundColor: "#fff",
        bottom: 0,
        padding: 20,
    },
    btn: {
        width: '100%',
        marginTop: 15,
    },
});

export default OrderReviewScreen;

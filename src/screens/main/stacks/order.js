// OrderReviewScreen.js
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import Header from "../../../components/common/header/Header";
import TourInfo from "./TourInfor";
import DepartureInfo from "./DepartureInfo";
import ContactInfo from "./ContactInfo";
import { useSelector } from "react-redux";
import Button from "../../../components/common/button/Button";
import formatCurrencyVND from "../../../untils/formatCurrencyVND";


const OrderReviewScreen = ({ navigation }) => {

    const {
        tourById,
        adultTickets,
        childTickets,
        totalPrice,
        selectedDate,
    } = useSelector((state) => state.reducer.tour);


    const { tourName } = tourById;

    const handleBack = () => {
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <StatusBar translucent={false} barStyle="dark-content" backgroundColor="#FFF" />
            <Header
                title={'Hoàn tất hóa đơn'}
                onBackPress={handleBack} />
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
                    <ContactInfo />

                </View>
            </ScrollView>
            <View style={styles.buttonBottom}>
                <View style={styles.row}>
                    <View>
                        <Text style={styles.text}>Tổng giá tiền</Text>
                        <Text style={styles.caption}>Đã bao gồm phí </Text>
                    </View>
                    <Text
                        style={styles.textPrice}>{formatCurrencyVND(totalPrice)}</Text>
                </View>
                <Button
                    style={styles.btn}
                    label="Mua ngay" />
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
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 11,
        fontStyle: 'italic'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#DA712F'
    },
    content: {
        paddingBottom: 120
    },
    buttonBottom:
    {

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
    }
});

export default OrderReviewScreen;

// TourInfo.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RefundPolicy from './detail/RefundPolicy';
import formatCurrencyVND from '../../../untils/formatCurrencyVND';
import formatDate from '../../../untils/formatDate';

const TourInfo = ({ tourName, date, adultCount, childCount, price }) => {
    return (
        <View style={styles.tourInfor}>
            <Text style={styles.tourName}>{tourName}</Text>
            <Text style={styles.text}>{formatDate(date)}</Text>
            <Text style={styles.text}>{`Người lớn: x${adultCount}`}</Text>
            <Text style={styles.text}>{`Trẻ em: x${childCount}`}</Text>
            <Text style={styles.price}>{formatCurrencyVND(price)}</Text>
            <RefundPolicy />
        </View>
    );
};

const styles = StyleSheet.create({
    tourInfor: {
        backgroundColor: 'white',
        padding: 16,
    },
    tourName: {
        marginTop: 14,
        color: "#212121",
        fontSize: 18,
        lineHeight: 27,
        fontFamily: 'Poppins-Bold',
        fontStyle: 'normal',
        fontWeight: '700',
    },
    price: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#DA712F'
    },

    text: {
        fontStyle: 'normal',
        fontWeight: '300',
        fontFamily: "Lato",
        marginTop: 5,
        fontSize: 13,
        color: '#757575',
    }
});

export default TourInfo;

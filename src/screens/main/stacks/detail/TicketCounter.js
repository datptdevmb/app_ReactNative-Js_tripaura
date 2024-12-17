import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Button from '../../../../components/common/button/Button'; // Assuming this is your custom button
import formatCurrencyVND from '../../../../untils/formatCurrencyVND';

const TicketCounter = ({
    label,
    price,
    age,
    count,
    onIncrease,
    onDecrease
}) => (
    <View style={styles.ticketRow}>
        <View>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.textPrice}>{formatCurrencyVND(price)}</Text>
            <Text style={styles.textage}>{age}</Text>
        </View>

        <View style={styles.ticketRow}>
            <TouchableOpacity onPress={onDecrease} style={styles.button}>
                <Text style={styles.buttonLabel}>-</Text>
            </TouchableOpacity>

            <Text style={styles.ticketCount}>{count}</Text>

            <TouchableOpacity onPress={onIncrease} style={styles.button}>
                <Text style={styles.buttonLabel}>+</Text>
            </TouchableOpacity>
        </View>
    </View>
);

const styles = StyleSheet.create({
    ticketRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    textPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#DA712F',
    },
    label: {
        fontSize: 14,
        fontFamily: 'Lato',
        color: '#8A8A8A',
        fontStyle: 'normal',
    },
    textage: {
        fontSize: 12,
        color: '#8A8A8A',
        fontStyle: 'normal',
    },
    button: {
        width: 40,
        height: 40,
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    buttonLabel: {
        color: '#000', 
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        width:'100%',
        height:'100%00'
    },
    ticketCount: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default TicketCounter;

import React, { memo } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FastImage from 'react-native-fast-image';

const PayMethod = ({ selectedMethod, setSelectedMethod }) => {
    const paymentMethods = [
        {
            id: 1,
            name: "Thanh toán với ZaloPay",
            logo: "https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-ZaloPay-Square-768x768.png",
        },
        {
            id: 2,
            name: "Thanh toán với PayOs",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs9ULmmyJBs3PlqlSpI_pJTDenFeJFhi8UAQ&s",
        },
    ];

    return (
        <View style={styles.container}>
            <Text>Chọn phương thức thanh toán</Text>
            {paymentMethods.map((method) => (
                <TouchableOpacity
                    key={method.id}
                    style={styles.flexRow}
                    onPress={() => setSelectedMethod(method.id)}
                >
                    <FastImage
                        style={{ width: 30, height: 30 }}
                        source={{
                            uri: method.logo,
                        }}
                        resizeMode={FastImage.resizeMode.cover}
                    />
                    <Text style={styles.text}>{method.name}</Text>
                    <View style={selectedMethod === method.id ? styles.radioSelected : styles.radio} />
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default memo(PayMethod);

const styles = StyleSheet.create({
    flexRow: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: "grey",
        paddingVertical: 10,
        borderBottomWidth: 0.4,
        marginTop: 12,
    },
    container: {
        backgroundColor: "white",
        marginTop: 2,
        paddingVertical: 10,
        paddingHorizontal: 14,
    },
    text: {
        marginStart: 12,
        flex: 1,
    },
    radio: {
        width: 16,
        height: 16,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: "#DA712F",
        marginLeft: 10,
    },
    radioSelected: {
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: "#DA712F",
        marginLeft: 10,
    },
});

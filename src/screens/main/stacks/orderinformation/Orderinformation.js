import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import Header from '../../../../components/common/header/Header';
import Icons from '../../../../constants/Icons';

const OrderInformation = () => {
    return (
        <ScrollView style={styles.container}>
            <Header title="Chi tiết thanh toán" />

            <View style={styles.containerformation}>

            <View style={styles.card}>
                <Text style={styles.sectionTitle}>Thông tin khách hàng</Text>
                <Text style={styles.infoText}>Tên khách hàng: <Text style={styles.highlight}>Nguyễn Minh Nhựt</Text></Text>
                <Text style={styles.infoText}>Email: <Text style={styles.highlight}>nguyenvana@gmail.com</Text></Text>
                <Text style={styles.infoText}>Số điện thoại: <Text style={styles.highlight}>0987654321</Text></Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.sectionTitle}>Chi tiết đơn hàng</Text>
                <Text style={styles.infoText}>Tour: <Text style={styles.highlight}>Tour du lịch Vịnh Hạ Long</Text></Text>
                <Image source={Icons.image} style={styles.image} />
                <Text style={styles.infoText}>Số lượng người lớn: <Text style={styles.highlight}>1</Text></Text>
                <Text style={styles.infoText}>Số lượng trẻ em: <Text style={styles.highlight}>2</Text></Text>
                <Text style={styles.infoText}>Ngày đặt: <Text style={styles.highlight}>2022-01-01</Text></Text>
                <Text style={styles.infoText}>Giá tour người lớn: <Text style={styles.highlight}>1.000.000 VNĐ</Text></Text>
                <Text style={styles.infoText}>Giá tour trẻ em: <Text style={styles.highlight}>500.000 VNĐ</Text></Text>
                <Text style={styles.totalText}>Tổng tiền: <Text style={styles.highlight}>2.000.000 VNĐ</Text></Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.sectionTitle}>Thông tin thanh toán</Text>
                <Text style={styles.infoText}>Phương thức thanh toán: <Text style={styles.highlight}>Thanh toán online</Text></Text>
                <Text style={[styles.infoText, styles.statusText]}>Tình trạng: <Text style={styles.highlight}>Đã thanh toán</Text></Text>
            </View>
            </View>
        </ScrollView>
    );
};

export default OrderInformation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8',
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
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#E74C3C',
        marginBottom: 15,
    },
    statusText: {
        color: '#27AE60',
        fontWeight: '600',
    },
    highlight: {
        fontWeight: 'bold',
        color: '#2980B9',
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

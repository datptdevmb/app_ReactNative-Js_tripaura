import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../../../../components/common/header/Header';
import Icons from '../../../../constants/Icons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookingsByUserId } from '../../../../redux/slices/booking.slice';
import colors from '../../../../constants/colors';

const Purchasehistory = ({ navigation }) => {
    const dispatch = useDispatch();
    const { bookings } = useSelector((state) => state.reducer.booking);
    const userReducer = useSelector(state => state.reducer.auth);
    const user = userReducer.user;
    const userId = user.user._id;

    const [selectedStatus, setSelectedStatus] = useState(0);

    useEffect(() => {
        if (userId) {
            dispatch(fetchBookingsByUserId(userId));
        }
    }, [dispatch, userId]);

    const onBackPress = () => {
        navigation.goBack();
    };

    const renderItem = ({ item }) => {
        const image = item.linkImage ? item.linkImage[0] : null;

        const { tourName, selectedDate, numAdult, numChildren, priceAdult, priceChildren, fullname, phone, email } = item;
        const totalCost = (item.numAdult * item.priceAdult) + (item.numChildren * item.priceChildren);

        console.log('fullname: ' + fullname);
        console.log('phone: '+ phone);
        console.log('email: '+ email);
        
        const handlePress = () => {
            if (item.status !== 2 && item.status !== 1) {
                navigation.navigate('OrderInformation', { bookingId: item._id });
            }
        };

        const handlePaymentPress = () => {

            const totalPrice = (numAdult * priceAdult) + (numChildren * priceChildren);
            const childPrice = numChildren * priceChildren;

            console.log('tourname', tourName);


            navigation.navigate('Payment', {
                bookingId: item._id
            });
        };

        if (item.status !== selectedStatus) {
            return null;
        }

        const statusText = item.status === 0 ? 'Đã thanh toán' : item.status === 1 ? 'Chưa thanh toán' : 'Đã hủy';

        return (
            <TouchableOpacity onPress={handlePress}>
                <View style={styles.card}>
                    <Image style={styles.image} source={{ uri: image || Icons.image }} />
                    <View style={styles.containeritem}>
                        <Text style={styles.dateText}>Ngày: {item.createAt ? new Date(item.createAt).toLocaleDateString() : 'N/A'}</Text>
                        <Text style={styles.tourText}>Tour: {tourName}</Text>
                        <Text style={styles.priceText}>Tổng giá: {totalCost ? totalCost.toLocaleString() : 'N/A'} VNĐ</Text>
                        <View style={styles.statusTextContainer}>
                            <Text style={styles.statusLabel}>Trạng thái: </Text>
                            <Text
                                style={[
                                    styles.statusText,
                                    { color: item.status === 0 ? '#2980B9' : 'red' }
                                ]}
                            >
                                {statusText}
                            </Text>
                        </View>
                        {item.status === 1 && (
                            <TouchableOpacity onPress={handlePaymentPress} style={styles.paymentButton}>
                                <Text style={styles.paymentButtonText}>Thanh toán</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <ScrollView style={styles.container}>
            <Header onBackPress={onBackPress} title={"Lịch sử mua hàng"} />
            <View style={styles.statusContainer}>
                <TouchableOpacity onPress={() => setSelectedStatus(0)}>
                    <Text style={[styles.statusButton, selectedStatus === 0 && styles.activeStatus]}>
                        Đã thanh toán
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedStatus(1)}>
                    <Text style={[styles.statusButton, selectedStatus === 1 && styles.activeStatus]}>
                        Chưa thanh toán
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedStatus(2)}>
                    <Text style={[styles.statusButton, selectedStatus === 2 && styles.activeStatus]}>
                        Đã hủy
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={{ padding: 16 }}>
                <FlatList
                    data={bookings}
                    renderItem={renderItem}
                    keyExtractor={(item) => item._id}
                    contentContainerStyle={styles.container}
                    scrollEnabled={false}
                />
            </View>
        </ScrollView>
    );
};

export default Purchasehistory;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    statusContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 16,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    statusButton: {
        fontSize: 16,
        color: '#000',
    },
    activeStatus: {
        color: '#2196F3',
        fontWeight: 'bold',
    },
    containeritem: {
        width: '100%',
    },
    card: {
        backgroundColor: '#fff',
        marginBottom: 12,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        flexDirection: 'row',
        alignItems: 'center',
    },
    dateText: {
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
        paddingVertical: 2,
    },
    tourText: {
        fontSize: 16,
        color: '#333',
        paddingVertical: 2,
    },
    priceText: {
        fontSize: 16,
        color: '#27AE60',
        paddingVertical: 2,
    },
    statusTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 2,
    },
    statusLabel: {
        fontSize: 16,
        color: '#333',
    },
    statusText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2980B9',
        paddingVertical: 2,
    },
    image: {
        width: 90,
        height: 140,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        marginEnd: 10,
        resizeMode: 'cover',
    },
    paymentButton: {
        backgroundColor: '#0033FF',
        paddingVertical: 6,
        borderBottomRightRadius: 8,
        justifyContent: 'center',
        width: '70%',
    },

    paymentButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

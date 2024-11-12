import { StyleSheet, Text, View, FlatList, Image, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import Header from '../../../../components/common/header/Header';
import Icons from '../../../../constants/Icons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookingsByUserId } from '../../../../redux/slices/booking.slice';

const Purchasehistory = ({ navigation }) => {
    const dispatch = useDispatch();
    const { bookings } = useSelector((state) => state.reducer.booking);
    const userReducer = useSelector(state => state.reducer.auth);
    const user = userReducer.user;
    console.log('user: ', user);
    const userId = user.user._id
    console.log('userId: ', userId);

    useEffect(() => {
        if (userId) {
            dispatch(fetchBookingsByUserId(userId));
        }
    }, [dispatch, userId]);

    const onBackPress = function () {
        navigation.goBack();
    }



    const renderItem = ({ item }) => {
        console.log('Rendering item:', item);
        const image = item.linkImage ? item.linkImage[0] : null;
        const totalCost = (item.numAdult * item.priceAdult) + (item.numChildren * item.priceChildren);

        const handlePress = () => {
            navigation.navigate('OrderInformation', { bookingId: item._id });
        };
        return (
            <TouchableOpacity onPress={handlePress}>
                <View style={styles.card}>
                    <Image style={styles.image} source={{ uri: image || Icons.image }} />
                    <View>
                        <Text style={styles.dateText}>Ngày: {item.createAt ? new Date(item.createAt).toLocaleDateString() : 'N/A'}</Text>
                        <Text style={styles.tourText}>Tour: {item.tourName}</Text>
                        <Text style={styles.priceText}>Tổng giá: {totalCost ? totalCost.toLocaleString() : 'N/A'} VNĐ</Text>
                        <Text style={styles.statusText}>Trạng thái: {item.status === 1 ? 'Chưa thanh toán' : 'Đã thanh toán'}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <ScrollView style={styles.container}

        >
            <Header onBackPress={onBackPress} title={"Lịch sử mua hàng"} />
            <View style={{ padding: 16 }}>
                <FlatList
                    data={bookings}
                    renderItem={renderItem}
                    keyExtractor={(item) => item._id}
                    contentContainerStyle={styles.listContainer}
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
    },
    tourText: {
        fontSize: 16,
        color: '#333',
        marginVertical: 4,
    },
    priceText: {
        fontSize: 16,
        color: '#27AE60',
        marginVertical: 4,
    },
    statusText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2980B9',
        marginTop: 8,
    },
    image: {
        width: 90,
        height: 130,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        marginEnd: 10,
        resizeMode: 'cover',
    }
});

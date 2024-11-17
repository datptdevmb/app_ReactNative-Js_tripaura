import { FlatList, StyleSheet, Text, View, TouchableOpacity, ImageBackground, ToastAndroid } from 'react-native';
import React, { useEffect, useState } from 'react';
import Headercomponet from '../../../components/common/header/Headercomponet';
import { useDispatch, useSelector } from 'react-redux';
import { LayDanhSachVoucher } from '../../../redux/slices/vouchersSlice';
import fontsize from '../../../constants/fontsize';

const ChonVoucher = ({ navigation, route }) => {
    const { totalPrice } = route.params;
    const [btn, setbtn] = useState(false);
    const dispatch = useDispatch();
    const { getVoucherData, getVoucherStatus } = useSelector((state) => state.reducer.vouchers);
    const userReducer = useSelector(state => state.reducer.auth);
    const user = userReducer.user;

    useEffect(() => {
        if (user && user._id) {
            dispatch(LayDanhSachVoucher(user._id));
        }
    }, [user]); // Dependency on user data to fetch vouchers

    const onPressItem = (discount, voucherId) => {
        if (totalPrice > discount) {
            navigation.navigate('Order', { discount: discount, voucherId: voucherId });
        } else {
            ToastAndroid.show('Không đủ điều kiện', ToastAndroid.SHORT);
        }
    };

    const formatCurrencyVND = amount => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 0,
        }).format(amount);
    };

    const renderItemSearch = ({ item }) => (
        <View style={styles.itemContainer}>
            <TouchableOpacity
                onPress={() => onPressItem(item.discount, item._id)}
                disabled={totalPrice < item.condition}>
                <ImageBackground source={require('./../../../assets/images/backgroudVoucher.png')} resizeMode='cover' style={styles.itemImage}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: 100, height: 100, justifyContent: 'center' }}>
                            <Text style={styles.textTitle}>Trip Aura</Text>
                        </View>
                        <View>
                            <Text style={styles.itemName}>{item.description}</Text>
                            <Text style={styles.itemPrice}>Tối đa: {formatCurrencyVND(item.discount)}</Text>
                        </View>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Headercomponet
                leftIcon={require('./../../../assets/images/close.png')}
                onPressLeftIcon={() => navigation.goBack()}
                title={"Chọn Voucher"}
            />
            {getVoucherStatus === 'loading' ? (
                <Text>Loading...</Text> // Show loading state
            ) : (
                <FlatList
                    data={getVoucherData.data}
                    keyExtractor={item => item._id}
                    renderItem={renderItemSearch}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        marginBottom: 20,
    },
    itemImage: {
        width: '100%',
        height: 120,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 10,
    },
    itemName: {
        fontSize: fontsize.sm,
        color: '#4D4D4D',
        fontWeight: '700',
        marginTop: 16,
        marginLeft: 16,
        marginRight: 16,
    },
    itemPrice: {
        fontSize: fontsize.sm,
        color: 'black',
        fontWeight: '700',
        marginLeft: 16,
        marginRight: 16,
    },
    container: {
        flex: 1,
        padding: 16,
    },
    textTitle: {
        width: 38,
        color: '#0572E7',
        textAlign: 'center',
        fontSize: fontsize.sm,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});

export default ChonVoucher;

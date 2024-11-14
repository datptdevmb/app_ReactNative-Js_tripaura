import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import Headercomponet from '../../../components/common/header/Headercomponet';
import { useDispatch, useSelector } from 'react-redux';
import { LayDanhSachVoucher } from '../../../redux/slices/vouchersSlice';
import { data } from '../../../../constants/data';
import fontsize from '../../../constants/fontsize';

const ChonVoucher = ({ navigation, route }) => {
    const { totalPrice } = route.params
    console.log("============price", totalPrice);
    const [btn, setbtn] = useState(false)
    const dispatch = useDispatch()
    const { getVoucherData, getVoucherStatus } = useSelector((state) => state.reducer.vouchers);
    const userReducer = useSelector(state => state.reducer.auth);
    const user = userReducer.user

    // console.log(user.user._id);

    useEffect(() => {
        // dispatch(LayDanhSachVoucher(user.user._id))
        dispatch(LayDanhSachVoucher('6709c68681507ec7a47b03cc'))
    }, [])
    // console.log("====== data", getVoucherData.data);


    const onPressItem = (discount, voucherId) => {
        if (totalPrice > discount) {
            navigation.navigate('Order', { discount: discount, voucherId: voucherId })
        } else {
            ToastAndroid.show('không đủ điều kiên', ToastAndroid.SHORT)
        }
    }

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
                <View></View>
                <ImageBackground source={require('./../../../assets/images/backgroudVoucher.png')} resizeMode='cover' style={{ padding: 10 }} >
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{
                            width: 100, height: 100, marginLeft: 32, justifyContent: 'center'
                        }}>
                            <Text style={styles.textTitle}>Trip Aura</Text>
                        </View>
                        <View>
                            <Text style={styles.itemName} >{item.description}</Text>

                            <Text style={styles.itemPrice}>Tối đa: {formatCurrencyVND(item.discount)} </Text>
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
                onPressLeftIcon={() => { navigation.goBack() }}
                title={"Chọn Voucher"} />

            <FlatList
                data={getVoucherData.data}
                keyExtractor={item => item._id}
                renderItem={renderItemSearch}

            />
        </View>
    )
}

export default ChonVoucher

const styles = StyleSheet.create({
    textTitleDisable: {
        width: 38,
        color: '#0572E7',
        textAlign: 'center',
        fontSize: fontsize.sm,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    textTitle: {
        width: 38,
        color: '#0572E7',
        textAlign: 'center',
        fontSize: fontsize.sm,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    itemContainer: {

        marginBottom: 20,
    },
    itemImage: {
        width: '100%',
        height: 120,
        borderTopLeftRadius: 10, // Bo góc trên bên trái
        borderTopRightRadius: 10, // Bo góc trên bên phải
    },
    itemName: {
        height: 40,
        width: 160,
        fontSize: fontsize.sm,
        color: '#4D4D4D',
        fontWeight: 'bold',
        marginTop: 16,
        marginLeft: 16,
        marginRight: 16,
        fontWeight: '700',
    },
    itemPrice: {
        fontSize: fontsize.sm,
        color: 'black',
        fontWeight: '700',
        marginLeft: 16,
        marginRight: 16,
    },
    itemDay: {
        height: 16,
        fontSize: fontsize.fm,
        color: '#757575',
        marginLeft: 8,
        marginRight: 16,
        fontWeight: '700',
    },
    container: {
        flex: 1,
        padding: 16
    }
})
// import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import Headercomponet from '../../../components/common/header/Headercomponet';
// import { useDispatch, useSelector } from 'react-redux';
// import { LayDanhSachVoucher } from '../../../redux/slices/vouchersSlice';


// const ListVoucherScreen = () => {

//     const dispatch = useDispatch()
//     const { getVoucherData, getVoucherStatus } = useSelector((state) => state.reducer.getVoucher);
//     const userReducer = useSelector(state => state.reducer.auth);
//     const user = userReducer.user

//     console.log(user.user._id);

//     useEffect(() => {
//         dispatch(LayDanhSachVoucher(user.user._id))
//     }, [])
//     console.log("====== data", getVoucherData.data);
//     const formatCurrencyVND = amount => {
//         return new Intl.NumberFormat('vi-VN', {
//             style: 'currency',
//             currency: 'VND',
//             minimumFractionDigits: 0,
//         }).format(amount);
//     };

//     const renderItemSearch = ({ item }) => (
//         <View style={styles.itemContainer}>
//             <TouchableOpacity
//                 onPress={() => onPressItem(item.voucherId._id)}>

//                 <View style={{ flexDirection: 'row' }}>
//                     <View>
//                         <Image style={{
//                             width: 100, height: 100, borderTopLeftRadius: 10, borderBottomLeftRadius: 10
//                         }} source={require('../../../../assets/images/imgVoucher.webp')} />
//                     </View>
//                     <View>
//                         <Text style={styles.itemName} >{item.voucherId.description}</Text>

//                         <Text style={styles.itemPrice}>Tối đa: {formatCurrencyVND(item.voucherId.discount)} </Text>
//                     </View>

//                 </View>

//             </TouchableOpacity>
//         </View>
//     );



//     return (
//         <View style={styles.container}>
//             <Headercomponet
//                 leftIcon={require('../../../../assets/images/close.png')}
//                 onPressLeftIcon={() => { }}
//                 title={"Chọn Voucher"} />

//             <FlatList
//                 data={getVoucherData.data}
//                 keyExtractor={item => item._id}
//                 renderItem={renderItemSearch}

//             />
//         </View>
//     )
// }

// export default ListVoucherScreen

// const styles = StyleSheet.create({
//     itemContainer: {
//         height: 100,
//         backgroundColor: '#F8F9FE',
//         borderRadius: 10,
//         marginBottom: 20
//     },
//     itemImage: {
//         width: '100%',
//         height: 120,
//         borderTopLeftRadius: 10, // Bo góc trên bên trái
//         borderTopRightRadius: 10, // Bo góc trên bên phải
//     },
//     itemName: {
//         height: 40,
//         width: 220,
//         fontSize: fontsize.sm,
//         color: '#4D4D4D',
//         fontWeight: 'bold',
//         marginTop: 16,
//         marginLeft: 16,
//         marginRight: 16,
//         fontWeight: '700',
//     },
//     itemPrice: {
//         fontSize: fontsize.sm,
//         color: 'black',
//         fontWeight: '700',
//         marginLeft: 16,
//         marginRight: 16,
//     },
//     itemDay: {
//         height: 16,
//         fontSize: fontsize.fm,
//         color: '#757575',
//         marginLeft: 8,
//         marginRight: 16,
//         fontWeight: '700',
//     },
//     container: {
//         flex: 1,
//         padding: 16
//     }
// })
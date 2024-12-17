import { StyleSheet, Text, View, ScrollView, FlatList, RefreshControl, TouchableOpacity } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import Headercomponet from './../../../../components/common/header/Headercomponet';
import Icons from './../../../../constants/Icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { LayDanhSachVoucher } from '../../../../redux/slices/vouchersSlice';
import colors from '../../../../constants/colors';
import fontsize from '../../../../constants/fontsize';
import Vouchercomponent from './../../../../components/multiComponent/vouchercomponent';
import FastImage from 'react-native-fast-image';
import IcLocate from '../../../../assets/icons/Ic_locate';
import { useHomeData } from '../../../../hooks/useHomeData';

const Voucher = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { getVoucherData } = useSelector((state) => state.reducer.vouchers);
  const userReducer = useSelector(state => state.reducer.auth);
  const user = userReducer.user;
      const { categories, tours, loading, popularTours, images, isLoading } = useHomeData();

  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (user?.user?._id) {
      dispatch(LayDanhSachVoucher(user.user._id));
    }
  }, [user?.user?._id]);

  const hasVoucherData = getVoucherData?.data?.length > 0;

  const renderItem = useCallback(({ item, index }) => {
    return (
      <TouchableOpacity
        key={index.toString()}
        onPress={() => handleClickItem(item._id)}
        style={styles.viewItem}
      >
        <FastImage
          style={styles.image}
          source={{
            uri: item?.image[0] || 'https://example.com/default-image.jpg',
          }}
          fallback={true}
        />
        <Text numberOfLines={2} style={styles.textName}>{item.tourName}</Text>
        <View style={styles.locationContainer}>
          <IcLocate />
          <Text numberOfLines={1}>{item?.destination}</Text>
        </View>
      </TouchableOpacity>
    );
  }, []);

  const handleClickItem = (_id) => {
    navigation.navigate('Detail', { _id });
  };

  const onRefresh = () => {
    setRefreshing(true);
    setRefreshing(false);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Headercomponet
        leftIcon={Icons.ic_leftarrow}
        title={"Ưu đãi"}
        onPressLeftIcon={() => navigation.goBack()}
      />
      <View style={styles.containervoucher}>
        <Text style={styles.txtmauudai}>Voucher</Text>
        <View style={styles.contaivorcher}>
          {hasVoucherData ? (
            <Vouchercomponent data={getVoucherData.data} />
          ) : (
            <Text style={{ color: colors.grey }}>Không có voucher nào.</Text>
          )}
        </View>
      </View>

      <View style={styles.popularToursContainer}>
        <Text style={styles.text}>Tour đang giảm giá</Text>
        <FlatList
          data={popularTours}
          renderItem={renderItem}
          numColumns={2}
          scrollEnabled={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          style={styles.flatList}
        />
      </View>

      <View style={{ height: 120 }} />
    </ScrollView>
  );
};

export default Voucher;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containervoucher: {
    width: '100%',
    marginTop: 33,
    borderRadius: 20,
    backgroundColor: '#E9967A',
    padding: 10,
  },
  txtmauudai: {
    color: 'white',
    fontFamily: 'Lato',
    fontSize: fontsize.sm,
    fontWeight: '700',
    marginStart: 10,
    paddingVertical: 10,
  },
  contaivorcher: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.Lavendermist,
    borderRadius: 15,
  },
  popularToursContainer: {
    marginTop: 13,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
    textDecorationLine: 'underline',
  },
  viewItem: {
    width: '48%',
    margin: '1%',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  textName: {
    fontWeight: '600',
    marginTop: 10,
    fontSize: 14,
  },
  locationContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  flatList: {
    marginTop: 10,
  },
});

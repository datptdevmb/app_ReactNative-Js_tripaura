import React, {useEffect, useState, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {styles} from './FavoriteScreenStyle';
import IcNFavorite from '../../../../assets/icons/bottom_tab/Ic_NtFavorite';
import {ToastAndroid} from 'react-native'; // Import ToastAndroid

import {
  LayDanhSachYeuThich,
  themXoaYeuThichTour,
} from '../../../../redux/slices/favouriteducers';
import {XaoYeuThich} from '../../../../redux/slices/favouriteDeleteDucers';

const FavoriteScreen = ({route}) => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.reducer.auth);
  const {favoritesData, favoritesStatus} = useSelector(
    state => state.reducer.favorites,
  );

  const [refreshing, setRefreshing] = useState(false);

  useFocusEffect(
    useCallback(() => {
      if (user?.user?._id) {
        dispatch(LayDanhSachYeuThich(user.user._id));
      }
    }, [dispatch, user]),
  );

  useEffect(() => {
    if (user?.user?._id) {
      dispatch(LayDanhSachYeuThich(user.user._id));
    }
  }, [dispatch, user]);

  const handleToggleFavorite = selectedTourId => {
    const userId = user.user._id;
    if (!selectedTourId) {
      Alert.alert('Thông báo', 'Không tìm thấy tourId');
      return;
    }
    Alert.alert(
      'Xác nhận',
      'Bạn có chắc chắn muốn xóa địa điểm yêu thích này không?',
      [
        {text: '❌ Hủy', style: 'cancel'}, // Nút Hủy với biểu tượng
        {
          text: '🗑️ Xóa',
          style: 'destructive',
          onPress: async () => {
            try {
              await dispatch(XaoYeuThich({userId, tourId: selectedTourId}));
              ToastAndroid.show(
                'Địa điểm đã được xóa khỏi yêu thích.',
                ToastAndroid.SHORT,
              );
              dispatch(LayDanhSachYeuThich(userId));
            } catch (error) {
              ToastAndroid.show(
                'Có lỗi xảy ra khi xóa địa điểm yêu thích.',
                ToastAndroid.LONG,
              );
            }
          },
        },
      ],
    );
  };

  const renderFavoriteItem = ({item}) => {
    const tourId = item.tourId || '';
    const tourName = item.tourName || 'Tên tour không có';
    const startDay = item.details?.[0]?.startDay || '';
    const priceAdult = item.details?.[0]?.priceAdult || '';

    const renderRightActions = () => (
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleToggleFavorite(tourId)}>
        <Image
          source={require('../../../../assets/icons/bin.png')}
          style={styles.deleteIcon}
        />
      </TouchableOpacity>
    );

    return (
      <View style={styles.itemContainer}>
        <View>
          {item.images?.[0]?.[0] ? (
            <Image source={{uri: item.images[0][0]}} style={styles.image} />
          ) : (
            <View style={styles.image} />
          )}

          {/* Đặt icon yêu thích nằm trong ảnh */}
          <TouchableOpacity
            style={styles.favoriteIcon}
            onPress={() => handleToggleFavorite(tourId)}>
            <IcNFavorite />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.name}>{tourName}</Text>

          {startDay && priceAdult && (
            <View>
              <Text style={styles.day}>
                {new Date(startDay).toLocaleDateString()}
              </Text>
              <Text style={styles.price}>
                {priceAdult.toLocaleString()} VNĐ
              </Text>
            </View>
          )}
        </View>
      </View>
    );
  };

  const onRefresh = () => {
    setRefreshing(true);
    if (user?.user?._id) {
      dispatch(LayDanhSachYeuThich(user.user._id)).finally(() =>
        setRefreshing(false),
      );
    } else {
      setRefreshing(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texty}>Yêu thích</Text>
      {favoritesStatus === 'loading' ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : favoritesData?.length > 0 ? (
        <FlatList
          data={favoritesData}
          renderItem={renderFavoriteItem}
          keyExtractor={(item, index) => item.tourId || index.toString()}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      ) : (
        <View style={styles.centeredContainer}>
          <Image
            resizeMode="contain"
            source={require('./../../../../assets/images/Favorite.png')}
            style={styles.image}
          />
          <Text style={styles.textt}>Bạn chưa có địa điểm yêu thích ?</Text>
          <Text style={styles.texttt}>
            Chọn địa điểm yêu thích ngay thôi nào
          </Text>
        </View>
      )}
    </View>
  );
};

export default FavoriteScreen;

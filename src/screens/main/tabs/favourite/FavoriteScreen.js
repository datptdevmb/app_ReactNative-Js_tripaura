import React, {useState, useCallback, useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import {styles} from './FavoriteScreenStyle';
import IcNFavoriteScreen from '../../../../assets/icons/bottom_tab/Ic_FavoriteScreen';
import {LayDanhSachYeuThich} from '../../../../redux/slices/favouriteducers';
import {XaoYeuThich} from '../../../../redux/slices/favouriteDeleteDucers';

const FavoriteScreen = () => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.reducer.auth);
  const {favoritesData, favoritesStatus} = useSelector(
    state => state.reducer.favorites,
  );

  const [isLoading, setIsLoading] = useState(true); // Kiểm soát loading

  // Tải danh sách yêu thích khi lần đầu vào màn hình
  const loadFavorites = async () => {
    if (user?.user?._id) {
      await dispatch(LayDanhSachYeuThich(user.user._id));
    }
    setIsLoading(false); // Ngừng hiển thị loading sau khi tải xong
  };

  // Chỉ gọi API khi màn hình focus
  useFocusEffect(
    useCallback(() => {
      loadFavorites();
    }, [dispatch, user]),
  );

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
        {text: '❌ Hủy', style: 'cancel'},
        {
          text: '🗑️ Xóa',
          style: 'destructive',
          onPress: async () => {
            try {
              // Gọi API xóa
              await dispatch(XaoYeuThich({userId, tourId: selectedTourId}));

              // Cập nhật Redux
              dispatch(LayDanhSachYeuThich(selectedTourId));
              loadFavorites();

              // Hiển thị thông báo thành công
              ToastAndroid.show(
                'Địa điểm đã được xóa khỏi yêu thích.',
                ToastAndroid.SHORT,
              );
            } catch (error) {
              // Hiển thị thông báo lỗi nếu có
              console.error('Có lỗi xảy ra khi xóa:', error);
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

    return (
      <View style={styles.itemContainer}>
        <View>
          {item.images?.[0]?.[0] ? (
            <Image source={{uri: item.images[0][0]}} style={styles.image} />
          ) : (
            <View style={styles.image} />
          )}
          <TouchableOpacity
            style={styles.favoriteIcon}
            onPress={() => handleToggleFavorite(tourId)}>
            <IcNFavoriteScreen style={styles.tym} />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
            {tourName}
          </Text>
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

  return (
    <View style={styles.container}>
      <Text style={styles.texty}>Yêu thích</Text>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : favoritesData?.length > 0 ? (
        <FlatList
          data={favoritesData}
          renderItem={renderFavoriteItem}
          keyExtractor={(item, index) => item.tourId || index.toString()}
          contentContainerStyle={{paddingBottom: 100}} // Thêm padding nếu cần
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

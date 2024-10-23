import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { LayDanhSachYeuThich, themXoaYeuThichTour } from '../../../../redux/slices/favouriteducers';
import Swipeable from 'react-native-gesture-handler/Swipeable';


const FavoriteScreen = ({ route }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.reducer.auth);
  const { favoritesData, favoritesStatus } = useSelector(state => state.reducer.favorites);

  console.log(user?.user)

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

    dispatch(themXoaYeuThichTour({ userId, tourId: selectedTourId }))
    

  };

  const renderFavoriteItem = ({ item }) => {
    const tourId = item.tourId || '';  // Kiểm tra xem tourId có tồn tại không
    const tourName = item.tourName || 'Tên tour không có';
    const tourDescription = item.description || 'Mô tả không có';
    const startDay = item.details?.[0]?.startDay || '';
    const priceAdult = item.details?.[0]?.priceAdult || '';

    const renderRightActions = () => (
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleToggleFavorite(tourId)}
      >
        <Image
          source={require('../../../../assets/icons/bin.png')}
          style={styles.deleteIcon}
        />
      </TouchableOpacity>
    );

    return (
      <Swipeable renderRightActions={renderRightActions} overshootRight={false}>
        <View style={styles.itemContainer}>
          {item.images?.[0]?.[0] ? (
            <Image
              source={{ uri: item.images[0][0] }}
              style={styles.image}
            />
          ) : (
            <View style={styles.placeholderImage} />
          )}
          <View style={styles.detailsContainer}>
            <Text style={styles.name}>
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
      </Swipeable>
    );
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
          keyExtractor={item => item.tourId || `${Math.random()}`} // Sửa keyExtractor
        />
      ) : (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image
            resizeMode="contain"
            source={require('./../../../../assets/images/Favorite.png')}
            style={styles.image}
          />
          <Text style={styles.textt}>Bạn chưa có địa điểm yêu thích ?</Text>
          <Text style={styles.texttt}>Chọn địa điểm yêu thích ngay thôi nào</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  texty: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
  },
  day: {
    fontSize: 14,
    color: '#555',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e91e63',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  placeholderImage: {
    width: 100,
    height: 100,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
  deleteIcon: {
    width: 20,
    height: 20,
  },
  textt: {
    fontSize: 16,
    marginTop: 10,
  },
  texttt: {
    fontSize: 14,
    color: '#777',
  },
});

export default FavoriteScreen;

import React, {useEffect, useState} from 'react'; // Thêm useState vào import
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
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import {LayDanhSachYeuThich} from '../../../../redux/slices/favouriteducers';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {styles} from './FavoriteScreenStyle';
import Header from '../../../../components/common/header/Headercomponet';
import {XaoYeuThich} from '../../../../redux/slices/favouriteDeleteDucers';

const FavoriteScreen = ({route}) => {
  const dispatch = useDispatch();
  const [userId, setUserId] = useState(null);
  const {favoritesData, favoritesStatus} = useSelector(
    state => state.reducer.favorites,
  );

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const storedUserId = await AsyncStorage.getItem('userId'); 
        if (storedUserId) {
          setUserId(storedUserId);
          dispatch(LayDanhSachYeuThich(storedUserId)); 
        }
      } catch (error) {
        console.error('Lỗi khi lấy userId từ AsyncStorage:', error);
      }
    };
    fetchUserId();
  }, [dispatch]);

  const handleToggleFavorite = selectedTourId => {
    if (!selectedTourId) {
      Alert.alert('Thông báo', 'Không tìm thấy tourId');
      return;
    }

    // Gọi API xóa yêu thích với đúng userId và selectedTourId
    dispatch(XaoYeuThich({userId, tourId: selectedTourId}))
      .then(response => {
        if (response.payload) {
          console.log('Xóa thành công tourId:', selectedTourId);
          ToastAndroid.show('Xóa Thành Công!', ToastAndroid.SHORT);
          dispatch(LayDanhSachYeuThich(userId));
        } else {
          Alert.alert('Thông báo', 'Không thể xóa yêu thích, hãy thử lại sau.');
          console.log('Không xóa được, dữ liệu trả về:', response);
        }
      })
      .catch(error => {
        console.error('Lỗi khi xóa yêu thích:', error);
        Alert.alert('Thông báo', `Không thể xóa yêu thích: ${error.message}`);
      });
  };

  const renderFavoriteItem = ({item}) => {
    const tour = item.tour && item.tour.length > 0 ? item.tour[0] : null;
    const tourId = tour ? tour._id : null;

    const renderRightActions = () => (
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleToggleFavorite(tourId)} // Gọi hàm xóa với tourId
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
          <Image
            source={{uri: item.images[0]?.linkImage[0]}}
            style={styles.image}
          />
          <View style={styles.detailsContainer}>
            <Text style={styles.name}>
              {tour ? tour.tourName : 'Tên tour không có'}
            </Text>
            {item.details.length > 0 && (
              <View>
                <Text style={styles.day}>
                  {new Date(item.details[0].startDay).toLocaleDateString()}
                </Text>
                <Text style={styles.price}>
                  {item.details[0].priceAdult.toLocaleString()} VNĐ
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
      ) : favoritesData.length > 0 ? ( 
        <FlatList
          data={favoritesData}
          renderItem={renderFavoriteItem}
          keyExtractor={item => item._id}
        />
      ) : (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
            resizeMode="contain"
            source={require('./../../../../assets/images/Favorite.png')}
            style={styles.image}
          />
          <Text style={styles.textt}>Bạn chưa có địa điểm yêu thích ?.</Text>
          <Text style={styles.texttt}>Chọn địa điểm yêu thích ngay thôi nào</Text>
        </View>
      )}
    </View>
  );
};

export default FavoriteScreen;

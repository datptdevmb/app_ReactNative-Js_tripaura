import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ToastAndroid,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {themXoaYeuThichTour} from '../../../../redux/slices/favouriteAddDeleteducers';

const FavoriteAddDeleteScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const userId = '6705e798df463fee90387e79'; // User ID
  const tourId = '6704a2a126be2256863506e3'; // Tour ID

  const {favoritesData, favoritesStatus} = useSelector(
    state => state.favorites,
  );
  const [favorites, setFavorites] = useState(favoritesData.includes(tourId));

  const handleFavoriteToggle = () => {
    if (favoritesStatus === 'loading') return; // Skip if loading

    dispatch(themXoaYeuThichTour({userId, tourId}))
      .then(actionResult => {
        const {payload} = actionResult;

        if (payload && payload.action) {
          const actionType =
            payload.action === 'add' ? 'Thêm thành công!' : 'Xóa thành công!';
          setFavorites(prev => !prev);
          ToastAndroid.show(actionType, ToastAndroid.SHORT);
          if (payload.action === 'add') {
            navigation.navigate('FavoriteScreen', {userId, tourId});
          }
        } else {
          ToastAndroid.show('Lỗi! Vui lòng thử lại.', ToastAndroid.SHORT);
        }
      })
      .catch(error => {
        console.error('API Error:', error);
        ToastAndroid.show(
          'Có lỗi xảy ra khi xử lý yêu thích.',
          ToastAndroid.SHORT,
        );
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Màn Hình Yêu Thích</Text>
      <TouchableOpacity onPress={handleFavoriteToggle} style={styles.button}>
        <Image
          source={
            favorites
              ? require('../../../../../src/assets/icons/ic_lock.png')
              : require('../../../../../src/assets/icons/ic_star.png')
          }
          style={styles.icon}
        />
      </TouchableOpacity>
      {favoritesStatus === 'loading' && <Text>Đang xử lý...</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    padding: 10,
  },
  icon: {
    width: 100,
    height: 100,
  },
});

export default FavoriteAddDeleteScreen;

import React, {useEffect} from 'react';
import {StyleSheet, View, Alert, ToastAndroid} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  LayDanhSachYeuThich,
  themXoaYeuThichTour,
} from '../../../../redux/slices/favouriteducers';
import {Skeleton} from 'moti/skeleton';
import FavoriteList from './FavoriteList';
import {MotiView} from 'moti';

const FavoriteScreen = ({route}) => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.reducer.auth);
  const {favoritesData, favoritesStatus} = useSelector(
    state => state.reducer.favorites,
  );

  // Giả sử colorMode là 'light' hoặc 'dark'
  const colorMode = 'light'; // Có thể đổi thành 'dark' nếu muốn

  useEffect(() => {
    if (user?.user?._id) {
      dispatch(LayDanhSachYeuThich(user.user._id));
      console.log(favoritesData);
    }
  }, [dispatch, user]);

  const handleToggleFavorite = tourId => {
    const userId = user?.user?._id;

    if (!userId || !tourId) {
      console.log('userId:', userId);
      console.log('tourId:', tourId);
      Alert.alert('Thông báo', 'Không tìm thấy userId hoặc tourId');
      return;
    }

    ToastAndroid.show('Hủy bỏ yêu thích thành công', ToastAndroid.SHORT);
    dispatch(themXoaYeuThichTour({userId, tourId}));
  };

  const renderSkeleton = () => <View></View>;

  return (
    <View style={styles.container}>
      {favoritesStatus === 'loading' ? (
        renderSkeleton()
      ) : (
        <FavoriteList
          data={favoritesData}
          onToggleFavorite={handleToggleFavorite}
        />
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
});

export default FavoriteScreen;

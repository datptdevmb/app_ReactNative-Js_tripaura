import React, {useEffect} from 'react';
import {StyleSheet, ScrollView, View, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  LayDanhSachYeuThich,
  themXoaYeuThichTour,
} from '../../../../redux/slices/favouriteducers';
import FavoriteList from './FavoriteList';
import {useNavigation} from '@react-navigation/native';
import FavouriteScreenNoItem from './FavouriteScreenNoItem';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const FavoriteScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch(); //useDispatch: Dùng để Thực hiện các hành động tới Redux store, giúp cập nhật state hoặc gọi các action bên ngoài.

  const {user} = useSelector(state => state.reducer.auth);
  const {favoritesData} = useSelector(state => state.reducer.favorites);
  const {favoritesStatus} = useSelector(state => state.reducer.favorites);

  useEffect(() => {
    if (user?.user?._id) {
      dispatch(LayDanhSachYeuThich(user.user._id));
    }
    console.log('dispatch', dispatch(LayDanhSachYeuThich(user.user._id)));
  }, [dispatch, user]); // chi thay đổi nếu dispatch or user thay đổi

  const handleToggleFavorite = tourId => {
    const userId = user.user._id;
    if (!tourId) {
      Alert.alert('Thông báo', 'Không tìm thấy tourId');
      return;
    }
    dispatch(themXoaYeuThichTour({userId, tourId: tourId}));
  };

  const renderSkeleton = () => {
    const skeletonitem = new Array(6).fill(null);
    return (
      <SkeletonPlaceholder>
        {skeletonitem.map((_, index) => (
          <View key={index} style={styles.skeletonContainer}>
            <View style={styles.skeletonImage} />
            <View style={{flexDirection: 'column'}}>
              <View style={styles.skeletonText1} />
              <View style={styles.skeletonText} />
              <View style={styles.skeletonText} />
              <View style={styles.skeletonText} />
            </View>
          </View>
        ))}
      </SkeletonPlaceholder>
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {favoritesStatus === 'loading' ? (
        <View style={styles.loadingContainer}>{renderSkeleton()}</View>
      ) : favoritesData.length > 0 ? (
        <FavoriteList
          data={favoritesData}
          onToggleFavorite={handleToggleFavorite}
          navigation={navigation}
        />
      ) : (
        <FavouriteScreenNoItem />
      )}
      <View style={{height: 120}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  skeletonContainer: {
    marginTop: 40,
    marginStart: 10,
    marginEnd: 14,
    flexDirection: 'row',
  },
  skeletonImage: {
    height: 100,
    width: 100,
    borderRadius: 8,
  },
  skeletonText1: {
    width: 200,
    marginTop: 10,
    height: 10,
    marginLeft: 20,
    borderRadius: 4,
  },
  skeletonText: {
    width: 100,
    marginTop: 10,
    height: 10,
    marginLeft: 20,
    borderRadius: 4,
  },
});

export default FavoriteScreen;
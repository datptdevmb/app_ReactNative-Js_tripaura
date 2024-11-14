import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Alert, ToastAndroid, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  LayDanhSachYeuThich,
  themXoaYeuThichTour,
} from '../../../../redux/slices/favouriteducers';
import FavoriteList from './FavoriteList';
import {Skeleton} from 'moti/skeleton';

const FavoriteScreen = ({route}) => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.reducer.auth);
  const {favoritesData, favoritesStatus} = useSelector(
    state => state.reducer.favorites,
  );

  const renderSkeletonItem = () => (
    <View style={styles.skeletonCard}>
      <Skeleton
        colorMode="light"
        width={100}
        height={100}
        radius={8}
        color="#e0e0e0"
        highlightColor="#f0f0f0"
      />
      <View style={styles.skeletonContent}>
        <Skeleton
          colorMode="light"
          width={160}
          height={20}
          radius={4}
          style={styles.skeletonTitle}
          color="#e0e0e0"
          highlightColor="#f0f0f0"
        />
        <View style={styles.skeletonLocation}>
          <Skeleton
            colorMode="light"
            width={12}
            height={12}
            radius={6}
            color="#e0e0e0"
            highlightColor="#f0f0f0"
          />
          <Skeleton
            colorMode="light"
            width={100}
            height={12}
            radius={4}
            style={{marginLeft: 6}}
            color="#e0e0e0"
            highlightColor="#f0f0f0"
          />
        </View>
        <View style={styles.skeletonRating}>
          <Skeleton
            colorMode="light"
            width={12}
            height={12}
            radius={6}
            color="#e0e0e0"
            highlightColor="#f0f0f0"
          />
          <Skeleton
            colorMode="light"
            width={100}
            height={12}
            radius={4}
            style={{marginLeft: 6}}
            color="#e0e0e0"
            highlightColor="#f0f0f0"
          />
        </View>
        <View style={styles.skeletonRating}>
          <Skeleton
            colorMode="light"
            width={12}
            height={12}
            radius={6}
            color="#e0e0e0"
            highlightColor="#f0f0f0"
          />
          <Skeleton
            colorMode="light"
            width={100}
            height={12}
            radius={4}
            style={{marginLeft: 6}}
            color="#e0e0e0"
            highlightColor="#f0f0f0"
          />
        </View>
      </View>
    </View>
  );

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user?.user?._id) {
      dispatch(LayDanhSachYeuThich(user.user._id));
      console.log(favoritesData);
    }
  }, [dispatch, user]);

  const handleToggleFavorite = tourId => {
    const userId = user?.user?._id;

    if (!userId || !tourId) {
      Alert.alert('Thông báo', 'Không tìm thấy userId hoặc tourId');
      return;
    }

    ToastAndroid.show('Hủy bỏ yêu thích thành công', ToastAndroid.SHORT);
    dispatch(themXoaYeuThichTour({userId, tourId}));
  };

  return (
    <View style={styles.container}>
      {favoritesStatus === 'loading' ? (
        <FlatList
          data={Array(5).fill(0)}
          renderItem={renderSkeletonItem}
          keyExtractor={(item, index) => index.toString()}
        />
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
    backgroundColor: '#f8f9fa',
  },
});

export default FavoriteScreen;

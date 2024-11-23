import React, { useEffect } from 'react';
import { StyleSheet, ScrollView, Text, View, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  LayDanhSachYeuThich,
  themXoaYeuThichTour,
} from '../../../../redux/slices/favouriteducers';
import FavoriteList from './FavoriteList';
import { useNavigation } from '@react-navigation/native';
import FavouriteScreenNoItem from './FavouriteScreenNoItem';

const FavoriteScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { user } = useSelector(state => state.reducer.auth);
  const { favoritesData } = useSelector(state => state.reducer.favorites);
  const { favoritesStatus, loading } = useSelector(
    state => state.reducer.favorites,
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
    dispatch(themXoaYeuThichTour({ userId, tourId: selectedTourId }));
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      {favoritesStatus === 'loading' ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.textload}>loading</Text>
        </View>
      ) : favoritesData.length > 0 ? (

        <FavoriteList
          data={favoritesData}
          onToggleFavorite={handleToggleFavorite}
        />

      ) : favoritesStatus === 'success' ? (
        <FavouriteScreenNoItem />
      ) : null}
      <View style={{ height: 120 }} />
    </ScrollView>
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

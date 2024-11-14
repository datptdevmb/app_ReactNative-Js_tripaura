import React, { useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { LayDanhSachYeuThich, themXoaYeuThichTour } from '../../../../redux/slices/favouriteducers';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import CardFavorite from '../../../../components/common/card/CardFavorite';
import FavoriteList from './FavoriteList';
import LottieView from 'lottie-react-native';
import Toast from '../../../../components/common/toast/Toast';



const FavoriteScreen = ({ route }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.reducer.auth);
  const { favoritesData, favoritesStatus } = useSelector(state => state.reducer.favorites);


  useEffect(() => {
    if (user?.user?._id) {
      dispatch(LayDanhSachYeuThich(user.user._id));
      console.log(favoritesData)
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
    <View style={styles.container}>
      <FavoriteList
        data={favoritesData}
        onToggleFavorite={handleToggleFavorite}
        />
     
    </View >
  );
};

const styles = StyleSheet.create({
  toast: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 340,
    height: 60,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowColor: 'black',
    shadowRadius: 4,
    elevation: 5,
  },
  iconToast: {
    width: 48,
    height: 48,
  },
  btnXem: {
    marginStart: 30
  },
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
import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Headercomponet from '../../../../components/common/header/Headercomponet';
import Icons from '../../../../constants/Icons';
import {LayDanhSachDanhGia} from '../../../../redux/slices/reviewTourducers';
import styles from './RateStyle';

const Rate = () => {
  const dispatch = useDispatch();
  const {tourById: tour} = useSelector(state => state.reducer.tour);
  const tourId = tour[0]?._id;

  const danhSachDanhGia = useSelector(
    state => state.reducer.review.reviewsData,
  );
  const trangThaiDanhGia = useSelector(
    state => state.reducer.review.reviewsStatus,
  );

  useEffect(() => {
    if (tourId) {
      dispatch(LayDanhSachDanhGia(tourId));
    }
  }, [dispatch, tourId]);

  // Calculate average rating
  const tinhTrungBinhSoSao = danhGia => {
    if (!Array.isArray(danhGia) || danhGia.length === 0) return 0;
    const tongSoSao = danhGia.reduce(
      (tong, item) => tong + (item.rating || 0),
      0,
    );
    return (tongSoSao / danhGia.length).toFixed(1); // Round to one decimal place
  };

  const trungBinhSoSao = tinhTrungBinhSoSao(danhSachDanhGia);
  const soNguoiDanhGia = danhSachDanhGia.length;

  // Create an array of stars for the average rating
  const taoMangSoSao = trungBinh => {
    const soSaoToiDa = Math.floor(trungBinh);
    const soSaoBiTat = trungBinh % 1 !== 0 ? 1 : 0; // If there's a decimal part, add one disabled star
    return [
      ...Array.from({length: soSaoToiDa}, () => 'filled'),
      ...Array.from({length: soSaoBiTat}, () => 'disabled'),
    ];
  };

  const mangSoSao = taoMangSoSao(trungBinhSoSao);

  const renderReviewItem = ({item}) => (
    <View style={styles.reviewItem}>
      <View style={styles.userInfo}>
        <Image
          source={{uri: item.avatar}}
          style={styles.avatar}
          onError={() => console.log('Error loading avatar')}
        />
        <View style={styles.userNameContainer}>
          <Text style={styles.fullname}>{item.fullname}</Text>
          <Text style={styles.rating}>Đánh giá: {item.rating} ⭐</Text>
          <Text style={styles.date}>
            {new Date(item.dayReview).toLocaleDateString()}
          </Text>
        </View>
      </View>

      <ScrollView style={styles.ratingContainer}>
        <Text style={styles.comment}>{item.comment}</Text>
      </ScrollView>

      <FlatList
        data={item.image}
        renderItem={({item: imageUrl}) => (
          <Image
            source={{uri: imageUrl}}
            style={styles.reviewImage}
            onError={() => console.log('Error loading image')}
          />
        )}
        keyExtractor={(imageUrl, index) => index.toString()}
        horizontal
        contentContainerStyle={styles.imageListContainer}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Headercomponet leftIcon={Icons.ic_leftarrow} title={'Đánh giá'} />
      <Text style={styles.text}>Đánh giá chung</Text>
      <Text style={styles.averageRating}>{trungBinhSoSao}</Text>

      <View style={styles.starContainer}>
        {mangSoSao.map((star, index) => (
          <Image
            key={index}
            source={star === 'filled' ? Icons.ic_star : Icons.ic_star_empty}
            style={styles.star}
          />
        ))}
      </View>

      <Text style={styles.reviewCount}>
        Dựa trên {soNguoiDanhGia} đánh giá{' '}
      </Text>

      {trangThaiDanhGia === 'loading' ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={styles.loadingText}>Đang tải đánh giá...</Text>
        </View>
      ) : danhSachDanhGia.length === 0 ? (
        <Text style={styles.noReviewsText}>Chưa có đánh giá nào.</Text>
      ) : (
        <FlatList
          data={danhSachDanhGia}
          renderItem={renderReviewItem}
          keyExtractor={item => item._id}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
};

export default Rate;

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Headercomponet from '../../../../components/common/header/Headercomponet';
import Icons from '../../../../constants/Icons';
import {
  fetchReviewsByTourId,
  LayDanhSachDanhGia,
} from '../../../../redux/slices/reviewTourducers';
import styles from './RateStyle';

const Rate = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { tourId } = route.params;

  const danhSachDanhGia = useSelector(
    state => state.reducer.reviews.reviewsData,
  );
  const trangThaiDanhGia = useSelector(
    state => state.reducer.reviews.reviewsStatus,
  );
  console.log('Danh sách đánh giá:', danhSachDanhGia);
  console.log('Trạng thái đánh giá:', trangThaiDanhGia);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (tourId) {
      dispatch(fetchReviewsByTourId(tourId));
      console.log('dispatch', dispatch);
    }
    return () => setIsLoading(false);
  }, [dispatch, tourId]);

  const tinhTrungBinhSoSao = danhGia => {
    // Kiểm tra nếu danhGia không phải là mảng hoặc mảng rỗng, trả về 0
    if (danhGia.length === 0) {
      return 0;
    }

    let tongSoSao = 0; // Biến để lưu tổng số sao
    let soDanhGia = danhGia.length; // Số lượng đánh giá
    console.log('soDanhGia:', soDanhGia);

    // Duyệt qua từng đánh giá và cộng điểm rating vào tongSoSao
    for (let i = 0; i < soDanhGia; i++) {
      // Kiểm tra nếu có rating, nếu không thì thêm 0
      tongSoSao += danhGia[i].rating || 0;
    }
    console.log('tongSoSao:', tongSoSao);

    // Tính trung bình bằng cách chia tổng số sao cho số lượng đánh giá
    let trungBinhSoSao = tongSoSao / soDanhGia;
    console.log('trungBinhSoSao', trungBinhSoSao);

    // Làm tròn trung bình số sao tới 1 chữ số sau dấu phẩy
    return trungBinhSoSao.toFixed(1);
  };

  const trungBinhSoSao = tinhTrungBinhSoSao(danhSachDanhGia);
  const soNguoiDanhGia = danhSachDanhGia.length;

  const taoMangSoSao = trungBinh => {
    const mangSoSao = [];
    const soSaoToiDa = 5;

    // Tính số sao đầy
    const soSaoDay = Math.floor(trungBinh);
    console.log('soSaoDay', soSaoDay);

    // Tính số sao rỗng
    const soSaoRong = soSaoToiDa - soSaoDay;
    console.log('soSaoRong', soSaoRong);

    // Thêm sao đầy vào mảng
    for (let i = 0; i < soSaoDay; i++) {
      mangSoSao.push('filled');
    }

    // Thêm sao rỗng vào mảng
    for (let i = 0; i < soSaoRong; i++) {
      mangSoSao.push('empty');
    }

    return mangSoSao;
  };

  const mangSoSao = taoMangSoSao(trungBinhSoSao);

  const renderReviewItem = ({ item }) => (
    <View style={styles.reviewItem}>
      <View style={styles.userInfo}>
        <Image
          source={{ uri: item.avatar }}
          style={styles.avatar} onError={() => console.log('Error loading avatar')}
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

      {item.image && item.image.length > 0 && (
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={item.image}
          renderItem={({ item: imageUrl }) => (
            <Image
              source={{ uri: imageUrl }}
              style={styles.reviewImage}
              onError={() => console.log('Error loading image')}
            />
          )}
          keyExtractor={(imageUrl, index) => index.toString()}
          horizontal
          contentContainerStyle={styles.imageListContainer}
        />
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Headercomponet
          leftIcon={Icons.ic_leftarrow}
          title={'Đánh giá'}
          onPressLeftIcon={() => navigation.goBack()}
        />
      </View>

      {trangThaiDanhGia === 'loading' ? (
        <Text></Text>
      ) : !Array.isArray(danhSachDanhGia) || danhSachDanhGia.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Image
            source={require('../../../../assets/icons/ic_rate.png')}
            style={styles.emptyImage}
          />
          <Text style={styles.emptyText}>
            Chưa có đánh giá nào cho tour này !
          </Text>
        </View>
      ) : (
        <FlatList
          data={danhSachDanhGia}
          renderItem={renderReviewItem}
          keyExtractor={item => item._id}
          contentContainerStyle={styles.listContainer}
          ListHeaderComponent={
            <View>
              <Text style={styles.textRate}>Đánh giá chung</Text>
              <Text style={styles.averageRating}>{trungBinhSoSao}</Text>

              <View style={styles.starContainer}>
                {mangSoSao.map((star, index) => (
                  <Image
                    key={index}
                    source={
                      star === 'filled' ? Icons.ic_star : Icons.ic_star_emty
                    }
                    style={styles.star}
                  />
                ))}
              </View>

              <Text style={styles.reviewCount}>
                Dựa trên {soNguoiDanhGia} đánh giá
              </Text>
            </View>
          }
        />
      )}
    </View>
  );
};

export default Rate;
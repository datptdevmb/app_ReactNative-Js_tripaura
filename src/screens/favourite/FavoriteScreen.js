import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import Header from '../../components/header/Headercomponet';
import {styles} from './FavoriteScreenStyle';

const FavoriteScreen = () => {
  const data = [
    {
      id: '1',
      image: require('../../../assets/images/img1.png'),
      name: 'Vườn quốc gia Phong Nha – Kẻ Bàng',
      day: '2/9/2024 - 9/9/2024',
      price: 'Chỉ từ : 1.800.000 VNĐ',
    },
    {
      id: '2',
      image: require('../../../assets/images/img2.png'),
      name: 'Vịnh Hạ Long - Quảng Ninh',
      day: '25/9/2024 - 3/10/2024',
      price: 'Chỉ từ : 2.800.000 VNĐ',
    },
    {
      id: '3',
      image: require('../../../assets/images/img3.png'),
      name: 'Đảo Phú Quốc - Kiên Giang',
      day: '1/2/2024 - 1/3/2024',
      price: 'Chỉ từ : 1.300.000 VNĐ',
    },
    {
      id: '4',
      image: require('../../../assets/images/img4.png'),
      name: 'Phố cổ Hội An - Quảng Nam',
      day: '12/3/2024 - 19/3/2024',
      price: 'Chỉ từ : 900.000 VNĐ',
    },
  ];
  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.day}>{item.day}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <Header style={styles.Header} title="Yêu Thích" />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer} // Đảm bảo có padding dưới cùng
        showsVerticalScrollIndicator={false} // Ẩn thanh cuộn (tuỳ chọn)
      />
    </View>
  );
};

export default FavoriteScreen;

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import Header from '../../../../components/common/header/Headercomponet';
import {styles} from './FavoriteScreenStyle';
import stylesglobal from '../../../../constants/global';
import { datafavorite } from '../../../../constants/data';


const FavoriteScreen = () => {
  
  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.day}>{item.day}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>
  );
  return (
    <View style={stylesglobal.container}>
      <Header style={styles.Header} title="Yêu Thích" />
      <FlatList
        data={datafavorite}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer} // Đảm bảo có padding dưới cùng
        showsVerticalScrollIndicator={false} // Ẩn thanh cuộn (tuỳ chọn)
      />
    </View>
  );
};

export default FavoriteScreen;

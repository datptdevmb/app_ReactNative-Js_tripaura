import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {styles} from './FavouriteScreenNoItemStyle';
const FavouriteScreenNoItem = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Yêu Thích</Text>
      <Image
        resizeMode="contain"
        source={require('./../../../../assets/images/Favorite.png')}
        style={styles.image}
      />
      <Text style={styles.textfa}>Bạn chưa có địa điểm yêu thích ?</Text>
      <Text style={styles.textfa1}>Chọn địa điểm yêu thích ngay thôi nào</Text>
    </View>
  );
};

export default FavouriteScreenNoItem;

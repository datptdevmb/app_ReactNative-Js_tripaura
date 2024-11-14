import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import formatCurrencyVND from '../../../untils/formatCurrencyVND';
import IcLocate from '../../../assets/icons/Ic_locate';
import {Rating} from 'react-native-ratings';
import IcFavorite from '../../../assets/icons/bottom_tab/Ic_favorite';

const CardFavorite = ({item, onToggleFavorite}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {item?.tourName}
        </Text>
        <View style={styles.locationContainer}>
          <IcLocate />
          <Text style={styles.location}>{item?.locate}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Rating imageSize={12} startingValue={1} ratingCount={1} />
          <Text>{item?.rating} (100+ đánh giá)</Text>
        </View>
        <Text style={styles.price}> {formatCurrencyVND(item?.price)}</Text>
      </View>
      <TouchableOpacity
        onPress={() => onToggleFavorite(item?.id || item?.tourId)}
        style={styles.favoriteIcon}>
        <IcFavorite color={'#F47352'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginVertical: 8,
    backgroundColor: '#f8f9fa',
    // borderRadius: 12,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    // elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  content: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  location: {
    fontSize: 12,
    color: '#888',
    marginLeft: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  rating: {
    width: 5,
    height: 5,
    color: '#888',
    marginLeft: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E74C3C',
    marginTop: 4,
  },
  favoriteIcon: {
    position: 'absolute',
    left: 70,
    top: 5,
  },
});

export default CardFavorite;

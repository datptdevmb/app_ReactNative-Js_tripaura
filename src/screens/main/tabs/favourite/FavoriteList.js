// FavoriteList.js

import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import CardFavorite from '../../../../components/common/card/CardFavorite';

const FavoriteList = ({data, onToggleFavorite}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yêu Thích</Text>

      <FlatList
        data={data}
        renderItem={({item}) => (
          <CardFavorite item={item} onToggleFavorite={onToggleFavorite} />
        )}
        keyExtractor={(item, index) =>
          item?.id ? item?.id.toString() : index.toString()
        }
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    marginBottom: 16,
    fontSize: 30,
    fontFamily: 'Lato',
    fontWeight: 'bold',
    color: '#333',
  },
  skeletonCard: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  skeletonContent: {
    flex: 1,
    marginLeft: 10,
  },
  skeletonTitle: {
    marginBottom: 6,
  },
  skeletonLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  skeletonRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  skeletonPrice: {
    marginTop: 6,
  },
});

export default FavoriteList;

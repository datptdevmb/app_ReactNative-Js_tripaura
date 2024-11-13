// FavoriteList.js

import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import CardFavorite from '../../../../components/common/card/CardFavorite';
import {Skeleton} from 'moti/skeleton';

const FavoriteList = ({data, onToggleFavorite}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yêu Thích</Text>
      {isLoading ? (
        <FlatList
          data={Array(5).fill(0)}
          renderItem={renderSkeletonItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
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
      )}
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
  listContainer: {
    paddingBottom: 20,
  },
});

export default FavoriteList;

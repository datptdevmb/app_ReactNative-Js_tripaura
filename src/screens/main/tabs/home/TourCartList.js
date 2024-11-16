import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import TourCard from '../../../../components/common/card/CardTour'; // Giả sử bạn đã có component TourCard

const TourCardList = ({
  tours,
  onClickItem,
  selectedFavorite,
  isLoading,
  onClickFavorite,
}) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {isLoading ? (
          <SkeletonPlaceholder>
            <View style={styles.skeletonContainer}>
              {[...Array(5)].map((_, index) => (
                <View key={index} style={styles.skeletonTourCard} />
              ))}
            </View>
          </SkeletonPlaceholder>
        ) : (
          tours.map((tour, index) => (
            <TourCard
              selectedFavorite={selectedFavorite}
              key={index}
              tour={tour}
              onClickItem={onClickItem}
              onClickFavorite={() => onClickFavorite(tour, index)}
            />
          ))
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 24,
  },
  skeletonContainer: {
    flexDirection: 'row',
    padding: 16,
  },
  skeletonTourCard: {
    width: 100,
    height: 150,
    borderRadius: 10,
    marginRight: 10,
  },
});

export default TourCardList;

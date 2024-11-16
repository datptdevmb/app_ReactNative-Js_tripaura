import React, { memo } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import TourCard from '../../../../components/common/card/CardTour';

const PopularToursList = ({ popularTours, onClick }) => {
  const renderItem = ({ item, index }) => (
    <View style={styles.cardContainer}>
      <TourCard
        key={index}
        tour={item}
        onClickItem={onClick}
        onClickFavorite={() => onClickFavorite(item, index)}
      />
    </View>
  );

  return (
    <FlatList
      data={popularTours}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2} // Chia thành hai cột
      columnWrapperStyle={styles.columnWrapper} 
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 26,
  
  },
  columnWrapper: {
    justifyContent: 'space-between',
    alignItems: 'flex-start', // Giúp các item không bị ép cùng chiều cao
  },
  cardContainer: {
    flex: 1,
    margin: 8,
    alignSelf: 'flex-start', 
  },
});

export default memo(PopularToursList);

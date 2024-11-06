import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const CategoryList = ({ categories, selectedIndex, onCatePress }) => {
  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.itemCate}>
        <TouchableOpacity onPress={() => onCatePress(item, index)}>
          <Text style={[styles.textCate, selectedIndex === index && styles.selectedItem]}>
            {item.name}
          </Text>
        </TouchableOpacity>
        {selectedIndex === index && <View style={styles.dotStyle}></View>}
      </View>
    )
  }


  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={(item) => item._id ? item._id.toString() : Math.random().toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categoryContainer}
    />
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    marginTop: 24,
  },
  itemCate: {
    marginRight: 24,
    alignItems: 'center',
  },
  selectedItem: {
    color: '#007BFF',
  },
  textCate: {
    color: '#A8A8A8',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'white',
  },
  dotStyle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#007BFF',
    marginTop: 4,
  },
});

export default CategoryList;

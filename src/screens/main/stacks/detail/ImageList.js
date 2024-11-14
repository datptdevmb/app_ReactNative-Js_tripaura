import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';


const ImageList = ({ dataimage }) => {
  return (
    <ScrollView
    horizontal>
      <View style={styles.containerItemImage}>
        {dataimage &&
          dataimage.map((item, index) => (
            <View key={index}>
              <Image style={styles.itemImage} source={{ uri: item }} />
            </View>
          ))}
      </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  containerItemImage: {
    marginTop: 2,
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  itemImage: {
    width: 94,
    height: 72,
    marginEnd: 2,
  },
});

export default ImageList;

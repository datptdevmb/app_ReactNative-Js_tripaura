import React from 'react';
import {StyleSheet, View} from 'react-native';
import TourCardVetical from '../../../../components/common/card/TourCardVetical'; // Đảm bảo bạn đã import TourCardVetical đúng

const PopularToursList = ({popularTours}) => {
  console.log('kkkkkkkkllll');
  return (
    <View style={styles.cardVeticalC}>
      {popularTours &&
        popularTours.map((item, index) => {
            console.log(item)
            return(
                <View key={index} style={styles.cardVetical}>
                <TourCardVetical tour={item} />
              </View>
            )
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  cardVeticalC: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'nowrap',
    paddingTop: 26,
  },
  cardVetical: {
    width: '100%',
    marginTop: 8,
  },
});

export default PopularToursList;

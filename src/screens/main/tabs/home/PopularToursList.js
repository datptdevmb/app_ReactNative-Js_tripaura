import React, { memo } from 'react';
import {StyleSheet, View} from 'react-native';
import TourCardVetical from '../../../../components/common/card/TourCardVetical';

const PopularToursList = ({popularTours ,onClick}) => {
  console.log('rrrrr')
  return (
    <View style={styles.cardVeticalC}>
      {popularTours &&
        popularTours.map((item, index) => {
            return(
                <View key={index} style={styles.cardVetical}>
                <TourCardVetical onClick={() =>onClick} tour={item} />
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

export default memo(PopularToursList);

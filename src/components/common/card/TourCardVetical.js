import { memo } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Button from '../button/Button';
import colors from '../../../constants/colors';
import IcLocate from '../../../assets/icons/Ic_locate';
<<<<<<< HEAD


function TourCardVetical({tour , onClick}) {

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Image style={styles.image} source={{uri:tour?.image[0]}} />

=======
<<<<<<< HEAD

function TourCardVetical({tour , onClick}) {

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Image style={styles.image} source={{uri:tour?.image[0]}} />
=======
import { useNavigation } from '@react-navigation/native';

function TourCardVetical({ tour }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Image style={styles.image} source={tour.image} />
>>>>>>> 682b4584f05f4553c075764b42725e79185b80e8
>>>>>>> 8fd71a664d1c1ba1f0c54154897dbaf96aea97d1
        <View style={styles.mr_s_12}>
          <Text style={styles.textName}>{tour.tourName}</Text>
          <View style={styles.row}>
            <IcLocate />
            <Text style={styles.bodytext}>{tour?.destination}</Text>

          </View>
        </View>
      </View>

<<<<<<< HEAD

      <Button onPressed={onClick} styleText={styles.btntext} style={styles.btn} label="Xem" />
=======
<<<<<<< HEAD
      <Button onPressed={onClick} styleText={styles.btntext} style={styles.btn} label="Xem" />
=======
      <Button
        onPressed={() => navigation.navigate('Detail')}
        styleText={styles.btntext}
        style={styles.btn}
        label="Xem"
      />
>>>>>>> 682b4584f05f4553c075764b42725e79185b80e8
>>>>>>> 8fd71a664d1c1ba1f0c54154897dbaf96aea97d1
    </View>
  );
}

export default memo(TourCardVetical);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F8F8F8',
    width: '100%',
    height: 84,
  },
  image: {
    width: 81,
    height: 64,
    borderRadius: 8,
  },
  bodytext: {
    fontSize: 14,
    color: '#666',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  textName: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    color: '#171D19',
  },
  mr_s_12: {
    marginStart: 12,
  },
  btn: {
    backgroundColor: '#E6F1FD',
    width: 81,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  btntext: {
    color: colors.primary_200,
    fontSize: 14,
  },
});

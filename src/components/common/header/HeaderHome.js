import { memo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import colors from '../../../constants/colors';
import GlowingText from '../../../screens/main/tabs/home/GowingText';

function HeaderHome() {
  console.log('render')
  return (
    <View style={[styles.flex_row, styles.headerContainer]}>
      <FastImage
        style={styles.image}
        resizeMode='cover'
        source={require('../../../assets/images/image.png')} />
      <GlowingText />
      <View style={[styles.flex_row, styles.iconContainer]}>
        <View>
        </View>
        <TouchableOpacity>
          <View style={styles.imageView}>
            <Image
              style={styles.noticeIcon}
              source={require('../../../assets/images/not.jpg')}
            />
          </View>

        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    borderRadius: 8
  },
  noticeIcon: {
    width: 40,
    height: 40,
    borderRadius: 8
  },
  headerContainer: {
    width: '100%',
    paddingVertical: 10,
    position: 'static',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flex_row: {
    flexDirection: 'row',
  },
  textHeader: {
    fontSize: 28,
    fontStyle: 'normal',
    color: '#595454',
    fontWeight: 'bold',
  },
  imageView: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.Grey_0,
    borderRadius: 10,
    overflow: 'hidden', // Đảm bảo phần tử con không tràn ra ngoài bo góc
    borderRadius: 10, // Đảm bảo border-radius áp dụng cho nội dung bên trong
    shadowColor: '#000', // Màu bóng
    shadowOffset: { width: 0, height: 4 }, // Độ lệch bóng
    shadowOpacity: 3, // Độ mờ của bóng
    shadowRadius: 2, // Bán kính bóng
    elevation: 4, // Đổ bóng trên Android
    backgroundColor: '#EDEDED',
  },
  iconContainer: {
    justifyContent: 'space-between',
  },
});

export default memo(HeaderHome);


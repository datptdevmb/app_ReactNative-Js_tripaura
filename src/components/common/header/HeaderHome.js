import { memo } from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

function HeaderHome() {
  return (
    <View style={[styles.flex_row, styles.headerContainer]}>
      <Text style={styles.textHeader}>Chào mừng </Text>
      <View style={[styles.flex_row, styles.iconContainer]}>
        <TouchableOpacity>
          <Image
            style={styles.serchIcon}
            source={require('../../../assets/images/searchIcon.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.noticeIcon}
            source={require('../../../assets/images/noticeIcon.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    paddingVertical: 10,
    position: 'static',
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
  iconContainer: {
    width: 92,
    justifyContent: 'space-between',
  },
});

export default memo(HeaderHome);


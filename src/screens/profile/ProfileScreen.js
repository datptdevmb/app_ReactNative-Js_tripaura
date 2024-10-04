import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Headercomponet from '../../components/header/Headercomponet'

const ProfileScreen = (props) => {
  const { navigation } = props;
  const nhanBack = () => {
    navigation.goBack()
  }
  return (
    <View style={styles.container}>
      <Headercomponet
        leftIcon={require('../../../assets/images/icBack.png')}
        title={"Thông tin cá nhân"}
        style={styles.header}
        onPressLeftIcon={nhanBack}
      />
      <View style={styles.avatarContainer}>
        <View style={styles.imageAvatar}>
          <Image source={require('../../../assets/images/h1.png')} />
          <TouchableOpacity style={styles.icCameraContainer}>
            <Image source={require('../../../assets/images/icCamera.png')} />
          </TouchableOpacity>
        </View>
        <Text style={styles.txtName}>Nguyễn Văn Bảo Hoàng</Text>
      </View>

      <View style={styles.underline} />

      <View style={styles.gioiThieuContainer}>
        <Text style={styles.title}>Giới thiệu</Text>
        <View style={styles.itemProfile}>
          <Image style={styles.icon}
            source={require('../../../assets/images/icBack.png')} />
          <Text style={styles.txtTitle}>Ngày sinh:</Text>
          <Text style={styles.txtContent}>29/11/2004</Text>
        </View>
        <View style={styles.itemProfile}>
          <Image style={styles.icon}
            source={require('../../../assets/images/icBack.png')} />
          <Text style={styles.txtTitle}>Ngày sinh:</Text>
          <Text style={styles.txtContent}>29/11/2004</Text>
        </View>
      </View>
      <View style={styles.ttlhContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Thông tin liên hệ</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('EditProfileScreen')}>
            <Image style={styles.icon}
              source={require('../../../assets/images/icBack.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.itemProfile}>
          <Image style={styles.icon}
            source={require('../../../assets/images/icBack.png')} />
          <Text style={styles.txtTitle}>Emai:</Text>
          <Text style={styles.txtContent}>nvbaohoang@gmail.com</Text>
        </View>
        <View style={styles.itemProfile}>
          <Image style={styles.icon}
            source={require('../../../assets/images/icBack.png')} />
          <Text style={styles.txtTitle}>Phone:</Text>
          <Text style={styles.txtContent}>03427245744</Text>
        </View>
        <View style={styles.itemProfile}>
          <Image style={styles.icon}
            source={require('../../../assets/images/icBack.png')} />
          <Text style={styles.txtTitle}>Địa chỉ:</Text>
          <Text numberOfLines={1}
            style={styles.txtContent}>Triệu Phong, Tỉnh Quảng Trị</Text>
        </View>
      </View>

    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5
  },
  ttlhContainer: {
    width: 350,
    marginTop: 24,
  },
  icon: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtContent: {
    width: 250,
    fontFamily: 'Lato',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: '#4D6F99',
    marginLeft: 4
  },
  txtTitle: {
    fontFamily: 'Lato',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: '#494B4B',
    marginLeft: 16
  },
  itemProfile: {
    height: 32,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'Lato',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    textTransform: 'uppercase',
    color: '#212121',
    marginBottom: 5
  },
  gioiThieuContainer: {
    width: 350,
    marginTop: 18
  },
  underline: {
    width: 350,
    height: 1,
    backgroundColor: '#515252',
    marginTop: 16,
  },
  txtName: {
    color: '#212121',
    fontFamily: 'Lato',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 27
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 11
  },
  icCameraContainer: {
    width: 28,
    height: 28,
    backgroundColor: '#0572E7',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    bottom: 0
  },
  txtNameContainer: {
    width: 200,
  },
  imageAvatar: {
    width: 65,
    height: 65,
    borderRadius: 50
  },
  header: {
    color: '#0572E7',
    fontFamily: 'Lato',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 27
  },
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center'
  }
})
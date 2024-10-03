import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import Lable from "../../components/common/labelText";
import Button from "../../components/common/button/Button";
import { useState } from "react";
import colors from "../../constants/colors";

const data = [
  { uri: require('../../assets/images/image.png') },
  { uri: require('../../assets/images/slider1.png') },
  { uri: require('../../assets/images/image.png') },
  { uri: require('../../assets/images/image.png') },
  { uri: require('../../assets/images/image.png') },

]

days = [
  { day: '4/9' },
  { day: '5/9' },
  { day: '7/9' },
  { day: 'Ngày khác' }
]


const tour = { id: 0, day: '3 ngay 1 dem', name: 'Tour [ Biển Đảo ] - Trải nghiêm , tham quan thắng  cảnh', locate: 'VietNam', image: require('../../assets/images/image.png'), price: 300000 }


function Detail() {

  const [selectedInd, setSeletedInd] = useState(0);

  function handleItemDayPress(index) {
    setSeletedInd(index)
  }
  return (
    <ScrollView
      style={styles.container}
    >
      <StatusBar translucent backgroundColor="transparent" barStyle={'light-content'} />
      <Image
        style={styles.image}
        source={require('../../assets/images/image.png')} />

      <ScrollView
      >
        <View
          style={styles.containerItemImage}>
          {
            data && data.map((item, index) => (
              <View
                key={index}>
                <Image
                  style={styles.itemImage}
                  source={item.uri} />
              </View>
            ))
          }
        </View>
      </ScrollView>

      <View style={styles.contentContaienr}>

        <Text style={styles.tourname}>{tour.name}</Text>
        <View
          style={[styles.mr_top, styles.cl]}>
          <View
            style={styles.flex_row}>
            <Image
              source={require('../../assets/images/locateIcon.png')} />
            <Text
              style={styles.text}>{tour.locate}</Text>
          </View>
          <View
            style={[styles.flex_row, styles.mr_top]}>
            <Image
              source={require('../../assets/images/IconTime.png')} />
            <Text
              style={styles.text}>{tour.day}</Text>
          </View>
        </View>

        <View style={styles.indicator}></View>
        <Lable
          style={styles.mr_top}
          lable={"Ngày khởi hành hiện có"} />
        <View style={styles.flex_row}>
          {
            days && days.map((item, index) => (
              <View key={index}>
                <Button
                  styleText={index === selectedInd ? styles.btndaytextSelected : styles.btndaytext}
                  onPressed={() => handleItemDayPress(index)}
                  style={index === selectedInd ? styles.selectedItem : styles.btnday}
                  label={item.day} />
              </View>
            ))}
        </View>

        <Lable
          style={styles.mr_t_26}
          lable={"Mô tả chuyến đi"} />
        <Text style={[styles.bodytext, styles.mr_t_14]}>
          Trải nghiệm một hành trình kỳ diệu khám phá Vịnh Hạ Long,
          nơi được UNESCO công nhận là Di sản Thiên nhiên Thế giới.
          Vịnh Hạ Long nổi tiếng với hàng nghìn hòn đảo đá vôi và
          hang động kỳ bí, tạo nên một bức tranh thiên nhiên hùng vĩ và lãng mạn.
        </Text>
        <Lable
          style={styles.mr_t_14}
          lable={"Đánh giá chuyến đi"} />

      </View>



    </ScrollView>
  )
}

export default Detail

const styles = StyleSheet.create({
  bodytext: {
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: 18,
    letterSpacing: 0.048
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  image: {
    width: '100%',
    height: 243
  },
  itemImage: {
    width: 91,
    height: 72,
    marginEnd: 2
  },
  selectedItem: {
    backgroundColor: colors.primary,
    width: 80,
    height: 32,
    marginEnd: 12,
    marginTop: 16
  },
  containerItemImage: {
    marginTop: 2,
    flexDirection: "row",
    flexWrap: 'nowrap',
  },
  tourname: {
    color: "#212121",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "800"
  },
  contentContaienr: {
    paddingHorizontal: 16,
    paddingTop: 16
  },
  flex_row: {
    flexDirection: "row",
  },
  btnday: {
    width: 80,
    height: 32,
    backgroundColor: '#F8F8F8',
    marginEnd: 12,
    marginTop: 16
  },
  btndaytextSelected: {
    color: colors.onPrimary
  },
  text: {
    marginStart: 10,
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "regular",
    color: "#2E2E2E"
  },
  btndaytext: {
    color: "#B0B0B0",

  },
  mr_top: {
    marginTop: 12
  },
  mr_t_26: {
    marginTop: 26
  },
  cl: {
    flexDirection: "column"
  },
  indicator: {
    width: '100%',
    height: 1,
    backgroundColor: '#EDEDED',
    marginTop: 25
  },
  mr_t_14: {
    marginTop: 14,
  },
  mr_t_16: {
    marginTop: 16
  }
})
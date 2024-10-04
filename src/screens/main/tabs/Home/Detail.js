import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import Lable from "../../../../components/common/labelText";
import Button from "../../../../components/common/button/Button";
import { useState } from "react";
import colors from "../../../../constants/colors";
import { dataimage,tourdetail,days} from "../../../../constants/data";
import Icons from "../../../../constants/Icons";


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
        source={Icons.image} />

      <ScrollView
      >
        <View
          style={styles.containerItemImage}>
          {
            dataimage && dataimage.map((item, index) => (
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

        <Text style={styles.tourname}>{tourdetail.name}</Text>
        <View
          style={[styles.mr_top, styles.cl]}>
          <View
            style={styles.flex_row}>
            <Image
              source={Icons.ic_address} />
            <Text
              style={styles.text}>{tourdetail.locate}</Text>
          </View>
          <View
            style={[styles.flex_row, styles.mr_top]}>
            <Image
              source={Icons.ic_time} />
            <Text
              style={styles.text}>{tourdetail.day}</Text>
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
    backgroundColor:colors.onPrimary
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
    backgroundColor: colors.primary_500,
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
    color: colors.Grey_900,
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
    backgroundColor: colors.Gainsboro,
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
    color: colors.Grey_800
  },
  btndaytext: {
    color: colors.Grey_800,

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
    backgroundColor: colors.Grey_0,
    marginTop: 25
  },
  mr_t_14: {
    marginTop: 14,
  },
  mr_t_16: {
    marginTop: 16
  }
})
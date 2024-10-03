import React, { useState, useCallback } from 'react';
import { View, ScrollView, RefreshControl, Text, StyleSheet, Image, StatusBar, TouchableOpacity } from 'react-native';

import LottieView from 'lottie-react-native';
import colors from '../../constants/colors';
import Swiper from 'react-native-swiper';
import TourCard from '../../components/common/card/CardTour';
import TourCardVetical from '../../components/common/card/TourCardVetical';

const data = [
    { uri: require('../../assets/images/image.png') },
    { uri: require('../../assets/images/slider1.png') },
    { uri: require('../../assets/images/image.png') },
    { uri: require('../../assets/images/image.png') },
    { uri: require('../../assets/images/image.png') },

]

const categorys = [
    { name: "Tất cả" },
    { name: "Biển đảo" },
    { name: "Leo núi" },
    { name: "Cấm trại" },
    { name: "Khám phá thiên nhiên" },
]

const tours = [
    { id: 0, name: 'Vinh Ha Long', locate: 'VietNam', image: require('../../assets/images/image.png'), price: 300000 },
    { id: 1, name: 'Vinh Ha Long', locate: 'VietNam', image: require('../../assets/images/image.png'), price: 300000 },
    { id: 2, name: 'Vinh Ha Long', locate: 'VietNam', image: require('../../assets/images/image.png'), price: 300000 },
    { id: 3, name: 'Vinh Ha Long', locate: 'VietNam', image: require('../../assets/images/image.png'), price: 300000 },
    { id: 4, name: 'Vinh Ha Long', locate: 'VietNam', image: require('../../assets/images/image.png'), price: 300000 },
]
const HomeScreen = () => {
    const [refreshing, setRefreshing] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedFavorite, setSelectedFavorite] = useState(null)

    function handleCatePress(index) {
        console.log('onpress')
        if (selectedIndex !== index) {
            setSelectedIndex(index);  // Cập nhật chỉ số của mục được chọn
        }
    }
<<<<<<< HEAD:src/screens/Home/HomeScreen.js
=======
    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <Accordion values={values}/>
        </View>
        
    )
}
>>>>>>> 006b0348efa4e5e4ce45023656f4c03c1edb0a22:src/screens/main/tabs/Home/HomeScreen.js

    function handleClickFavorite(index) {
        if (selectedFavorite !== index) {
            setSelectedFavorite(index);  // Cập nhật chỉ số của mục được chọn
        }
    }

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 5000);
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                // contentContainerStyle={styles.container}
                refreshControl={
                    <RefreshControl
                        progressViewOffset={-200}
                        accessibilityElementsHidden={false}
                        accessible={false}
                        refreshing={refreshing}
                        progressBackgroundColor={colors.Gray_0}
                        onRefresh={onRefresh}
                        style={styles.refreshControl}
                    >
                    </RefreshControl>
                }

            >
                <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />


                <View style={[styles.flex_row, styles.headerContainer]}>
                    <Text style={styles.textHeader}>Chào mừng </Text>
                    <View style={[styles.flex_row, styles.iconContainer]}>
                        <TouchableOpacity>
                            <Image
                                style={styles.serchIcon}
                                source={require('../../assets/images/searchIcon.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                style={styles.noticeIcon}
                                source={require('../../assets/images/noticeIcon.png')} />
                        </TouchableOpacity>
                    </View>
                </View>

                {refreshing ? <LottieView
                    source={require('../../assets/lottile/lote.json')}
                    autoPlay
                    loop
                    style={styles.lottieAnimation}
                /> : <></>}
                <Swiper
                    style={styles.swiper}
                    showsHorizontalScrollIndicator={true}
                    indicatorStyle='white'
                    autoplay
                    autoplayTimeout={3}>
                    {data.map((item, index) => (
                        <Image style={styles.itemSwiper} key={index} source={item.uri} />
                    ))}
                </Swiper>

                <ScrollView
                    style={styles.categoryContainer}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {categorys && categorys.map((item, index) => (
                        <View
                            style={styles.itemCate}
                            key={index} >
                            <View style={styles.itemContainer}>
                                <TouchableOpacity
                                    onPress={() => handleCatePress(index)}>
                                    <Text style={[styles.textCate, selectedIndex === index && styles.selectedItem]}>{item.name}</Text>

                                </TouchableOpacity>
                                {
                                    selectedIndex === index && <View style={styles.dotStyle}></View>
                                }
                            </View>
                        </View>
                    ))}
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    <View
                        style={styles.cardContainer}>
                        {
                            tours && tours.map((item, index) => (
                                <View
                                    key={index}
                                    style={styles.card}
                                >
                                    <TourCard
                                        tour={item}
                                        onPressed={() => handleClickFavorite(index)}
                                    />
                                </View>
                            ))
                        }

                        <Text> Xem Them </Text>
                    </View>
                </ScrollView>

                <Text style={styles.heading}>Điểm đến được săn đón</Text>

                <View
                    style={styles.cardVeticalC}>
                    {
                        tours && tours.map((item, index) => (
                            <View
                                key={index}
                                style={styles.cardVetical}
                            >
                                <TourCardVetical tour={item} />
                            </View>
                        ))
                    }

                </View>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    // itemCate: {
    //     alignItems:'center'
    // },
    cardVetical: {
        width: '100%',
        marginTop: 8
    },
    itemSwiper: {
        borderRadius: 30,
        height: 192,
    },
    heading: {
        fontSize: 16,
        fontStyle: 'normal',
        color: '#4D4C4C',
        fontWeight: '600',
        marginTop: 20
    },
    card: {
        marginRight: 8
    },
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'nowrap',
        paddingTop: 26
    },
    cardVeticalC: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        flexWrap: 'nowrap',
        paddingTop: 26
    },
    itemContainer: {
        marginRight: 24,
        alignItems: 'center'
    },
    dotStyle: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: colors.primary
    },
    categoryContainer: {
        width: "100%",
        flexDirection: 'row',
        flexWrap: 'nowrap',
        marginTop: 24
    },
    selectedItem: {
        color: colors.primary
    },
    textCate: {
        color: '#A8A8A8',
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: 'white',
    },
    swiper: {
        width: '100%',
        height: 192,
        marginTop: 12,
    },
    container: {
        paddingHorizontal: 16,
        flex: 1,
        backgroundColor: colors.onPrimary
    },
    refreshControl: {
        width: '100%',
        height: 20,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    lottieAnimation: {
        height: 100,
        width: "100%",
    },
    text: {
        color: '#fff',
        fontSize: 16,
    },
    serchIcon: {
        width: 40,
        height: 40,
    },
    noticeIcon: {
        width: 40,
        height: 40,
    },
    iconContainer: {
        width: 92,
        justifyContent: 'space-between'
    },
    flex_row: {
        flexDirection: 'row',

    },
    headerContainer: {
        width: '100%',
        paddingVertical: 10,
        justifyContent: 'space-between'
    },
    textHeader: {
        fontSize: 28,
        fontStyle: 'normal',
        color: '#595454',
        fontWeight: 'bold'
    }
});

export default HomeScreen;

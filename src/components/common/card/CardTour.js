import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import EmailIcon from '../../../assets/icons/bottom_tab/Ic_email';
import FavoriteIcon from '../../../assets/icons/bottom_tab/Ic_favorite';
import IcLocate from '../../../assets/icons/Ic_locate';


const TourCard = ({ tour, onPressed }) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.imageContainer}>
                <Image
                    source={{uri:tour?.imageInfo.linkImage[0]}}
                    style={styles.image} />
                <TouchableOpacity
                    onPress={onPressed}
                    style={styles.favoriteIcon}>
                    <FavoriteIcon />
                </TouchableOpacity>
            </View>


            <View
                style={styles.infoContainer}>
                <Text
                    style={styles.tourTitle}>{tour?.tourName}</Text>
                <View
                    style={styles.locationContainer}>
                    <IcLocate />
                    <Text
                        style={styles.locationText}>{tour?.locationInfo?.destination}</Text>
                </View>
                <Text
                    style={styles.price}>{tour?.detailInfo?.priceAdult} VND
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        width: 168,
        backgroundColor: '#F8F8F8',
        borderRadius: 10,
        shadowColor: '#000',
    },
    imageContainer: {
        position: 'relative',
    },
    image: {
        width: '100%',
        height: 120,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    favoriteIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 16,
    },
    infoContainer: {
        padding: 10,
    },
    tourTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    locationText: {
        marginLeft: 5,
        color: '#888',
        fontSize: 14,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#007BFF',
    },
});

export default TourCard;

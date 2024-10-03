import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import EmailIcon from '../../../assets/icons/EmailIcon';
import FavoriteIcon from '../../../assets/icons/FavoriteIcon';


const TourCard = ({ tour, onPressed }) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.imageContainer}>
                <Image
                    source={tour.image}
                    style={styles.image} />
                <TouchableOpacity
                    onPress={onPressed}
                    style={styles.favoriteIcon}>
                    <FavoriteIcon />
                </TouchableOpacity>
            </View>


            <View style={styles.infoContainer}>
                <Text style={styles.tourTitle}>{tour.name}</Text>
                <View style={styles.locationContainer}>
                    {/* <FontAwesome name="map-marker" size={18} color="#FF6347" /> */}
                    <Text style={styles.locationText}>{tour.locate}</Text>
                </View>
                <Text style={styles.price}>{tour.price} VND</Text>
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
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.3,
        // shadowRadius: 4,
        // elevation: 5,
        // margin: 10,
        // overflow: 'hidden',
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

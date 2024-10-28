import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import ReviewCard from '../../../../components/common/card/ReviewCard';
import { Rating } from 'react-native-ratings';
import Lable from '../../../../components/common/labelText';

const ReviewList = ({ reviews, onSeeMore }) => {
    return (
        <View>
            <Lable style={styles.lable} lable={'Đánh giá chuyến đi'}/>
            <View style={styles.ratingContainer}>
                <View style={styles.row}>
                    <Text style={styles.rating}>5</Text>
                    <Text style={styles.text}>/5</Text>
                </View>

                <Rating
                    style={styles.starRating}
                    ratingCount={5}
                    startingValue={5}
                    imageSize={14}
                />
                <Text style={styles.totalReviews}>10 đánh giá</Text>
            </View>

           
            <FlatList
                horizontal={true}
                data={reviews}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.cardContainer}>
                        <ReviewCard review={item} />
                    </View>
                )}
                showsHorizontalScrollIndicator={false} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    ratingContainer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    lable:{
        marginTop:12,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rating: {
        fontSize: 32,
        fontWeight: 'bold',
        marginRight: 5,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 5,
    },
    starRating: {
        marginHorizontal: 5,
    },
    totalReviews: {
        fontSize: 14,
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: 'gray',
    },
    cardContainer: {
        paddingRight: 10, // Thêm khoảng cách giữa các ReviewCard
    },
});

export default ReviewList;

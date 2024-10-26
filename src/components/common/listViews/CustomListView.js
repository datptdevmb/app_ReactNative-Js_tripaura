import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import fontsize from '../../../constants/fontsize';
const CustomListView = ({ data, onPressItem }) => {

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <TouchableOpacity
                onPress={onPressItem}>
                { }
                <Image source={{ uri: item.images.linkImage[0] }} style={styles.itemImage} />
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>{item.description}</Text>
                <Text style={styles.itemDay}>{item.day}</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item._id}
                numColumns={2}
                columnWrapperStyle={styles.row}
            />

        </View>
    )
}

export default CustomListView

const styles = StyleSheet.create({
    itemContainer: {
        width: 160,
        height: 240,
        backgroundColor: '#F8F9FE',
        borderRadius: 10,
        marginBottom: 20
    },
    itemImage: {
        width: 160,
        height: 120,
        borderTopLeftRadius: 10, // Bo góc trên bên trái
        borderTopRightRadius: 10, // Bo góc trên bên phải
    },
    itemName: {
        height: 40,
        fontSize: fontsize.sm,
        color: '#4D4D4D',
        fontWeight: 'bold',
        marginTop: 16,
        marginLeft: 16,
        marginRight: 16,
        fontWeight: '700',
    },
    itemPrice: {
        fontSize: fontsize.sm,
        color: '#0572E7',
        fontWeight: '700',
        marginLeft: 16,
        marginRight: 16,
    },
    itemDay: {
        height: 16,
        fontSize: fontsize.xs,
        color: '#757575',
        marginTop: 10,
        marginLeft: 16,
        marginRight: 16,
        fontWeight: '400',
    },
    row: {
        justifyContent: 'space-between',
    },
})
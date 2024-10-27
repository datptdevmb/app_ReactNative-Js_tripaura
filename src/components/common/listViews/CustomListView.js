import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import fontsize from '../../../constants/fontsize';
import Icons from '../../../constants/Icons';
const CustomListView = ({ data, onPressItem }) => {
    
    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <TouchableOpacity
                onPress={onPressItem}>
                { }
                <Image source={{ uri: item.images.linkImage[0] }} style={styles.itemImage} />
                <Text style={styles.itemName} numberOfLines={2}>{item.tourName}</Text>
                <View style={styles.address}>
                    <Image source={Icons.ic_address} />
                    <Text style={styles.itemDay}>{item.locations.destination}</Text>
                </View>
                <Text style={styles.itemPrice}>Giá: {item.details.priceAdult}</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={{ marginBottom: 50 }}>
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
    address: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 16
    },
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
        fontSize: fontsize.fm,
        color: '#757575',
        marginLeft: 8,
        fontWeight: '700',
    },
    row: {
        justifyContent: 'space-between',
    },
})
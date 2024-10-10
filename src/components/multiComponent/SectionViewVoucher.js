import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../../constants/colors'

const SectionViewVoucher = ({ data }) => {
    const renderItems = (item) => {
        return (
            <TouchableOpacity key={item.id} onPress={() => onItemPress(item)} style={styles.containerpacename}>
                <Image source={item.image} style={styles.imagepace} />
                <Text style={[styles.txtpacename, { color: colors.Steelblue, fontSize: 13 }]}>{item.name}</Text>
                <Text style={[styles.txtpacename, { color: colors.Red, fontSize: 11 }]}>Chính Sách đảm bảo giá tốt</Text>
                <Text style={[styles.txtpacename, { color: colors.primary_500, fontSize: 13 }]}>Chỉ từ {item.price}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.wrapper}>
                {data.map((item) => renderItems(item))}
            </View>
        </View>
    )
}

export default SectionViewVoucher

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 21,
        paddingBottom: 20
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    containerpacename: {
        display: 'flex',
        width: '47%',
        height: 'auto',
        paddingVertical: 10,
        paddingHorizontal: 6,
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#fff',
        elevation: 1,
        shadowColor: colors.LavenderGray,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 1,
        marginTop: 25,
    },
    imagepace: {
        width: 153,
        height: 108,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    txtpacename: {
        width: 153,
        fontFamily: 'Lato',
        fontWeight: '700',
        marginTop: 3,
    },

})
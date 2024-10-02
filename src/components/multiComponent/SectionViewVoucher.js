import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../constants/colors'

const SectionViewVoucher = ({ data, title }) => {
    const renderItems = (item) => {
        return (
            <View style={styles.containerpacename}>
                <Image source={item.image} style={styles.imagepace} />
                <Text style={[styles.txtpacename, { color: '#4D4D4D', fontSize: 13 }]}>{item.name}</Text>
                <Text style={[styles.txtpacename, { color: '#F00', fontSize: 11 }]}>Chính Sách đảm bảo giá tốt</Text>
                <Text style={[styles.txtpacename, { color: '#0572E7', fontSize: 13 }]}>Chỉ từ {item.price}</Text>
            </View>
        )
    }
    return (
        <ScrollView style={styles.container}
            showsVerticalScrollIndicator={false}
        >

            <View style={styles.wrapper}>
                {data.map((item) => renderItems(item))}
            </View>
        </ScrollView>
    )
}

export default SectionViewVoucher

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 21,
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
        shadowColor: '#E6E0E9',
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
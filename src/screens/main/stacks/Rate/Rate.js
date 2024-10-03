import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Headercomponet from '../../../../components/common/header/Headercomponet'
import Icons from '../../../../constants/Icons'
import colors from '../../../../constants/colors'
import { datarate } from '../../../../constants/data'
import SectionViewRate from '../../../../components/multiComponent/SectionViewRate'

const Rate = () => {
    return (
        <View style={styles.container}>
            <Headercomponet
                leftIcon={Icons.lefticon}
                title={"Đánh gía"}
            />
            <View style={styles.containerstarrate}>
                <Text style={[styles.textstar, { fontSize: 32 }]}>5</Text>
                <Text style={[styles.textstar, { fontSize: 16 }]}>/</Text>
                <Text style={[styles.textstar, { fontSize: 16 }]}>5</Text>
                {[1, 2, 3, 4, 5].map((star) => (
                    <Image
                        key={star}
                        source={Icons.star}
                        style={styles.star}
                    />
                ))}

            </View>
            <SectionViewRate data={datarate} />
        </View>
    )
}
export default Rate

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flex: 1,
    },
    containerstarrate: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 23,
        height: 'auto',
        width: 'auto',
    },
    textstar: {
        lineHeight: 32,
        color: colors.Grey_900,
        fontFamily: 'Lato',
        fontWeight: '700',
        overflow: 'hidden',
    },
    star: {
        width: 24,
        height: 24,
        alignItems: 'center',
        marginBottom: 5,
        marginLeft: 5,
    },

})
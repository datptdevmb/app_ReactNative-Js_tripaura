import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import colors from '../../constants/colors';

const CategroryCity = ({ data }) => {
    const renderItems = (item) => {
        return (
            <TouchableOpacity style={styles.catesection} key={item.id}>
                <Text style={styles.textcate}>{item.name}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <ScrollView
            style={styles.catesectionContainer}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            <TouchableOpacity style={styles.catesection} key="all">
                <Text style={styles.textcate}>All</Text>
            </TouchableOpacity>
            {data.map((item) => renderItems(item))}
        </ScrollView>
    );
};

export default CategroryCity;

const styles = StyleSheet.create({
    catesectionContainer: {
        flexDirection: 'row',
    },
    catesection: {
        paddingVertical: 9,
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: colors.primary_200,
        marginRight: 10,
    },
    textcate: {
        fontSize: 14,
        fontWeight: '500',
        color: '#121212',
        textAlign: 'center',
        fontStyle: 'normal',

    },
});

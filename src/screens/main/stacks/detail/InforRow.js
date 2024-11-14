import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InfoRow = ({ icon, content }) => {
    return (
        <View style={styles.row}>
            {icon}
            <Text style={styles.content}>{content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 8, // Thay đổi giá trị tùy theo thiết kế
    },
    content: {
        marginLeft: 8,
        fontStyle:'normal',
        fontFamily:"Lato",
        fontSize: 14,
        color: '#757575', 
    },
});

export default InfoRow;

import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const InputOtpComponent = ({style}) => {
    return (
        <View style={styles.container}>
             <TextInput style={[styles.input, style]} keyboardType="numeric" maxLength={1} />
        </View>
    );
};

export default InputOtpComponent;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: 70,
        height: 56,
        borderRadius: 12,
        backgroundColor: '#f7f7f9',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500',
        lineHeight: 24,
        color: '#333', 
    },
});

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Headercomponet from './Headercomponet'

const addd = () => {
    const leftIcon = require('./../../assets/icons/lop.jpg'); // Thay đổi với đường dẫn ảnh thực tế
    const rightIcon =  require('./../../assets/icons/lop.jpg'); // Thay đổi với đường dẫn ảnh thực tế
  
    const handleLeftIconPress = () => {
      console.log('Left icon pressed');
    };
  
    const handleRightIconPress = () => {
      console.log('Right icon pressed');
    };
    return (
        <View style={styles.container}>
            <Headercomponet
                leftIcon={leftIcon}
                title="Header Title"
                style={styles.text}
                rightIcon={rightIcon}
                onPressLeftIcon={handleLeftIconPress}
                onPressRightIcon={handleRightIconPress}
            />
        </View>
    )
}

export default addd

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#0572e7',
    }
})
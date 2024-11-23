import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Animated,
    StyleSheet,
} from 'react-native';

const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const animation = useRef(new Animated.Value(0)).current;
    const [contentHeight, setContentHeight] = useState(0); // Chiều cao nội dung thực tế

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
        Animated.timing(animation, {
            toValue: isOpen ? 0 : 1,
            duration: 300,
            useNativeDriver: false, // Bắt buộc để thay đổi chiều cao
        }).start();
    };

    const maxHeight = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, contentHeight], // Thay đổi chiều cao động
    });

    const rotateIcon = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg'], // Xoay icon bằng transform
    });

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleAccordion} style={styles.header}>
                <Text style={styles.headerText}>{title}</Text>
                <Animated.View style={{ transform: [{ rotate: rotateIcon }] }}>
                    <Text style={styles.icon}>{isOpen ? '▲' : '▼'}</Text>
                </Animated.View>
            </TouchableOpacity>
            <Animated.View style={[styles.content, { height: maxHeight }]}>
                <View
                    style={styles.innerContent}
                    onLayout={(event) => {
                        const { height } = event.nativeEvent.layout;
                        setContentHeight(height); // Đo chiều cao nội dung
                    }}
                >
                    {children}
                </View>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        borderBottomWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        overflow: 'hidden',
    },
    header: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        color: 'grey',
        fontSize: 16,
    },
    icon: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    content: {
        overflow: 'hidden',
    },
    innerContent: {
        padding: 15,
        backgroundColor: '#EDEDED',
    },
});

export default Accordion;

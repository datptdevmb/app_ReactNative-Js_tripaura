import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import LottieView from 'lottie-react-native';
import fontsize from '../../../constants/fontsize';

const Toast = ({ message, onPress }) => {

    console.log('ddd')
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(-100)).current; // Vị trí bắt đầu của toast bên ngoài màn hình

    useEffect(() => {
        // Chạy animation slide và fade khi toast xuất hiện
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.spring(slideAnim, {
                toValue: 0,
                bounciness: 10,
                useNativeDriver: true,
            })
        ]).start(() => {
            // Sau khi hiện 3 giây, toast sẽ biến mất
            setTimeout(() => {
                Animated.parallel([
                    Animated.timing(fadeAnim, {
                        toValue: 0,
                        duration: 500,
                        useNativeDriver: true,
                    }),
                    Animated.timing(slideAnim, {
                        toValue: -100,
                        duration: 500,
                        useNativeDriver: true,
                    })
                ]).start();
            }, 3000); // Thời gian toast hiển thị
        });
    }, []);

    return (
        <Animated.View style={[
            styles.toast,
            { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }
        ]}>
            <LottieView
                autoPlay
                loop
                style={styles.iconToast}
                source={require('../../../assets/lottile/loading.json')}
            />
            <View>
                <Text>{message}</Text>
            </View>
            <TouchableOpacity style={styles.btnXem} onPress={onPress}>
                <Text style={styles.xem}>Xem</Text>
            </TouchableOpacity>
        </Animated.View>
    );
};

const styles = {
    toast: {
        paddingHorizontal: 20,
        zIndex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        width: 340,
        height: 60,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowOffset: { width: 0, height: 3 },
        shadowColor: 'black',
        shadowRadius: 4,
        shadowOpacity: 0.3,
        elevation: 5,
        position: 'absolute', 
        top: 20,

    },
    xem: {
        textDecorationLine: 'underline',
        fontsize:14,
        fontStyle:'normal'
    },
    iconToast: {
        width: 40,
        height: 40,
    },
    btnXem: {
        marginLeft: 'auto',
        paddingHorizontal: 10,
    },
};

export default Toast;

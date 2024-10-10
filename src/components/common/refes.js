// components/CustomRefreshScrollView.js

import React, { useState, useRef } from 'react';
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    Animated,
    PanResponder,
    ActivityIndicator,
    Dimensions,
} from 'react-native';
import colors from '../../constants/colors';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const CustomRefreshScrollView = ({ onRefresh, children }) => {
    const [refreshing, setRefreshing] = useState(false);
    const pullAnim = useRef(new Animated.Value(0)).current;

    // Tạo PanResponder để xử lý cử chỉ kéo
    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => false,
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                // Chỉ bắt cử chỉ kéo xuống
                return gestureState.dy > 0 && gestureState.dy > Math.abs(gestureState.dx);
            },
            onPanResponderMove: (evt, gestureState) => {
                if (gestureState.dy > 0 && !refreshing) {
                    pullAnim.setValue(gestureState.dy / 2); // Giảm tốc độ kéo để cảm giác mượt
                }
            },
            onPanResponderRelease: (evt, gestureState) => {
                if (gestureState.dy > 100 && !refreshing) { // Ngưỡng kích hoạt làm mới
                    triggerRefresh();
                } else {
                    Animated.spring(pullAnim, {
                        toValue: 0,
                        useNativeDriver: true,
                    }).start();
                }
            },
        })
    ).current;

    // Hàm kích hoạt quá trình làm mới
    const triggerRefresh = () => {
        setRefreshing(true);
        Animated.timing(pullAnim, {
            toValue: 100,
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            // Gọi hàm onRefresh và đợi kết quả (giả sử onRefresh trả về Promise)
            onRefresh().then(() => {
                Animated.timing(pullAnim, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }).start(() => {
                    setRefreshing(false);
                });
            });
        });
    };

    return (
        <View style={styles.container} {...panResponder.panHandlers}>
            {/* Chỉ thị làm mới */}
            <Animated.View
                style={[
                    styles.refreshIndicator,
                    {
                        transform: [{ translateY: pullAnim }],
                    },
                ]}
            >
                {refreshing ? (
                    <ActivityIndicator size="small" color="#0000ff" />
                ) : (
                    <View style={{
                        height: 250,
                        backgroundColor: colors.Grey_400
                    }}>
                        <Text>Kéo xuống để làm mới</Text>
                    </View>

                )}
            </Animated.View>

            {/* ScrollView chứa nội dung */}
            <ScrollView
                contentContainerStyle={styles.scrollViewContent}
                scrollEnabled={!refreshing}
            >
                {children}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    refreshIndicator: {
        position: 'absolute',
        top: -50, // Vị trí ban đầu của chỉ thị làm mới
        left: 0,
        right: 0,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollViewContent: {
        paddingTop: 50, // Để không bị che bởi chỉ thị làm mới
        paddingHorizontal: 16,
        paddingBottom: 20,
    },
});

export default CustomRefreshScrollView;

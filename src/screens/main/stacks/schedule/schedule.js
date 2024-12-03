// src/screens/main/stacks/schedule/schedule.js
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import Header from '../../../../components/common/header/Header';
import { Calendar } from 'react-native-calendars';
import Button from '../../../../components/common/button/Button';
import Icons from '../../../../constants/Icons';

const Schedule = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isCalendarVisible, setCalendarVisible] = useState(false);
    const [isEndDate, setIsEndDate] = useState(false); // Track if selecting end date


    const handleTimePress = () => {
        setCalendarVisible(prev => !prev);
    }

    const handleDayPress = (day) => {
        if (isEndDate) {
            setEndDate(day.dateString);
        } else {
            setStartDate(day.dateString);
        }
        setCalendarVisible(false);
    };

    return (
        <ScrollView style={styles.container}>
            <Header title='Lên lịch trình' />

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Điểm xuất phát"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Điểm kết thúc"
                />
                <TouchableOpacity style={styles.time} onPress={handleTimePress}>
                    <Text style={styles.timeText}>
                        Thời gian
                    </Text>
                    <Image source={Icons.down} style={styles.icon} />
                </TouchableOpacity>

                {isCalendarVisible && (
                    <View>
                        <Text>Chọn ngày bắt đầu:</Text>
                        <Calendar
                            onDayPress={(day) => {
                                setIsEndDate(false);
                                handleDayPress(day);
                            }}
                            markedDates={{ [startDate]: { selected: true, marked: true, selectedColor: 'blue' } }}
                        />
                        <Text>Chọn ngày kết thúc:</Text>
                        <Calendar
                            onDayPress={(day) => {
                                setIsEndDate(true);
                                handleDayPress(day);
                            }}
                            markedDates={{ [endDate]: { selected: true, marked: true, selectedColor: 'blue' } }}
                        />
                    </View>
                )}
                <TextInput
                    style={styles.input}
                    placeholder="Số người"
                    keyboardType="numeric"
                />
                <View style={styles.button}>
                    <Button label='Áp Dụng' onPress={() => {z }} />
                </View>
            </View>

            <View style={{ height: 60 }} />
        </ScrollView>
    );

}
export default Schedule;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    input: {
        borderColor: 'gray',
        borderBottomWidth: 1,
    },
    button: {
        marginTop: 30,
    },
    inputContainer: {
        marginTop: 20,
    },
    icon: {
        width: 20,
        height: 20,
    },
    time: {
        flexDirection: 'row',
        marginTop: 20,
        height: 35,
        justifyContent: 'space-between',
        borderColor: 'gray',
        borderBottomWidth: 1,

    }
}); 
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icons from '../../../../constants/Icons'; // Adjust the path as necessary

const Itinerary = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.dayTitle}>Ngày 1</Text>
            <Text style={styles.date}>26/11/2024</Text>
            <Text style={styles.distance}>300.1 km | 3 địa điểm</Text>

            {/* First Destination */}
            <View style={styles.timelineContainer}>
                <View style={styles.timeline}>
                    <Text style={styles.time}>11:00</Text>
                    <Image source={Icons.image1} style={styles.image} />
                    <View style={styles.details}>
                        <Text style={styles.location}>Đảo Phú Quốc</Text>
                        <Text style={styles.info}>T/g tham quan: 1h</Text>
                    </View>
                    <TouchableOpacity style={styles.noteButton}>
                        <Text style={styles.noteText}>Ghi chú</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.line} />
                <View style={styles.transportContainer}>
                    <Image source={Icons.carIcon} style={styles.carIcon} />
                    <Text style={styles.travelInfo}>14.0 km | 21p</Text>
                </View>
                <View style={styles.freeTimeContainer}>
                    <Image source={Icons.clockIcon} style={styles.clockIcon} />
                    <Text style={styles.timeInfo}>Thời gian rảnh: 2h</Text>
                </View>
            </View>

            <View style={styles.separator} />

            {/* Second Destination */}
            <View style={styles.timelineContainer}>
                <View style={styles.timeline}>
                    <Text style={styles.time}>12:21</Text>
                    <Image source={Icons.image2} style={styles.image} />
                    <View style={styles.details}>
                        <Text style={styles.location}>Chùa Vĩnh Nghiêm</Text>
                        <Text style={styles.info}>T/g tham quan: 45p</Text>
                    </View>
                    <TouchableOpacity style={styles.noteButton}>
                        <Text style={styles.noteText}>Ghi chú</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.addDestination}>
                <Text style={styles.addText}>+ Thêm địa điểm</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    dayTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    date: {
        fontSize: 16,
        color: 'gray',
    },
    distance: {
        fontSize: 16,
        marginBottom: 16,
    },
    timelineContainer: {
        position: 'relative',
        marginBottom: 30,
    },
    timeline: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    time: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    details: {
        flex: 1,
        marginLeft: 10,
    },
    location: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    info: {
        fontSize: 14,
        color: 'gray',
    },
    noteButton: {
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        padding: 5,
    },
    noteText: {
        fontSize: 14,
        color: 'blue',
    },
    line: {
        position: 'absolute',
        left: 20,
        top: 30,
        width: 2,
        height: '100%',
        backgroundColor: 'lightgray',
    },
    transportContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    carIcon: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    travelInfo: {
        fontSize: 14,
        color: 'gray',
    },
    freeTimeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    clockIcon: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    timeInfo: {
        fontSize: 14,
        color: 'gray',
    },
    separator: {
        height: 1,
        backgroundColor: 'lightgray',
        marginVertical: 10,
    },
    addDestination: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    addText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default Itinerary;
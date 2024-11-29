import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icons from '../../../../constants/Icons';

const TripDetails = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState('Chuyển đi');

    const renderItinerary = () => {
        switch (activeTab) {
            case 'Chuyển đi':
                return (
                    <View>
                        <View style={styles.headerContainer}>
                            <Text style={styles.sectionTitle}>Lịch trình chuyến đi</Text>
                            <TouchableOpacity style={styles.viewAllContainer} onPress={() => { }}>
                                <Text style={styles.viewAllText}>Xem tất cả</Text>

                            </TouchableOpacity>
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('Itinerary')
                            }} style={styles.imageContainer}>
                                <Image source={Icons.image} style={styles.image} />
                                <Text style={styles.imageDate}>26 th 11</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.imageContainer}>
                                <Image source={Icons.image} style={styles.image} />
                                <Text style={styles.imageDate}>27 th 11</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.imageContainer}>
                                <Image source={Icons.image} style={styles.image} />
                                <Text style={styles.imageDate}>28 th 11</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                );
            case 'Chuyến bay':
                return (
                    <View>
                        <View style={styles.headerContainer}>
                            <Text style={styles.sectionTitle}>Lịch trình chuyến đi</Text>
                            <TouchableOpacity style={styles.viewAllContainer} onPress={() => { }}>
                                <Text style={styles.viewAllText}>Xem tất cả</Text>

                            </TouchableOpacity>
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
                            <View style={styles.imageContainer}>
                                <Image source={Icons.image} style={styles.image} />
                                <Text style={styles.imageDate}>26 th 11</Text>
                            </View>
                            <View style={styles.imageContainer}>
                                <Image source={Icons.image} style={styles.image} />
                                <Text style={styles.imageDate}>27 th 11</Text>
                            </View>
                            <View style={styles.imageContainer}>
                                <Image source={Icons.image} style={styles.image} />
                                <Text style={styles.imageDate}>28 th 11</Text>
                            </View>
                        </ScrollView>
                    </View>
                );
            case 'Khách sạn':
                return (
                    <View>
                        <View style={styles.headerContainer}>
                            <Text style={styles.sectionTitle}>Lịch trình chuyến đi</Text>
                            <TouchableOpacity style={styles.viewAllContainer} onPress={() => { }}>
                                <Text style={styles.viewAllText}>Xem tất cả</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
                            <TouchableOpacity onPress={() => {

                            }} style={styles.imageContainer}>
                                <Image source={Icons.image} style={styles.image} />
                                <Text style={styles.imageDate}>26 th 11</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.imageContainer}>
                                <Image source={Icons.image} style={styles.image} />
                                <Text style={styles.imageDate}>27 th 11</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.imageContainer}>
                                <Image source={Icons.image} style={styles.image} />
                                <Text style={styles.imageDate}>28 th 11</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                );
            default:
                return null;
        }
    };

    return (
        <ScrollView style={styles.container}>
            <Image source={Icons.image} style={styles.imageBackground} />
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <Text style={styles.title}>3 ngày đi Bali từ Bali</Text>
                    <Text style={styles.date}>26 th 11 - 28 th 11</Text>
                    <Text style={styles.creator}>Tạo bởi Phạm Thành Đạt</Text>
                </View>


                <View style={styles.tabContainer}>
                    <TouchableOpacity
                        style={styles.tab}
                        onPress={() => setActiveTab('Chuyển đi')}
                    >
                        <Text style={styles.tabText}>Chuyển đi</Text>
                        {activeTab === 'Chuyển đi' && <View style={styles.underline} />}
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.tab}
                        onPress={() => setActiveTab('Chuyến bay')}
                    >
                        <Text style={styles.tabText}>Chuyến bay</Text>
                        {activeTab === 'Chuyến bay' && <View style={styles.underline} />}
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.tab}
                        onPress={() => setActiveTab('Khách sạn')}
                    >
                        <Text style={styles.tabText}>Khách sạn</Text>
                        {activeTab === 'Khách sạn' && <View style={styles.underline} />}
                    </TouchableOpacity>
                </View>

                {renderItinerary()}

                <Text style={styles.sectionTitle}>Bao gồm</Text>
                <Text style={styles.includedText}>Chưa có dịch vụ nào cho chuyến đi của bạn.</Text>
                <Text style={styles.sectionTitle}>Thành viên</Text>
                <View style={styles.memberContainer}>
                    <Image source={Icons.avatar} style={styles.avatar} />
                    <Text style={styles.memberText}>Phạm...</Text>
                </View>
            </View>
            <View style={{ height: 650 }} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
    },
    cardContainer: {
        padding: 16,
        position: 'absolute',
        top: 100,
    },
    memberContainer: {
        flexDirection: 'column',
    },
    underline: {
        height: 2,
        backgroundColor: 'blue',
        marginTop: 4,
        width: '100%',
    },
    card: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        fontWeight: '600',
        color: 'black',
        fontSize: 16,
    },
    date: {
        fontSize: 16,
        color: 'gray',
    },
    creator: {
        fontSize: 16,
        color: 'black',
        fontWeight: '600',
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    tab: {
        padding: 10,
    },
    tabText: {
        fontSize: 16,
        color: 'blue',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 16,
        color: 'black',
    },
    includedText: {
        fontSize: 14,
        color: 'gray',
    },
    memberText: {
        fontSize: 14,
        color: 'gray',
    },
    scrollContainer: {
        marginVertical: 8,

    },
    imageContainer: {
        marginRight: 10,
    },
    image: {
        width: 140,
        height: 220,
        borderRadius: 8,
    },
    imageBackground: {
        width: '100%',
        height: 165,
        position: 'relative',
        borderRadius: 8,
    },
    imageDate: {
        textAlign: 'center',
        marginTop: 4,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    viewAllContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewAllIcon: {
        width: 16,
        height: 16,
        marginRight: 4,
    },
    viewAllText: {
        fontSize: 14,
        color: 'blue',
    },
});

export default TripDetails;
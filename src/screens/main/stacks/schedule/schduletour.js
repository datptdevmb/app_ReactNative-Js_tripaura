import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icons from '../../../../constants/Icons';
import { useDispatch, useSelector } from 'react-redux';
import { LayDanhSachLichTrinh } from '../../../../redux/slices/getlichtrinh.slice';

const TripDetails = ({ navigation, route }) => {
    const [activeTab, setActiveTab] = useState('Chuyển đi');
    const { Schedules } = useSelector(state => state.reducer.schemal || {});
    const { getLichTrinhData, getLichTrinhStatus, error } = useSelector(state => state.reducer.lichtrinh);
    const startDate = getLichTrinhData?.data?.startDay ? new Date(getLichTrinhData.data.startDay) : null;
    const endDate = getLichTrinhData?.data?.endDay ? new Date(getLichTrinhData.data.endDay) : null;
    const idlichtrinh = "67495362ea72cd1ced81fef8";

    const userReducer = useSelector(state => state.reducer.auth);
    const user = userReducer.user;

    const dispatch = useDispatch();
    useEffect(() => {
        if (idlichtrinh) {
            dispatch(LayDanhSachLichTrinh(idlichtrinh));
        }
    }, [dispatch, idlichtrinh]);

    const formatDate = (date) => {
        if (!date) return '';
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const timeDifference = endDate && startDate ? endDate - startDate : 0;
    const numberOfDays = timeDifference / (1000 * 3600 * 24);

    const lichTrinhha = getLichTrinhData?.data?.locations;

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
                            {Array.isArray(lichTrinhha) ? (
                                lichTrinhha.map((daySchedule, index) => {
                                    const firstImage = daySchedule.locations?.[0]?.images?.[0];
                                    return (
                                        <TouchableOpacity
                                            key={daySchedule._id}
                                            onPress={() => {
                                                navigation.navigate('Itinerary', { day: daySchedule.day, locations: daySchedule.locations });
                                            }}
                                            style={styles.imageContainer}
                                        >
                                            <Image
                                                source={firstImage ? { uri: firstImage } : Icons.image}
                                                style={styles.image}
                                            />
                                            <Text style={styles.imageDate}>Ngày {daySchedule.day}</Text>
                                        </TouchableOpacity>
                                    );
                                })
                            ) : (
                                <Text>Không có lịch trình để hiển thị</Text>
                            )}
                        </ScrollView>
                    </View>
                );

            default:
                return null;
        }
    };

    return (
        <ScrollView style={styles.container}>
            {Array.isArray(lichTrinhha) && lichTrinhha.length > 0 ? (
                <Image
                    source={
                        lichTrinhha[0]?.locations?.[0]?.images?.[0]
                            ? { uri: lichTrinhha[0].locations[0].images[0] }
                            : Icons.image
                    }
                    style={styles.imageBackground}
                />
            ) : (
                <Text style={styles.includedText}>Không có hình ảnh lịch trình nào để hiển thị</Text>
            )}
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <Text style={styles.title}>
                        {numberOfDays > 0 ? `${numberOfDays} ngày` : 'Không có thông tin về số ngày'} đi{' '}
                        {getLichTrinhData?.data?.destination?.name || 'Chưa xác định'} đến {getLichTrinhData?.data?.departure || 'Chưa xác định'}
                    </Text>
                    <Text style={styles.date}>{startDate ? formatDate(startDate) : 'Chưa xác định'} - {endDate ? formatDate(endDate) : 'Chưa xác định'}</Text>
                    <Text style={styles.creator}>{user?.user?.fullname}</Text>
                </View>

                <View style={styles.tabContainer}>
                    <TouchableOpacity
                        style={styles.tab}
                        onPress={() => setActiveTab('Chuyển đi')}
                    >
                        <Text style={styles.tabText}>Chuyển đi</Text>
                        {activeTab === 'Chuyển đi' && <View style={styles.underline} />}
                    </TouchableOpacity>
                </View>

                {renderItinerary()}

                <Text style={styles.sectionTitle}>Bao gồm</Text>
                <Text style={styles.includedText}>Chưa có dịch vụ nào cho chuyến đi của bạn.</Text>
                <Text style={styles.sectionTitle}>Thành viên</Text>
                <View style={styles.memberContainer}>
                    <Image
                        source={user?.user?.avatar ? { uri: user.user.avatar } : Icons.avatar}
                        style={styles.avatar}
                    />
                    <Text style={styles.memberText}>
                        {user?.user?.fullname ? `${user.user.fullname.substring(0, 5)}...` : "Không có tên"}
                    </Text>
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
    viewAllText: {
        fontSize: 14,
        color: 'blue',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
});

export default TripDetails;

import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, FlatList, ActivityIndicator, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../../../components/common/header/Header';
import Icons from '../../../../constants/Icons';
import { useDispatch, useSelector } from 'react-redux';
import { LayDiaDiemTheoNgay } from '../../../../redux/slices/diaDiemTheoNgaySlice';
import { DeleteDiaDiem } from '../../../../redux/slices/deleteDiadiemSlice';

const ItineraryScreen = ({ route, navigation }) => {
    const { dayId, lichTrinhId, daySchedule } = route.params
    console.log("======= day", dayId);
    console.log("======= lichTrinhId", lichTrinhId);
    console.log('daySchedule', daySchedule);

    const { locationByDateData, locationByDateStatus, error } = useSelector(state => state.reducer.locationByDate);
    const { deleteDiaDiemData, deleteDiaDiemStatus } = useSelector(state => state.reducer.deleteDiaDiem);
    const { addDiaDiemData, addDiaDiemStatus } = useSelector(state => state.reducer.addDiaDiem);
    const nhanXoa = (diaDiemId) => {
        dispatch(DeleteDiaDiem({
            lichTrinhId, dayId, diaDiemId
        }))
        Alert.alert('Thành công', 'Xóa địa điểm thành công')
        console.log("=====  delete", deleteDiaDiemData);

    }

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(LayDiaDiemTheoNgay(
            { lichTrinhId, dayId }
        ));
    }, [dispatch, deleteDiaDiemStatus, addDiaDiemStatus]);

    // console.log("=========== data", locationByDateData.data.destination?._id);

    // console.log("================= số địa điểm", locationByDateData.data.dayInfo.locations.length);

    const renderItem = (item, index, dataLength) => {
        const isLastItem = index === dataLength - 1;
    
        return (
            <View style={styles.timeline}>
                <View style={styles.timelineContainer}>
                    <View style={styles.card}>
                        <View style={styles.cardImageContainer}>
                            <Image
                                source={{ uri: item.images[0] }}
                                style={styles.cardImage}
                            />
                        </View>
                        <View style={styles.cardContent}>
                            <Text style={styles.cardTitle}>{item.name}</Text>
                            <Text style={styles.cardSubtitle}>T/g tham quan: {item.time}</Text>

                        </View>
                    </View>
                    {!isLastItem && <View style={styles.line} />} 
                    <TouchableOpacity
                        style={styles.btnDelete}
                        onPress={() => nhanXoa(item._id)}
                    >
                        <Image
                            source={require('../../../../assets/images/close.png')}
                            style={{ width: 12, height: 12 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
    
    return (

        <ScrollView
            showsVerticalScrollIndicator={false}>
            <Header title="Lịch trình"
                onBackPress={() => {
                    navigation.goBack();
                }} />
            <View style={styles.container}>
                {locationByDateStatus === "loading" ? (
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size="large" color="#007BFF" />
                        <Text>Đang tải dữ liệu...</Text>
                    </View>
                ) : (
                    <>
                        {locationByDateData?.data?.dayInfo ? (
                            <View style={styles.dayInfo}>
                                <View style={styles.dateRow}>
                                    <Text style={styles.dayText}>Ngày {daySchedule}</Text>
                                    <Text style={styles.infoText}>
                                        {locationByDateData.data?.dayInfo?.locations?.length || 0} địa điểm
                                    </Text>
                                </View>
                            </View>
                        ) : (
                            <Text>Không có dữ liệu lịch trình!</Text>
                        )}
                        <FlatList
                            scrollEnabled={false}
                            data={locationByDateData.data?.dayInfo?.locations || []} 
                            renderItem={({ item, index }) =>
                                renderItem(item, index, locationByDateData.data?.dayInfo?.locations?.length || 0)
                            }
                            keyExtractor={(item) => item._id}
                        />

                    </>
                )}

                <TouchableOpacity style={styles.addButton}
                    onPress={() => navigation.navigate('DiaDiem',
                        {
                            tinhId: locationByDateData.data.destination?._id,
                            lichTrinhId: lichTrinhId,
                            dayId: dayId,
                            id: locationByDateData.data.dayInfo.locations.map(location => location._id)

                        })}>
                    <Text style={styles.addButtonText}>Thêm địa điểm</Text>
                </TouchableOpacity>
                <View style={{ height: 44 }}></View>
            </View>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    btnDelete: {
        width: 25,
        height: 25,
        borderRadius: 32,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 8,
        right: 8
    },
    cardImageContainer: {
        position: 'relative',
    },
    container: {
        flex: 1,
        backgroundColor: '#F9F9F9',
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    travelInfo: {
        color: '#000',
        fontSize: 14,
        fontWeight: '400',
    },
    carIcon: {
        marginStart: 3,
    },
    line: {
        position: 'absolute',
        left: 20,
        top: 118,
        width: 2,
        height: 50,
        backgroundColor: '#0572E7',
    },
    line2: {
        position: 'absolute',
        left: 20,
        top: 65,
        width: 2,
        height: 39,
        backgroundColor: '#000',
    },
    underline: {
        height: 1,
        backgroundColor: '#8A8A8A',

    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        marginLeft: 16,
    },
    dayInfo: {
        marginTop: 40,
        marginBottom: 5,

    },
    dayText: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 4,
    },
    dateRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    dateText: {
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '700',
        color: '#8A8A8A',
    },
    infoText: {
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '700',
        color: '#8A8A8A',
    },
    timeline: {
        marginTop: 16,
    },
    timelineContainer: {
        position: 'relative',
        marginBottom: 30,
    },
    timelineContainer2: {
        position: 'relative',
        marginTop: 5,
    },
    timelineLine: {
        width: 40,
        alignItems: 'center',
    },
    timelineConnector: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 4,
    },
    verticalLine: {
        width: 2,
        flex: 1,
        backgroundColor: '#007BFF',
    },
    card: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    cardImage: {
        width: 117,
        height: 118,
        marginRight: 12,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
    },
    cardContent: {
        flex: 1,
    },
    cardTitle: {
        width: 150,
        height: 40,
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 10

    },
    cardSubtitle: {
        fontSize: 14,
        color: '#555',
    },
    cardActions: {
        flexDirection: 'row',
        marginTop: 20,
    },
    actionText: {
        fontSize: 14,
        color: '#007BFF',
        marginRight: 16,
    },
    cardTime: {
        fontSize: 14,
        fontWeight: '600',
        color: '#fff',
        position: 'absolute',
        bottom: 0,
        height: 20,
        textAlign: 'center',
        backgroundColor: '#0572E7',
        width: 117,

    },
    freeTimeCard: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 12,
        padding: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        flexDirection: 'row',
        width: 262,
        marginTop: 20,
        marginLeft: 64,
    },
    freeTimeText: {
        fontSize: 14,
        color: '#555',
        marginLeft: 20,
    },
    addButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        backgroundColor: '#FFF',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        marginTop: 65,
    },
    addButtonText: {
        fontSize: 16,
        color: '#007BFF',
        marginLeft: 8,
    },
    timeline2: {
        marginTop: 60,
    },
});

export default ItineraryScreen;

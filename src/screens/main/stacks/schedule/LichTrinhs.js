import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ActivityIndicator
} from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Headercomponet from '../../../../components/common/header/Headercomponet';
import { LayLichTrinhTheoUser } from '../../../../redux/slices/getLichTrinhUserSlice';
import colors from '../../../../constants/colors';

const LichTrinhs = (props) => {
    const { navigation } = props;
    const { lichTrinhByUserData, lichTrinhByUserStatus } = useSelector(state => state.reducer.lichTrinhByUser);
    const dispatch = useDispatch();

    const userReducer = useSelector(state => state.reducer.auth);
    const user = userReducer.user;
    console.log("=============== user", user);
    const userId = user.user._id


    useEffect(() => {
        dispatch(LayLichTrinhTheoUser(userId));
    }, [user, dispatch]);

    const renderItem = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Schduletour', { lichTrinhId: item._id })}>
                    <View style={styles.headerItem}>
                        <Image style={styles.avarta} source={{ uri: user.user.avatar }} />
                        <Text style={{ fontSize: 14, fontWeight: '700' }}>{user.user.fullname}</Text>
                    </View>
                    <Image
                        style={styles.imageItem}
                        source={{ uri: item.locations[0].locations[0].images[0] }}
                    />
                    <Text style={{ marginHorizontal: 16, fontSize: 14, fontWeight: '700' }}>{item.locations.length} ngày đi {item.destination.name}</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={{flex:1}}>
            <View style={{ fontSize:22, justifyContent: 'center', alignItems: 'center', height: 54, backgroundColor: 'white' }}>
                <Text>Lịch trình của tôi</Text>
            </View>
            <View style={styles.container}>

                <View style={{ height: 24 }}></View>
                {lichTrinhByUserStatus === 'loading' ? (
                    // Hiển thị loading khi dữ liệu đang được tải
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size="large" color="#007BFF" />
                        <Text>Đang tải dữ liệu...</Text>
                    </View>
                ) : (
                    // Hiển thị FlatList khi dữ liệu đã tải xong
                    <FlatList
                        data={lichTrinhByUserData.data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item._id}
                    />
                )}
                <TouchableOpacity
                    style={styles.btnAdd}
                    onPress={() => navigation.navigate('Schedule')}
                >
                    {/* <Image
                        style={styles.imageBtn}
                        source={require('../../../../assets/images/back.png')}
                    /> */}
                    <Text style={{fontSize:20,color:'white'}}>+</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};

export default LichTrinhs;

const styles = StyleSheet.create({
    avarta: {
        width: 44,
        height: 44,
        borderRadius: 44,
        borderWidth: 1,
    },
    headerItem: {
        flexDirection: 'row',
        marginHorizontal: 16
    },
    imageBtn: {
        width: 24,
        height: 24,
    },
    btnAdd: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor:colors.primary_500,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 120,
        right: 24,
    },
    imageItem: {
        marginHorizontal:18,
        width: '90%',
        borderRadius:6,
        height: 175,
        resizeMode:'cover',
        marginVertical: 16
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFF',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        marginBottom: 16,
        paddingVertical: 16,
    },
    container: {
        paddingHorizontal: 16,
        flex: 1,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

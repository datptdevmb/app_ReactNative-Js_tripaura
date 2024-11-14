import React, { useEffect } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import Header from "../../../components/common/header/Header";
import { useSelector, useDispatch } from "react-redux";
import { LayDanhSachVoucher } from "../../../redux/slices/vouchersSlice";

const ListVoucherScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const { getVoucherData } = useSelector((state) => state.reducer.vouchers);
    const { user } = useSelector((state) => state.reducer.auth);
    const userId = user?.user?._id;

    useEffect(() => {
        // Fetch vouchers when the component mounts
        if (userId) {
            dispatch(LayDanhSachVoucher(userId));
        }
    }, [userId, dispatch]);

    const handleBack = () => {
        navigation.goBack();
    };
    console.log(getVoucherData)

    // Render each voucher item
    const renderVoucherItem = ({ item }) => {
        return (
            <View style={styles.voucherItem}>
                <Text style={styles.voucherTitle}>{item.name}</Text>
                <Text>{item.description}</Text>
                <Text style={styles.voucherValue}>{`Giảm giá: ${item.discount}%`}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Header onBackPress={handleBack} title={"Khuyến mãi hiện có"} />
            {getVoucherData? (
                <FlatList
                    data={getVoucherData}
                    renderItem={renderVoucherItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            ) : (
                <View style={styles.noVouchers}>
                    <Text style={styles.noVouchersText}>Không có khuyến mãi hiện có</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    voucherItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    voucherTitle: {
        fontSize: 16,
        fontWeight: "bold",
    },
    voucherValue: {
        fontSize: 14,
        color: "#DA712F",
        marginTop: 5,
    },
    noVouchers: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    noVouchersText: {
        fontSize: 16,
        color: "#999",
    },
});

export default ListVoucherScreen;

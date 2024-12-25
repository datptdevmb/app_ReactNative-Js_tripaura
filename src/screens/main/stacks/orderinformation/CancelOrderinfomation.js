import { StyleSheet, Text, View, TouchableOpacity, Alert, ScrollView, Modal, TextInput } from 'react-native';
import React, { useState } from 'react';
import Header from '../../../../components/common/header/Header';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Headercomponet from '../../../../components/common/header/Headercomponet';
import { addCancelOrder } from '../../../../redux/slices/cancelorderSlice';

const CancelOrderinfomation = ({ route }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [isShowModal, setisShowModal] = useState(false);
    const [name, setName] = useState('');
    const [bankName, setBankName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [cancellationReason, setCancellationReason] = useState('');
    const bookingData = useSelector((state) => state.reducer.booking);
    const booking = bookingData.bookingData.data;
    console.log('booking', booking);

    const bookingId = booking._id;
    const formattedDate = new Date(booking.detailInfo.endDay).toLocaleDateString('vi-VN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });

    console.log('formatdata', formattedDate);

    const bookingEndDate = new Date(booking.detailInfo.endDay);
    const currentDate = new Date();  
    const isDateInPast = bookingEndDate < currentDate;

    const handleCancelPress = () => {
        if (isDateInPast) {
            Alert.alert("Không thể hủy", "Đơn hàng đã hết hạn, bạn không thể hủy.");
            return;  
        }

        Alert.alert(
            "Xác nhận hủy đơn hàng",
            "Bạn chắc chắn muốn hủy đơn hàng?",
            [
                {
                    text: "Hủy",
                    style: "cancel"
                },
                {
                    text: "Đồng ý",
                    onPress: () => {
                        const cancelData = {
                            name,
                            bankname: bankName,
                            accountnumber: accountNumber,
                            email,
                            phone,
                            cancellationreason: cancellationReason,
                            bookingId,
                        };
                        console.log(cancelData);
                        dispatch(addCancelOrder(cancelData));
                        Alert.alert('Thông báo', 'Đơn hàng đang chờ xét duyệt!');
                        navigation.navigate('MainTabNavigation');
                    }
                }
            ]
        );
    };

    return (
        <View style={styles.container}>
            <Header title='Điều khoản hủy tour' />
            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Điều khoản hủy tour</Text>
                <Text style={styles.text}>
                    • Nếu bạn quyết định hủy tour trong vòng trước ngày tôi đi 7 ngày, chúng tôi cam kết hoàn lại 100% số tiền đã thanh toán. Điều này nhằm tạo sự linh hoạt và thuận tiện tối đa cho bạn khi có thay đổi đột xuất trong kế hoạch du lịch.
                </Text>
                <Text style={styles.text}>
                    • Số tiền hoàn lại sẽ được xử lý và hoàn tất trong vòng 24 giờ kể từ thời điểm hủy. Chúng tôi sẽ thông báo qua email hoặc số điện thoại ngay khi thủ tục hoàn tiền hoàn tất.
                </Text>
                <Text style={styles.text}>
                    • Nếu bạn có bất kỳ câu hỏi nào liên quan đến chính sách này hoặc cần hỗ trợ, đừng ngần ngại liên hệ với chúng tôi. Chúng tôi sẵn sàng đồng hành và hỗ trợ bạn tìm giải pháp phù hợp nhất.
                </Text>
                <Text style={styles.text}>
                    • Xin cảm ơn bạn đã lựa chọn dịch vụ của chúng tôi. Chúng tôi mong muốn được phục vụ bạn trong những chuyến du lịch tiếp theo!
                </Text>
                <TouchableOpacity style={styles.button} onPress={() => setisShowModal(true)}>
                    <Text style={styles.buttonText}>Hủy đơn hàng</Text>
                </TouchableOpacity>
            </ScrollView>

            <Modal
                transparent={true}
                visible={isShowModal}
                animationType="fade"
                onRequestClose={() => setisShowModal(false)}
            >
                <View style={{ justifyContent: 'flex-end', backgroundColor: 'rgba(0, 0, 0, 0.5)', flex: 1 }}>
                    <View style={{
                        height: 550, backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 20
                    }}>
                        <Headercomponet
                            leftIcon={require('../../../../assets/images/close.png')}
                            title={"Hủy tour"}
                            onPressLeftIcon={() => { setisShowModal(false); }}
                        />
                        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Nhập thông tin hủy đơn hàng</Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Họ và tên"
                            value={name}
                            onChangeText={setName}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Tên ngân hàng"
                            value={bankName}
                            onChangeText={setBankName}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Số tài khoản"
                            value={accountNumber}
                            onChangeText={setAccountNumber}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            keyboardType="email-address"
                            value={email}
                            onChangeText={setEmail}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Phone"
                            keyboardType="phone-pad"
                            value={phone}
                            onChangeText={setPhone}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Lý do hủy"
                            value={cancellationReason}
                            onChangeText={setCancellationReason}
                        />
                        <TouchableOpacity style={styles.button} onPress={handleCancelPress}>
                            <Text style={styles.buttonText}>Xác nhận hủy</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default CancelOrderinfomation;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0F4F8',
        flex: 1,
    },
    content: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#2C3E50',
        textAlign: 'center',
    },
    text: {
        fontSize: 16,
        marginBottom: 15,
        color: '#34495E',
        lineHeight: 24,
        textAlign: 'justify',
    },
    button: {
        backgroundColor: '#E74C3C',
        paddingVertical: 12,
        borderRadius: 10,
        elevation: 3,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
        width: '100%',
    },
});

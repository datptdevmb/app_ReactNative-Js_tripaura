import { Image, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const SettingLoggedScreen = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.avatarContainer}>
                    <Image source={require('../../../assets/images/h1.png')} />
                    <TouchableOpacity style={styles.icCameraContainer}>
                        <Image source={require('../../../assets/images/icCamera.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.txtNameContainer}>
                    <Text style={styles.txtName}>Name</Text>
                    <TouchableOpacity style={styles.btnCapNhaHoSo}>
                        <Text style={styles.txtLable}>Cập nhật hồ sơ</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.iconNextContainer}>
                    <Image
                        style={styles.iconNext}
                        source={require('../../../assets/images/iconNext.png')} />
                </TouchableOpacity>
            </View>

            <View style={styles.btnHorizontalContainer}>
                <View >
                    <TouchableOpacity style={styles.btnCauHoiContainer}>
                        <View style={styles.imageTroGiupContainer}>
                            <Image
                                style={styles.imageTroGiup}
                                source={require('../../../assets/images/cauHoi.png')} />
                        </View>
                        <Text style={styles.txtTroGiup}>Địa điểm đã đi</Text>
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity style={styles.btnCauHoiContainer}>
                        <View style={styles.imageTroGiupContainer}>
                            <Image
                                style={styles.imageTroGiup}
                                source={require('../../../assets/images/cauHoi.png')} />
                        </View>
                        <Text style={styles.txtTroGiup}>Câu hỏi thường gặp</Text>
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity style={styles.btnCauHoiContainer}>
                        <View style={styles.imageTroGiupContainer}>
                            <Image
                                style={styles.imageTroGiup}
                                source={require('../../../assets/images/cauHoi.png')} />
                        </View>
                        <Text style={styles.txtTroGiup}>Thay đổi mật khẩu</Text>
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity style={styles.btnCauHoiContainer}>
                        <View style={styles.imageTroGiupContainer}>
                            <Image
                                style={styles.imageTroGiup}
                                source={require('../../../assets/images/cauHoi.png')} />
                        </View>
                        <Text style={styles.txtTroGiup}>Đơn hàng của tôi</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.underline} />

            <View style={styles.thongBaoContainer}>
                <View style={styles.btnContainer}>
                    <Image style={styles.imageBtn}
                        source={require('../../../assets/images/dkdv.png')} />
                    <Text style={styles.txtDieuKhoan}>Điều khoản sử dụng dịch vụ</Text>
                    <View style={styles.lefticon}>
                        <Switch
                            trackColor={{ false: '#767577', true: '#0572E7' }}
                            thumbColor={isEnabled ? '#FFFFFF' : '#FFFFFF'}
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.SangToiContainer}>
                <View style={styles.btnContainer}>
                    <Image style={styles.imageBtn}
                        source={require('../../../assets/images/dkdv.png')} />
                    <Text style={styles.txtDieuKhoan}>Chế độ tối</Text>
                    <View style={styles.lefticon}>
                        <Switch
                            trackColor={{ false: '#767577', true: '#0572E7' }}
                            thumbColor={isEnabled ? '#FFFFFF' : '#FFFFFF'}
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                </View>
            </View>

            <View style={styles.language}>
                <TouchableOpacity>
                    <View style={styles.btnContainer}>
                        <Image style={styles.imageBtn}
                            source={require('../../../assets/images/dkdv.png')} />
                        <Text style={styles.txtDieuKhoan}>Chế độ tối</Text>
                        <View style={styles.lefticon}>
                            <Text>VN</Text>
                            <Image style={styles.btnNext}
                                source={require('../../../assets/images/iconNext.png')} />
                        </View>
                    </View>
                </TouchableOpacity>

            </View>
            <View style={styles.language}>
                <TouchableOpacity>
                    <View style={styles.btnContainer}>
                        <Image style={styles.imageBtn}
                            source={require('../../../assets/images/dkdv.png')} />
                        <Text style={styles.txtDieuKhoan}>Tiền tệ</Text>
                        <View style={styles.lefticon}>
                            <Text>VND</Text>
                            <Image style={styles.btnNext}
                                source={require('../../../assets/images/iconNext.png')} />
                        </View>
                    </View>
                </TouchableOpacity>

            </View>

            <View style={styles.underline} />

            <View style={styles.language}>
                <TouchableOpacity>
                    <View style={styles.btnContainer}>
                        <Image style={styles.imageBtn}
                            source={require('../../../assets/images/dkdv.png')} />
                        <Text style={styles.txtDieuKhoan}>Đăng xuất</Text>
                        <View style={styles.lefticon}>
                            <Image style={styles.btnNext}
                                source={require('../../../assets/images/iconNext.png')} />
                        </View>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default SettingLoggedScreen

const styles = StyleSheet.create({
    btnNext: {
        width: 12,
        height: 24,
        marginLeft: 10
    },
    lefticon: {
        width: 50,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    SangToiContainer: {
        marginTop: 10
    },
    thongBaoContainer: {
        marginTop: 34
    },
    txtDieuKhoan: {
        width: 230,
        fontFamily: 'Lato',
        color: '#212121',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24
    },
    btnContainer: {
        width: 350,
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    underline: {
        width: 350,
        height: 1,
        backgroundColor: '#B3B3B3CC',
        marginTop: 16,
    },
    btnCauHoiContainer: {
        width: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtTroGiup: {
        height: 34,
        fontFamily: 'Lato',
        color: '#212121',
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'center'
    },
    imageTroGiup: {
        width: 24,
        height: 24
    },
    imageTroGiupContainer: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0572E70D',
        borderRadius: 8
    },
    btnHorizontalContainer: {
        width: 350,
        flexDirection: 'row',
        marginTop: 38,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    iconNextContainer: {
        width: 28,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconNext: {
        width: 18,
        height: 18
    },
    btnCapNhaHoSo: {
        width: 100,
        height: 24,
        justifyContent: 'center'
    },
    txtName: {
        fontFamily: 'Lato',
        fontSize: 18,
        fontWeight: '700',
        lineHeight: 27,
        color: '#000000'
    },
    txtLable: {
        fontFamily: 'Lato',
        fontSize: 14,
        fontWeight: '400',
        color: '#0572E7'
    },
    txtNameContainer: {
        width: 200,
    },
    avatarContainer: {
        width: 65,
        height: 65,
        borderRadius: 50
    },
    headerContainer: {
        width: 350,
        height: 70,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    icCameraContainer: {
        width: 28,
        height: 28,
        backgroundColor: '#0572E7',
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 0,
        bottom: 0
    },
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    }
})
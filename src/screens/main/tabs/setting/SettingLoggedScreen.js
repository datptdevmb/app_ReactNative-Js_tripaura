import React, { useState } from 'react';
import { Image, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import stylesglobal from '../../../../constants/global';
import Icons from '../../../../constants/Icons';
import { useSelector } from 'react-redux';
import colors from '../../../../constants/colors';

const SettingLoggedScreen = ({ navigation }) => {
    const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
    const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);

    const { user } = useSelector((state) => state.reducer.auth);

    // Toggle functions
    const toggleDarkMode = () => setIsDarkModeEnabled((prev) => !prev);
    const toggleNotification = () => setIsNotificationEnabled((prev) => !prev);

    return (
        <View style={stylesglobal.container}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <View style={styles.avatarContainer}>
                    <Image
                        style={styles.avatar}
                        source={user?.avatar ? { uri: user.avatar } : Icons.avatar}
                    />
                    <TouchableOpacity style={styles.icCameraContainer}>
                        <Image source={Icons.ic_camera} />
                    </TouchableOpacity>
                </View>
                <View style={styles.txtNameContainer}>
                    <Text style={styles.txtName}>{user?.fullname || 'Người dùng'}</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('EditProfileScreen')}
                        style={styles.btnUpdateProfile}>
                        <Text style={styles.txtUpdateProfile}>Cập nhật hồ sơ</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('ProfileScreen')}
                    style={styles.iconNextContainer}>
                    <Image style={styles.iconNext} source={Icons.ic_arrowright} />
                </TouchableOpacity>
            </View>

            {/* Shortcut Buttons */}
            <View style={styles.btnHorizontalContainer}>
                {[
                    { icon: Icons.ic_map, label: 'Địa điểm đã đi' },
                    { icon: Icons.ic_message, label: 'Câu hỏi thường gặp' },
                    { icon: Icons.ic_lock, label: 'Thay đổi mật khẩu' },
                    { icon: Icons.ic_orther, label: 'Đơn hàng của tôi' },
                ].map((item, index) => (
                    <TouchableOpacity key={index} style={styles.btnCauHoiContainer}>
                        <View style={styles.imageTroGiupContainer}>
                            <Image style={styles.imageTroGiup} source={item.icon} />
                        </View>
                        <Text style={styles.txtTroGiup}>{item.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.underline} />

            {/* Notifications */}
            <View style={styles.settingItem}>
                <Image style={styles.settingIcon} source={Icons.ic_bell} />
                <Text style={styles.settingText}>Điều khoản sử dụng dịch vụ</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#0572E7' }}
                    thumbColor="#FFFFFF"
                    onValueChange={toggleNotification}
                    value={isNotificationEnabled}
                />
            </View>

            {/* Dark Mode */}
            <View style={styles.settingItem}>
                <Image style={styles.settingIcon} source={Icons.ic_moon} />
                <Text style={styles.settingText}>Chế độ tối</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#0572E7' }}
                    thumbColor="#FFFFFF"
                    onValueChange={toggleDarkMode}
                    value={isDarkModeEnabled}
                />
            </View>

            {/* Language */}
            <View style={styles.settingItem}>
                <Image style={styles.settingIcon} source={Icons.ic_earth} />
                <Text style={styles.settingText}>Ngôn ngữ</Text>
                <View style={styles.settingRight}>
                    <Text>VN</Text>
                    <Image style={styles.iconNext} source={Icons.ic_arrowbottom} />
                </View>
            </View>

            {/* Currency */}
            <View style={styles.settingItem}>
                <Image style={styles.settingIcon} source={Icons.ic_mony} />
                <Text style={styles.settingText}>Tiền tệ</Text>
                <View style={styles.settingRight}>
                    <Text>VND</Text>
                    <Image style={styles.iconNext} source={Icons.ic_arrowbottom} />
                </View>
            </View>

            <View style={styles.underline} />

            {/* Logout */}
            <TouchableOpacity
                onPress={() => navigation.navigate('LoginRegisterScreen')}
                style={styles.settingItem}>
                <Image style={styles.settingIcon} source={Icons.ic_lockout} />
                <Text style={styles.settingText}>Đăng xuất</Text>
                <Image style={styles.iconNext} source={Icons.ic_arrowright} />
            </TouchableOpacity>
        </View>
    );
};

export default SettingLoggedScreen;

const styles = StyleSheet.create({
    avatar: {
        width: 65,
        height: 65,
        borderRadius: 32.5,
    },
    avatarContainer: {
        position: 'relative',
    },
    icCameraContainer: {
        width: 28,
        height: 28,
        backgroundColor: colors.primary_500,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    txtName: {
        fontSize: 18,
        fontWeight: '700',
        color: '#000',
    },
    btnUpdateProfile: {
        marginTop: 4,
    },
    txtUpdateProfile: {
        fontSize: 14,
        color: colors.primary_500,
    },
    iconNextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconNext: {
        width: 18,
        height: 18,
    },
    btnHorizontalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    btnCauHoiContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageTroGiupContainer: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0572E70D',
        borderRadius: 8,
    },
    imageTroGiup: {
        width: 24,
        height: 24,
    },
    txtTroGiup: {
        fontSize: 14,
        marginTop: 6,
        textAlign: 'center',
    },
    underline: {
        height: 1,
        backgroundColor: '#B3B3B3CC',
        marginVertical: 16,
    },
    settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    settingIcon: {
        width: 24,
        height: 24,
    },
    settingText: {
        flex: 1,
        fontSize: 16,
        marginLeft: 10,
    },
    settingRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

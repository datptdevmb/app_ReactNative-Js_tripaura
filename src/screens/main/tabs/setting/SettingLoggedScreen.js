import { Alert, Image, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import stylesglobal from '../../../../constants/global';
import Icons from '../../../../constants/Icons';
import { AppContext } from '../../../AppContext';
import colors from '../../../../constants/colors';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { ThayDoiThongTin } from '../../../../redux/slices/ChangeUserSlice';

const SettingLoggedScreen = (props) => {

    const { navigation } = props;
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabledchdo, setIsEnabledchedo] = useState(false);
    const [image, setImage] = useState(null);

    const { user } = useContext(AppContext);
    console.log('user', user)

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitchchedo = () => setIsEnabledchedo(previousState => !previousState);

    const commonOptions = {
        mediaType: 'photo',
        maxWidth: 100,
        maxHeight: 100,
    };

    const cameraOptions = {
        cameraType: 'front',
        saveToPhotos: true,
        ...commonOptions,
    };

    const imageOptions = {
        selectionLimit: 1,
        ...commonOptions,
    };

    const openImagePicker = async () => {
        const response = await launchImageLibrary(imageOptions);
        if (response?.assets?.[0]?.uri) {
            console.log('Image URI:', response.assets[0].uri);
            setImage(response.assets[0].uri);
            handleUpdate(response.assets[0]);
        } else {
            console.log('User cancelled image picker');
            setImage(null);
        }
    };

    const openCamere = async () => {
        const response = await launchCamera(cameraOptions);
        if (response?.assets?.[0]?.uri) {
            console.log('Image URI:', response.assets[0].uri);
            setImage(response.assets[0].uri);
            handleUpdate(response.assets[0]);
        } else if (response.didCancel) {
            Alert.alert('Camera Canceled', 'Bạn đã hủy trình chọn camera.');
            setImage(null);
        } else {
            console.log('Lỗi không xác định', response);
            Alert.alert('Lỗi', 'Một lỗi không xác định đã xảy ra khi truy cập camera.');
        }
    };


    const handleUpdate = async (image) => {
        const data = new FormData();
        data.append('file', {
            uri: image.uri,
            type: image.type || 'image/jpeg',
            name: `photo.${image.uri.split('.').pop()}`,
        });
        data.append('upload_preset', 'TripAuraAPI');
        data.append('api_key', '976765598717887');
    
        try {
            const response = await fetch(`https://api.cloudinary.com/v1_1/dtoazwcfd/upload`, {
                method: 'POST',
                body: data,
            });
    
            const result = await response.json();
            if (response.ok) {
                console.log('Upload successful:', result);
                const imageUrl = result.secure_url;
                const userUpdateData = {
                    ...user,
                    avatar: imageUrl, 
                };
                console.log('Uploading successful, updating user data:', userUpdateData);
                await ThayDoiThongTin(userUpdateData); // Gọi action để cập nhật thông tin người dùng
            } else {
                console.log('Upload failed:', result);
                Alert.alert('Error', 'Failed to upload image');
            }
        } catch (error) {
            console.log('Error uploading image:', error);
            Alert.alert('Error', 'An error occurred while uploading the image');
        }
    };
    


    return (
        <View style={stylesglobal.container}>
            <View style={styles.headerContainer}>
                <View style={styles.avatarContainer}>
                    <TouchableOpacity onPress={openImagePicker}>
                        <Image
                            source={user && user.avatar ? { uri: user.avatar } : Icons.avatar}
                            style={styles.imageAvatar}
                        />

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.icCameraContainer} onPress={openCamere}>
                        <Image source={Icons.ic_camera} />
                    </TouchableOpacity>
                </View>
                <View style={styles.txtNameContainer}>
                    <Text style={styles.txtName}>{user && user.fullname ? user.fullname : 'Nguyễn Văn A'}</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('EditProfileScreen')}
                        style={styles.btnCapNhaHoSo}>
                        <Text style={styles.txtLable}>Cập nhật hồ sơ</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('ProfileScreen')}
                    style={styles.iconNextContainer}>
                    <Image
                        style={styles.iconNext}
                        source={Icons.ic_arrowright} />
                </TouchableOpacity>
            </View>

            <View style={styles.btnHorizontalContainer}>
                <View >
                    <TouchableOpacity style={styles.btnCauHoiContainer}>
                        <View style={styles.imageTroGiupContainer}>
                            <Image
                                style={styles.imageTroGiup}
                                source={Icons.ic_map} />
                        </View>
                        <Text style={styles.txtTroGiup}>Địa điểm đã đi</Text>
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity style={styles.btnCauHoiContainer}>
                        <View style={styles.imageTroGiupContainer}>
                            <Image
                                style={styles.imageTroGiup}
                                source={Icons.ic_message} />
                        </View>
                        <Text style={styles.txtTroGiup}>Câu hỏi thường gặp</Text>
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity style={styles.btnCauHoiContainer}>
                        <View style={styles.imageTroGiupContainer}>
                            <Image
                                style={styles.imageTroGiup}
                                source={Icons.ic_lock} />
                        </View>
                        <Text style={styles.txtTroGiup}>Thay đổi mật khẩu</Text>
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity style={styles.btnCauHoiContainer}>
                        <View style={styles.imageTroGiupContainer}>
                            <Image
                                style={styles.imageTroGiup}
                                source={Icons.ic_orther} />
                        </View>
                        <Text style={styles.txtTroGiup}>Đơn hàng của tôi</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.underline} />

            <View style={styles.thongBaoContainer}>
                <View style={styles.btnContainer}>
                    <Image style={styles.imageBtn}
                        source={Icons.ic_bell} />
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
                        source={Icons.ic_moon} />
                    <Text style={styles.txtDieuKhoan}>Chế độ tối</Text>
                    <View style={styles.lefticon}>
                        <Switch
                            trackColor={{ false: '#767577', true: '#0572E7' }}
                            thumbColor={isEnabledchdo ? '#FFFFFF' : '#FFFFFF'}
                            onValueChange={toggleSwitchchedo}
                            value={isEnabledchdo}
                        />
                    </View>
                </View>
            </View>

            <View style={styles.language}>
                <TouchableOpacity>
                    <View style={styles.btnContainer}>
                        <Image style={styles.imageBtn}
                            source={Icons.ic_earth} />
                        <Text style={styles.txtDieuKhoan}>Chế độ tối</Text>
                        <View style={styles.lefticon}>
                            <Text>VN</Text>
                            <Image style={styles.btnNext}
                                source={Icons.ic_arrowbottom} />
                        </View>
                    </View>
                </TouchableOpacity>

            </View>
            <View style={styles.language}>
                <TouchableOpacity>
                    <View style={styles.btnContainer}>
                        <Image style={styles.imageBtn}
                            source={Icons.ic_mony} />
                        <Text style={styles.txtDieuKhoan}>Tiền tệ</Text>
                        <View style={styles.lefticon}>
                            <Text>VND</Text>
                            <Image style={styles.btnNext}
                                source={Icons.ic_arrowbottom} />
                        </View>
                    </View>
                </TouchableOpacity>

            </View>

            <View style={styles.underline} />

            <View style={styles.language}>
                <TouchableOpacity onPress={() => navigation.navigate('LoginRegisterScreen')} >
                    <View style={styles.btnContainer}>
                        <Image style={styles.imageBtn}
                            source={Icons.ic_lockout} />
                        <Text style={styles.txtDieuKhoan}>Đăng xuất</Text>
                        <View style={styles.lefticon}>
                            <Image style={styles.btnNext}
                                source={Icons.ic_arrowright} />
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
        color: colors.Grey_900,
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24
    },
    btnContainer: {
        width: '100%',
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    underline: {
        width: '100%',
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
        width: '100%',
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
        color: colors.primary_500
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
        width: '100%',
        height: 70,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    icCameraContainer: {
        width: 28,
        height: 28,
        backgroundColor: colors.primary_500,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 0,
        bottom: 0
    },
    imageAvatar: {
        width: 65,
        height: 65,
        borderRadius: 50,
        resizeMode: 'cover'
    }
})
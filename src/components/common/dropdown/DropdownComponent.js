import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchLocations,
    selectProvinces,
    selectDistricts,
    selectLoading,
    setDistricts,
} from './../../../api/reducers';
import FONTSIZE from '../../../constants/fontsize';
import colors from '../../../constants/colors';

const DropdownComponent = () => {
    const dispatch = useDispatch();
    const provincesData = useSelector(selectProvinces);
    const districts = useSelector(selectDistricts);
    const loading = useSelector(selectLoading);

    const provinces = provincesData.data || [];
    const [selectedProvince, setSelectedProvince] = useState(null);
    const [selectedDistrict, setSelectedDistrict] = useState(null);

    useEffect(() => {
        dispatch(fetchLocations());
    }, [dispatch]);

    const handleProvinceChange = (provinceId) => {
        const selectedProvince = provinces.find((p) => p.id === provinceId);

        if (selectedProvince) {
            dispatch(setDistricts(selectedProvince.data2));
            setSelectedProvince(provinceId);
            setSelectedDistrict(null);
        } else {
            setSelectedProvince(null);
        }
    };

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <>
                    <View style={styles.containerpicker}>
                        <View style={styles.contentchon}>
                            <Text style={styles.text}>Chọn Tỉnh</Text>
                            <Picker
                                style={styles.picker}
                                selectedValue={selectedProvince || null}
                                onValueChange={handleProvinceChange}
                            >
                                <Picker.Item label="Chọn tỉnh" value={null} />
                                {provinces.map((province) => (
                                    <Picker.Item
                                        key={province.id}
                                        label={province.name}
                                        value={province.id}
                                    />
                                ))}
                            </Picker>
                        </View>

                        <View style={styles.contentchon}>
                            <Text style={styles.text} >Chọn Huyện</Text>
                            <Picker
                                style={styles.picker}
                                selectedValue={selectedDistrict || null}
                                onValueChange={(districtId) => setSelectedDistrict(districtId)}
                            >
                                <Picker.Item label="Chọn huyện" value={null} />
                                {Array.isArray(districts) && districts.length > 0 ? (
                                    districts.map((district) => (
                                        <Picker.Item
                                            key={district.id}
                                            label={district.name}
                                            value={district.id}
                                        />
                                    ))
                                ) : (
                                    <Picker.Item label="Không có huyện nào" value={null} />
                                )}
                            </Picker>
                        </View>

                    </View>

                </>
            )}
        </View>
    );
};

export default DropdownComponent;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    containerpicker: {
        display: 'flex',
        flexDirection: 'row'
    },
    contentchon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginStart: 19,
    },
    picker: {
        display: 'flex',
        width: 159,
        height: 44,
        paddingVertical: 11,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f2f2f2'
    },
    text: {
        fontSize: FONTSIZE.sm,
        fontWeight: '700',
        fontFamily: 'Lato',
        color: colors.Gray_800,
        marginBottom: 5,
    },

});
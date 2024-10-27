import React, { useEffect } from 'react';
import { View, Text, Alert, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProvinces } from './../../../redux/slices/cityprovince';
import { fetchDistricts } from './../../../redux/slices/district';
import stylesdown from './dropdownstyle';

const DropdownComponent = ({ selectedProvince, selectedDistrict, onProvinceSelect, onDistrictSelect }) => {
    const dispatch = useDispatch();
    const { provinces, loading: provincesLoading, error: provincesError } = useSelector((state) => state.reducer.provinces);
    const { districts = [], loading: districtsLoading, error: districtsError } = useSelector((state) => state.reducer.district);

    useEffect(() => {
        dispatch(fetchProvinces());
    }, [dispatch]);

    useEffect(() => {
        if (selectedProvince) {
            dispatch(fetchDistricts(selectedProvince));
        }
    }, [selectedProvince, dispatch]);

    const handleProvinceChange = (value) => {
        onProvinceSelect(value);
    };

    const handleDistrictChange = (value) => {
        onDistrictSelect(value);
    };

    if (provincesLoading || districtsLoading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (provincesError || districtsError) {
        Alert.alert("Error", provincesError || districtsError);
    }

    const provinceItems = provinces.map(({ name, code }) => ({ label: name, value: code }));
    const filteredDistricts = districts
        .filter(district => district.province_code === selectedProvince)
        .map(district => ({ label: district.name, value: district.code }));

    return (
        <View style={stylesdown.container}>
            <View style={stylesdown.containerpicker}>
                <Dropdown
                    label="Chọn tỉnh"
                    selectedValue={selectedProvince}
                    onValueChange={handleProvinceChange}
                    items={provinceItems}
                    style={stylesdown.dropdown}
                />
                <Dropdown
                    label="Chọn huyện"
                    selectedValue={selectedDistrict}
                    onValueChange={handleDistrictChange}
                    items={filteredDistricts}
                    enabled={!!selectedProvince}
                    style={stylesdown.dropdown}
                />
            </View>
        </View>
    );
};

const Dropdown = ({ label, selectedValue, onValueChange, items, enabled = true, style }) => (
    <View style={[stylesdown.contentchon, style]}>
        <Text style={stylesdown.text}>{label}:</Text>
        <Picker
            style={stylesdown.picker}
            selectedValue={selectedValue}
            onValueChange={onValueChange}
            enabled={enabled}
        >
            <Picker.Item label={`Chọn ${label.toLowerCase()}`} value={null} />
            {items.length > 0 ? (
                items.map(({ label, value }) => <Picker.Item key={value} label={label} value={value} />)
            ) : (
                <Picker.Item label="Không có dữ liệu" value={null} />
            )}
        </Picker>
    </View>
);

export default DropdownComponent;

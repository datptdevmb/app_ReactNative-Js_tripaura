import React, { useEffect, useState } from 'react';
import { View, Text, Alert, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProvinces } from './../../../redux/slices/cityprovince';
import { fetchDistricts } from './../../../redux/slices/district';
import stylesdown from './dropdownstyle';

const DropdownComponent = ({ selectedProvince: selectedProvinceProp, selectedDistrict: selectedDistrictProp, onProvinceSelect, onDistrictSelect }) => {
    const dispatch = useDispatch();

    const { provinces, loading: provincesLoading, error: provincesError } = useSelector((state) => state.provinces);
    const { districts = [], loading: districtsLoading, error: districtsError } = useSelector((state) => state.district);

    const [selectedProvince, setSelectedProvince] = useState(selectedProvinceProp);
    const [selectedDistrict, setSelectedDistrict] = useState(selectedDistrictProp);

    useEffect(() => {
        dispatch(fetchProvinces());
    }, [dispatch]);

    useEffect(() => {
        if (selectedProvince && selectedProvince !== selectedProvinceProp) {
            dispatch(fetchDistricts(selectedProvince));
        }
    }, [selectedProvince, dispatch, selectedProvinceProp]);

    useEffect(() => {
        if (selectedProvinceProp !== selectedProvince) {
            setSelectedProvince(selectedProvinceProp);
            setSelectedDistrict(null); 
        }
    }, [selectedProvinceProp]);

    useEffect(() => {
        if (selectedDistrictProp !== selectedDistrict) {
            setSelectedDistrict(selectedDistrictProp);
        }
    }, [selectedDistrictProp]);

    const handleProvinceChange = (value) => {
        if (value !== selectedProvince) {
            setSelectedProvince(value);
            setSelectedDistrict(null);
            onProvinceSelect(value);
        }
    };

    const handleDistrictChange = (value) => {
        if (value !== selectedDistrict) {
            setSelectedDistrict(value);
            onDistrictSelect(value);
        }
    };

    const filteredDistricts = selectedProvince
        ? districts.filter(district => district.province_code === selectedProvince)
        : [];

    const items = provinces.map(province => ({ label: province.name, value: province.code }));

    if (provincesLoading || districtsLoading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (provincesError || districtsError) {
        Alert.alert("Lỗi", provincesError || districtsError);
    }

    return (
        <View style={stylesdown.container}>
            <View style={stylesdown.containerpicker}>
                <Dropdown
                    label="Chọn tỉnh"
                    selectedValue={selectedProvince}
                    onValueChange={handleProvinceChange}
                    items={items}
                    style={stylesdown.dropdown}
                />
                <Dropdown
                    label="Chọn huyện"
                    selectedValue={selectedDistrict}
                    onValueChange={handleDistrictChange}
                    items={filteredDistricts.map(district => ({ label: district.name, value: district.code }))}
                    enabled={!!selectedProvince}
                    style={stylesdown.dropdown}
                />
            </View>
        </View>
    );
};

const Dropdown = ({ label, selectedValue, onValueChange, items, enabled, style }) => (
    <View style={[stylesdown.contentchon, style]}>
        <Text style={stylesdown.text}>{label}:</Text>
        <Picker
            style={stylesdown.picker}
            selectedValue={selectedValue}
            onValueChange={onValueChange}
            enabled={enabled}
        >
            <Picker.Item label={`Chọn ${label.toLowerCase()}`} value={null} />
            {items.map((item) => (
                <Picker.Item key={item.value} label={item.label} value={item.value} />
            ))}
        </Picker>
    </View>
);

export default DropdownComponent;

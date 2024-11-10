import React, { useEffect, useState } from 'react';
import { View, Text, Alert, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProvinces } from './../../../redux/slices/cityprovince';
import { fetchDistricts } from './../../../redux/slices/district';
import stylesdown from './dropdownstyle';

const DropdownComponent = ({ selectedProvince = null, selectedDistrict = null, onProvinceSelect, onDistrictSelect }) => {
    const dispatch = useDispatch();
    const provinces = useSelector((state) => state.reducer.provinces.provinces);
    const provincesLoading = useSelector((state) => state.reducer.provinces.loading);
    const provincesError = useSelector((state) => state.reducer.provinces.error);

    const districts = useSelector((state) => state.reducer.district.districts) || [];
    const districtsLoading = useSelector((state) => state.reducer.district.loading);
    const districtsError = useSelector((state) => state.reducer.district.error);

    const [selectedProvinceState, setSelectedProvince] = useState(selectedProvince);
    const [selectedDistrictState, setSelectedDistrict] = useState(selectedDistrict);

    useEffect(() => {
        dispatch(fetchProvinces());
    }, [dispatch]);

    useEffect(() => {
        if (selectedProvinceState) dispatch(fetchDistricts(selectedProvinceState));
    }, [selectedProvinceState, dispatch]);

    // Synchronize props with state when selectedProvince prop changes
    useEffect(() => {
        if (selectedProvince !== selectedProvinceState) {
            setSelectedProvince(selectedProvince);
            setSelectedDistrict(null);  // Reset district only if province actually changes
        }
    }, [selectedProvince]);

    useEffect(() => {
        if (selectedDistrict !== selectedDistrictState) {
            setSelectedDistrict(selectedDistrict);
        }
    }, [selectedDistrict]);

    const handleProvinceChange = (value) => {
        if (value !== selectedProvinceState) {
            setSelectedProvince(value);
            setSelectedDistrict(null);  // Reset district when changing province
            onProvinceSelect(value);
        }
    };

    const handleDistrictChange = (value) => {
        setSelectedDistrict(value);
        onDistrictSelect(value);
    };

    if (provincesLoading || districtsLoading) return <ActivityIndicator size="large" color="#0000ff" />;
    if (provincesError || districtsError) Alert.alert("Lỗi", provincesError || districtsError);

    const provinceItems = provinces.map(({ name, code }) => ({ label: name, value: code }));
    const filteredDistricts = districts
        .filter(district => district.province_code === selectedProvinceState)
        .map(district => ({ label: district.name, value: district.code }));

    return (
        <View style={stylesdown.container}>
            <View style={stylesdown.containerpicker}>
                <Dropdown label="Chọn tỉnh" selectedValue={selectedProvinceState} onValueChange={handleProvinceChange} items={provinceItems} style={stylesdown.dropdown} />
                <Dropdown label="Chọn huyện" selectedValue={selectedDistrictState} onValueChange={handleDistrictChange} items={filteredDistricts} enabled={!!selectedProvinceState} style={stylesdown.dropdown} />
            </View>
        </View>
    );
};

const Dropdown = ({ label, selectedValue, onValueChange, items, enabled = true, style }) => (
    <View style={[stylesdown.contentchon, style]}>
        <Text style={stylesdown.text}>{label}:</Text>
        <Picker style={stylesdown.picker} selectedValue={selectedValue} onValueChange={onValueChange} enabled={enabled}>
            <Picker.Item label={`Chọn ${label.toLowerCase()}`} value={null} />
            {items.map(({ label, value }) => <Picker.Item key={value} label={label} value={value} />)}
        </Picker>
    </View>
);

export default DropdownComponent;

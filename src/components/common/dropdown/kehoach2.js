// import React, { useEffect, useState } from 'react';
// import { View, Text, Alert } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProvinces } from './../../../redux/slices/cityprovince';
// import { fetchDistricts } from './../../../redux/slices/district';
// import stylesdown from './dropdownstyle';

// const DropdownComponent = () => {
//     const dispatch = useDispatch();
//     const { provinces } = useSelector((state) => state.provinces);
//     const { districts = [] } = useSelector((state) => state.district);
//     const [selectedProvince, setSelectedProvince] = useState(null);
//     const [selectedDistrict, setSelectedDistrict] = useState(null);

//     useEffect(() => {
//         dispatch(fetchProvinces());
//     }, [dispatch]);

//     useEffect(() => {
//         if (selectedProvince) {
//             dispatch(fetchDistricts(selectedProvince));
//         }
//     }, [selectedProvince, dispatch]);

//     const district = selectedProvince ? districts.filter(district => district.province_code === selectedProvince) : [];

//     const handleProvinceChange = (value) => {
//         setSelectedProvince(value);
//         setSelectedDistrict(null); 
//     };

//     const handleDistrictOpen = () => {
//         if (!selectedProvince) {
//             Alert.alert("Thông báo", "Vui lòng chọn tỉnh trước khi chọn huyện");
//             return

//         }
//     };

//     return (
//         <View style={stylesdown.container}>
//             <View style={stylesdown.containerpicker}>
//                 <View style={stylesdown.contentchon}>
//                     <Text style={stylesdown.text}>Chọn tỉnh:</Text>
//                     <Picker
//                         style={stylesdown.picker}
//                         selectedValue={selectedProvince}
//                         onValueChange={handleProvinceChange}
//                     >
//                         <Picker.Item label="Chọn tỉnh" value={null} />
//                         {provinces.map((province) => (
//                             <Picker.Item
//                                 key={province.code}
//                                 label={province.name}
//                                 value={province.code}
//                             />
//                         ))}
//                     </Picker>
//                 </View>

//                 <View style={[stylesdown.contentchon, { marginStart: 10 }]}>
//                     <Text style={stylesdown.text}>Chọn huyện:</Text>
//                     <Picker
//                         style={stylesdown.picker}
//                         selectedValue={selectedDistrict}
//                         onFocus={handleDistrictOpen}
                 
//                     >
//                         <Picker.Item label="Chọn huyện" value={null}
//                             onFocus={handleDistrictOpen}
//                             enabled={!!selectedProvince}

//                         />
//                         {selectedProvince && district.map((huyen) => (
//                             <Picker.Item
//                                 onFocus={handleDistrictOpen}
//                                 key={huyen.code}
//                                 label={huyen.name}
//                                 value={huyen.code}
//                                 enabled={!!selectedProvince}
//                             />
//                         ))}
//                     </Picker>
//                 </View>
//             </View>
//         </View>
//     );
// };

// export default DropdownComponent;

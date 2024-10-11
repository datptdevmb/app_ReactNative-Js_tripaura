// import React, { useEffect, useState } from 'react';
// import { View, Text, ActivityIndicator, stylesdownheet } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//     fetchLocations,
//     selectProvinces,
//     selectDistricts,
//     setDistricts,
// } from './../../../api/reducers';
// import stylesdown from './dropdownstyle';

// const DropdownComponent = () => {
//     const dispatch = useDispatch();
//     const provincesData = useSelector(selectProvinces);
//     const districts = useSelector(selectDistricts);

//     const provinces = provincesData.data || [];
//     const [selectedProvince, setSelectedProvince] = useState(null);
//     const [selectedDistrict, setSelectedDistrict] = useState(null);

//     useEffect(() => {
//         dispatch(fetchLocations());
//     }, [dispatch]);

//     const handleProvinceChange = (provinceId) => {
//         const selectedProvince = provinces.find((p) => p.id === provinceId);

//         if (selectedProvince) {
//             dispatch(setDistricts(selectedProvince.data2));
//             setSelectedProvince(provinceId);
//             setSelectedDistrict(null);
//         } else {
//             setSelectedProvince(null);
//         }
//     };

//     return (
//         <View style={stylesdown.container}>
//             <View style={stylesdown.containerpicker}>
//                 <View style={stylesdown.contentchon}>
//                     <Text style={stylesdown.text}>Chọn Tỉnh</Text>
//                     <Picker
//                         style={stylesdown.picker}
//                         selectedValue={selectedProvince || null}
//                         onValueChange={handleProvinceChange}
//                     >
//                         <Picker.Item label="Chọn tỉnh" value={null} />
//                         {provinces.map((province) => (
//                             <Picker.Item
//                                 key={province.id}
//                                 label={province.name}
//                                 value={province.id}
//                             />
//                         ))}
//                     </Picker>
//                 </View>
//                 <View style={[stylesdown.contentchon, { marginStart: 19 }]}>
//                     <Text style={stylesdown.text} >Chọn Huyện</Text>
//                     <Picker
//                         style={stylesdown.picker}
//                         selectedValue={selectedDistrict || null}
//                         onValueChange={(districtId) => setSelectedDistrict(districtId)}
//                     >
//                         <Picker.Item label="Chọn huyện" value={null} />
//                         {Array.isArray(districts) && districts.length > 0 ? (
//                             districts.map((district) => (
//                                 <Picker.Item
//                                     key={district.id}
//                                     label={district.name}
//                                     value={district.id}
//                                 />
//                             ))
//                         ) : (
//                             <Picker.Item label="Không có huyện nào" value={null} />
//                         )}
//                     </Picker>
//                 </View>

//             </View>

//         </View>
//     );
// };

// export default DropdownComponent;

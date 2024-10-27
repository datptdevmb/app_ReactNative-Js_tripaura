import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './SreachScreenStyle';
import { useDispatch, useSelector } from 'react-redux';
import { SearchTour } from '../../../../redux/slices/searchTourSlice';
import CustomListView from '../../../../components/common/listViews/CustomListView';
import Icons from '../../../../constants/Icons';

// Dữ liệu mẫu
const DATA = [
  {
    id: '1',
    image: require('../../../../assets/images/image.png'), // Đường dẫn tới hình ảnh sản phẩm
    name: 'Tour khám phá Đà Nẵng',
    price: '1.200.000 VND',
    day: 'Ngày 5/1/2024',
  },
  {
    id: '2',
    image: require('../../../../assets/images/image.png'), // Đường dẫn tới hình ảnh sản phẩm
    name: 'Khám phá Phú Quốc',
    price: '2.500.000 VND',
    day: 'Ngày 10/1/2024',
  },
  {
    id: '3',
    image: require('../../../../assets/images/image.png'), // Đường dẫn tới hình ảnh sản phẩm
    name: 'Chuyến đi đến Nha Trang',
    price: '1.800.000 VND',
    day: 'Ngày 15/1/2024',
  },
  {
    id: '4',
    image: require('../../../../assets/images/image.png'), // Đường dẫn tới hình ảnh sản phẩm
    name: 'Tour tham quan miền Tây',
    price: '900.000 VND',
    day: 'Ngày 20/1/2024',
  },
  // Thêm nhiều sản phẩm hơn nếu cần
];

const SearchScreen = (props) => {
  const { navigation } = props
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const { searchTourData, searchTourStatus } = useSelector((state) => state.reducer.searchTour);

  const onChangeTextSearch = (text) => {
    setSearchText(text)
  }

  const handleClearText = () => {
    setSearchText(''); // Xóa nội dung trong ô tìm kiếm
  };
  const onPressItem = () => {

  }

  useEffect(() => {
    dispatch(SearchTour(searchText))
    console.log("=============== searchTourData", searchTourData.data);

  }, [searchText])



  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
      <Text style={styles.itemDay}>{item.day}</Text>
    </View>
  );

  const renderItemSearch = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={onPressItem}>
        {item.images != undefined && <Image source={{ uri: item.images.linkImage[0] }} style={styles.itemImage} />}

        <Text style={styles.itemName} numberOfLines={2}>{item.tourName}</Text>
        <View style={styles.address}>
          <Image source={Icons.ic_address} />
          <Text style={styles.itemDay}>{item.locations.destination}</Text>
        </View>
        <Text style={styles.itemPrice}>Giá: {item.details.priceAdult}</Text>
      </TouchableOpacity>
    </View>
  );


  return (
    <View style={styles.container}>
      <View style={styles.searchRow}>
        <Image
          source={require('../../../../assets/images/back.png')}
          style={styles.image_back}
        />
        <TextInput
          style={styles.inputSreach}
          placeholder="Tìm kiếm..."
          value={searchText}
          onChangeText={(text) => onChangeTextSearch(text)}
          clearButtonMode="always" // Chỉ hoạt động trên iOS
        />
        <TouchableOpacity onPress={handleClearText}>
          <Image
            source={require('../../../../assets/images/close.png')}
            style={styles.image_clear}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('FiterScreen')}>
          <Image
            source={require('../../../../assets/images/Filter.png')}
            style={styles.image_filter}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {!searchTourData.data ?
          <View>
            <Text style={styles.tile}>Có thể bạn cũng thích</Text>
            <View style={{ marginTop: 20 }}>
              <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2} // Thiết lập số cột
                columnWrapperStyle={styles.row} // Thêm style cho hàng
                scrollEnabled={false}
              />
            </View>
          </View>
          : <View>
            <Text style={styles.tile}>Có tour</Text>
            <View style={{ marginTop: 20 }}>
              <FlatList
                data={searchTourData.data}
                renderItem={renderItemSearch}
                keyExtractor={item => item._id}
                numColumns={2} // Thiết lập số cột
                columnWrapperStyle={styles.row} // Thêm style cho hàng
                scrollEnabled={false}
              />
            </View>
          </View>}


      </ScrollView>






    </View>
  );
};

export default SearchScreen;

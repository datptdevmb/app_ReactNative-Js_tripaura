import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Modal,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './SreachScreenStyle';
import { useDispatch, useSelector } from 'react-redux';
import { SearchTour } from '../../../../redux/slices/searchTourSlice';
import CustomListView from '../../../../components/common/listViews/CustomListView';
import Icons from '../../../../constants/Icons';
import { FilterTour } from '../../../../redux/slices/filterTourSlice';
import Headercomponet from '../../../../components/common/header/Headercomponet';
import FilterScreen from '../../stacks/Filter/FilterScreen';
import ModalFilter from '../../../../components/common/modals/ModalFilter';

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
  const [isShowModal, setisShowModal] = useState(false);
  const dispatch = useDispatch();
  const { filterTourData, filterTourStatus } = useSelector((state) => state.reducer.filterTour);

  const onChangeTextSearch = (text) => {
    setSearchText(text)
  }

  const handleClearText = () => {
    setSearchText(''); // Xóa nội dung trong ô tìm kiếm
  };
  const onPressItem = (_id) => {
    navigation.navigate('Detail', { _id })
  }
  useEffect(() => {
    dispatch(
      FilterTour({
        tourName: searchText
      })
    )
    console.log("====== fiter", filterTourData.data);

  }, [searchText]);



  const renderItemSearch = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() => onPressItem(item._id)}>
        {item.images != undefined && <Image source={{ uri: item.images.linkImage[0] }} style={styles.itemImage} />}

        <Text style={styles.itemName} numberOfLines={2}>{item.tourName}</Text>
        <View style={styles.address}>
          <Image source={Icons.ic_address} />
          <Text style={styles.itemDay}>{item.locations.destination}</Text>
        </View>
        <Text style={styles.itemPrice}>Từ: {formatCurrencyVND(item.details.priceAdult)}</Text>
      </TouchableOpacity>
    </View>
  );


  return (
    <View style={styles.container}>
      <View style={styles.searchRow}>

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
        <TouchableOpacity onPress={() => setisShowModal(true)}>
          <Image
            source={require('../../../../assets/images/Filter.png')}
            style={styles.image_filter}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View>
          {filterTourData.data && <Text style={styles.tile}>{filterTourData.data.length} kết quả</Text>}
          <View style={{ marginTop: 20 }}>
            {filterTourData.data ?
              <FlatList
                data={filterTourData.data}
                renderItem={renderItemSearch}
                keyExtractor={item => item._id}
                scrollEnabled={false}
              />
              : <View></View>
            }

          </View>

        </View>
        <Modal
          transparent={true}
          visible={isShowModal}
          animationType="fade"
          onRequestClose={() => setisShowModal(false)}
        >
          <View style={{ justifyContent: 'flex-end', backgroundColor: 'rgba(0, 0, 0, 0.5)', flex: 1 }}>
            <View style={{
              height: 400,
              backgroundColor: 'white',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              padding: 20,
            }}>
              <View>
                <Headercomponet
                  leftIcon={require('../../../../assets/images/close.png')}
                  title={"Bộ lọc"}
                  onPressLeftIcon={() => { setisShowModal(false) }}></Headercomponet>
                <View style={{ height: 1, backgroundColor: 'black' }}></View>
              </View>

              <ModalFilter searchText={searchText}
                onPressAply={()=>{setisShowModal(false)}}
              />
            </View>

          </View>

        </Modal>
      </ScrollView>
    </View>
  );
};

const formatCurrencyVND = amount => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0,
  }).format(amount);
};

export default SearchScreen;

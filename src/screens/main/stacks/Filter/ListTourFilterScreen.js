import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Headercomponet from '../../../../components/common/header/Headercomponet'
import Icons from '../../../../constants/Icons'
import CustomListView from '../../../../components/common/listViews/CustomListView'
import { useDispatch, useSelector } from 'react-redux';


const ListTourFilterScreen = (props) => {
    const { navigation } = props
    const { filterTourData, filterTourStatus } = useSelector((state) => state.reducer.filterTour);
    console.log("===============================dataaaaaa", filterTourData.data);

    const back = () => {
        
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <Headercomponet
                title={"Danh sách tìm kiếm"}
                leftIcon={Icons.ic_leftarrow}
                onPressLeftIcon={back}
            />
            <CustomListView
                data={filterTourData.data}
                onPressItem={back}
            />
        </View>
    )
}

export default ListTourFilterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})
const DATA = [
    {
        _id: '1',
        image: require('../../../../assets/images/image.png'), // Đường dẫn tới hình ảnh sản phẩm
        name: 'Tour khám phá Đà Nẵng',
        price: '1.200.000 VND',
        day: 'Ngày 5/1/2024',
    },
    {
        _id: '2',
        image: require('../../../../assets/images/image.png'), // Đường dẫn tới hình ảnh sản phẩm
        name: 'Khám phá Phú Quốc',
        price: '2.500.000 VND',
        day: 'Ngày 10/1/2024',
    },
    {
        _id: '3',
        image: require('../../../../assets/images/image.png'), // Đường dẫn tới hình ảnh sản phẩm
        name: 'Chuyến đi đến Nha Trang',
        price: '1.800.000 VND',
        day: 'Ngày 15/1/2024',
    },
    {
        _id: '4',
        image: require('../../../../assets/images/image.png'), // Đường dẫn tới hình ảnh sản phẩm
        name: 'Tour tham quan miền Tây',
        price: '900.000 VND',
        day: 'Ngày 20/1/2024',
    },
    {
        _id: '5',
        image: require('../../../../assets/images/image.png'), // Đường dẫn tới hình ảnh sản phẩm
        name: 'Tour tham quan miền Tây',
        price: '900.000 VND',
        day: 'Ngày 20/1/2024',
    },
    {
        _id: '6',
        image: require('../../../../assets/images/image.png'), // Đường dẫn tới hình ảnh sản phẩm
        name: 'Tour tham quan miền Tây',
        price: '900.000 VND',
        day: 'Ngày 20/1/2024',
    },
    {
        _id: '7',
        image: require('../../../../assets/images/image.png'), // Đường dẫn tới hình ảnh sản phẩm
        name: 'Tour tham quan miền Tây',
        price: '900.000 VND',
        day: 'Ngày 20/1/2024',
    },
    // Thêm nhiều sản phẩm hơn nếu cần
];
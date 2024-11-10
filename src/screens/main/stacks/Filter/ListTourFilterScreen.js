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

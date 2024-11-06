// DepartureInfo.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import InfoRow from './detail/InforRow';
import Lable from '../../../components/common/labelText';
import IcClock from '../../../assets/icons/Ic_clock';
import IcLocate from '../../../assets/icons/Ic_locate';

const DepartureInfo = () => {
    return (
        <View
            style={styles.container}>
            <Lable lable={"Thông tin khởi hành"} />
            <View style={styles.mr}>
                <InfoRow icon={<IcClock />} content={"7:30 - 8h30"} />
                <InfoRow icon={<IcLocate />} content={"Bến xe An Sương"} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 16,
        backgroundColor: 'white'
    },
    mr: {
        marginTop: 8
    }
})
export default DepartureInfo;

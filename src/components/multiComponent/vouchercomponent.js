import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const vouchercomponent = ({data}) => {

    const renderItems = (item ) => {
        return (
            <View style={styles.luuvoucher}>
                <View style={styles.containertext}>
                    <Text style={styles.textvoucher}>Toàn nền tảng</Text>
                </View>
                <View style={styles.containergiamgia}>
                    <Text style={styles.txtgiamgia}>{item.giamgia}</Text>
                    <View style={styles.containerminiorder}>
                        <Text style={styles.textdon}>Đơn tối thiểu</Text>
                        <Text style={styles.textdon}>{item.toithieu}</Text>
                    </View>
                    <TouchableOpacity style={styles.containerbtnvoucher}>
                        <Text style={styles.txtluuma}>Lưu mã</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    return (
        <View style={{flexDirection: 'row'}}>
            {data.map((item) => renderItems(item))}
        </View>
    )
}

export default vouchercomponent

const styles = StyleSheet.create({
    luuvoucher: {
        display: 'flex',
        width: 100,
        height: 100,
        backgroundColor: '#B2D3F8',
        borderRadius: 5,
        marginStart: 7,
    },
    containertext: {
        width: '100%',
        height: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        backgroundColor: '#0568D2',
    },
    textvoucher: {
        fontSize: 10,
        fontFamily: 'Lato',
        fontWeight: '400',
        color: '#FFFFFF',
        textAlign: 'center',
        lineHeight: 20,
    },
    containergiamgia: {
        width: '100%',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtgiamgia: {
        color: '#FF0000',
        textAlign: 'center',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '400',
        marginTop: 2
    },
    containerminiorder: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 3,
    },
    textdon: {
        color: '#8A8A8A',
        textAlign: 'center',
        fontFamily: 'Lato',
        fontSize: 10,
        fontStyle: 'normal',
        fontWeight: '400',
    },
    containerbtnvoucher: {
        display: 'flex',
        width: 70,
        height: 'auto',
        paddingVertical: 4,
        paddingHorizontal: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0568D2',
        borderRadius: 20,
        marginTop: 4,
    },
    txtluuma: {
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Lato',
        fontSize: 10,
        fontStyle: 'normal',
        fontWeight: '700'
    }
})
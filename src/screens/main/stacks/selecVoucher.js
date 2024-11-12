import { memo } from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import IcVoucher from "../../../assets/icons/bottom_tab/Ic_voucher";


const SelecVoucher = ({
    onPress
}
) => {

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.flexRow, styles.backgroundColor]}
        >
            <IcVoucher fill="blue" />
            <Text style={styles.text}>Áp dụng khuyến mãi</Text>
        </TouchableOpacity>
    )
}

export default memo(SelecVoucher);

const styles = StyleSheet.create({
    flexRow: {
        flexDirection: 'row',
        marginTop: 2
    },
    backgroundColor: {
        backgroundColor: 'white',
        padding: 12
    },
    text: {
        marginStart: 12
    }
})
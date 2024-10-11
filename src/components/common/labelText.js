import { StyleSheet, View, Text } from "react-native";

import colors from "../../constants/colors";

function Lable({ lable ,style }) {
    return (
        <View style={[styles.row,style]}>
            <View style={styles.dotStyle} />
            {
                lable && <Text style={styles.textlabel}>{lable}</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    dotStyle: {
        height: 25,
        width: 6,
        backgroundColor: colors.primary_500
    },
    textlabel: {
        marginStart: 12,
        color: "#494B4B",
        fontSize: 16,
        fontFamily:'Poppins_Regular',
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: 24
    },
    row: {
        width: "100%",
        flexDirection: "row"
    }
})


export default Lable
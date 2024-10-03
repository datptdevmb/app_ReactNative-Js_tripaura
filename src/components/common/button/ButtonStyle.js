import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";
import fontSize from "../../../constants/fontsize";
const styles = StyleSheet.create({
    buttonContainer: {
        width: 339,
        height: 56,
        justifyContent: "center",
        borderRadius: 16,
        alignItems: 'center',
        backgroundColor: colors.primary
    },
    buttonLabel: {
        fontSize: fontSize.sm,
        fontWeight: "bold",
        lineHeight: fontSize.sm * 1.5,
        color:colors.onPrimary

    }
})

export default styles
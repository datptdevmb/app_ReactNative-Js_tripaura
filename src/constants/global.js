import { StyleSheet } from "react-native";
import fontsize from "./fontsize";
import colors from "./colors";

const stylesglobal = StyleSheet.create({
    container: {
        padding: 16,
        flex: 1,
        backgroundColor: colors.onPrimary
    },
    textheader: {
        fontSize: fontsize.xxl,
        lineHeight: 48,
        fontFamily: 'Lato',
        fontWeight: '700',
        color: colors.Grey_900,
    },
    textauth_description: {
        fontSize: fontsize.md,
        lineHeight: 24,
        fontWeight: '400',
        color: colors.Grey_800,
        fontStyle:'normal',
        letterSpacing: 0.08,

    },
    input_field: {
        fontFamily: 'Lato',
        fontSize: 16,
        fontWeight: '700',
        color: colors.Grey_800,
    },
    containerTextOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    commonTextStyle: {
        fontSize: 12,
        lineHeight: 16,
        fontWeight: '400',
        color: '#2E2E2E',
        letterSpacing: 0.05,
    },
    descriptionText: {
        width: '100%',
        height: 26,
        fontSize: 11,
        fontWeight: '400',
        color: '#C9C9C9',
        letterSpacing: 0.11,
    },
})

export default stylesglobal

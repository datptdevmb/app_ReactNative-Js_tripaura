import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";


const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: colors.primary_500,
        height:56,
        width:'100%',
        justifyContent:"flex-start",
        alignItems:"center",
        paddingHorizontal:16,
        flexDirection:"row",
        borderRadius:8
    },
    btnLabel:{
        flex:1,
        textAlign:"center",  
    }

})

export default styles
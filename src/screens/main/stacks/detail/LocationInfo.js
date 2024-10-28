import { StyleSheet, Text, View } from "react-native"
import IcLocate from "../../../../assets/icons/Ic_locate"

const LocationInfo = ({location}) => {
    return (
        <View style={styles.container}>
            <View>
                <IcLocate/>
            </View>
            <Text>{location}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginTop:12
    },
    text:{
        marginStart:24,
        lineHeight:20,
        fontSize:14,
        letterSpacing:0.25,
        color:'#2E2E2E',
        fontStyle:'normal',
        fontWeight:"400"
    }
})

export default LocationInfo
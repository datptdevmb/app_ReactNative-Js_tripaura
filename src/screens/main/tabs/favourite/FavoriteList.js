import { FlatList, StyleSheet, Text, View } from "react-native"
import CardFavorite from "../../../../components/common/card/CardFavorite"


const FavoriteList = ({ data }) => {

    return (
        <View>
            <Text style={styles.title}>Yêu Thích</Text>
            <FlatList
                data={data}
                renderItem={CardFavorite}
            />
        </View>
    )

}
const styles = StyleSheet.create({
    title:{
        marginTop:12,
        fontSize:28,
        fontFamily:'Lato',
        fontWeight:"bold",
        fontStyle:'normal',
        color:'black'
    }
})

export default FavoriteList
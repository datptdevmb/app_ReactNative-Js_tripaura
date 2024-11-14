import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import ImageList from "./ImageList";

function ImageDetail({ navigation }) {

    const { tourById, } = useSelector((state) => state.reducer.tour);
    const {
        imges,
    } = tourById;
    console.log(imges[0])
    function handleCickToFull() {
        navigation.navigate('Ponorama')
    }
    return (
        <View
            style={styles.container}>
            <TouchableOpacity
                onPress={handleCickToFull}
                style={styles.btnCon}>
                <Text style={styles.textStyle}>Xem Toan canh</Text>
            </TouchableOpacity>
            <Image
                style={styles.imageStyle}
                source={{ uri: imges[0] }} />
                <View>
                    
                </View>
            <ImageList dataimage={imges} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: "center",
        alignItems: 'center'
    },
    imageStyle: {
        marginTop:250,
        width: '100%',
        height: 250,
        resizeMode: 'cover'
    },
    btnCon: {
        position: "absolute",
        right: 16,
        top: 200,
        padding: 20,

    },

    textStyle: {
        marginBottom: 100,
        color: 'white'
    }
})

export default ImageDetail
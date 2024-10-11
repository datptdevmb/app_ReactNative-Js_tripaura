import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function ImageDetail({navigation}) {

    function handleCickToFull (){
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
            <Image source={require('../../../../assets/images/image.png')} />

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
        width: '100%',
        height: 243
    },
    btnCon: {
        position: "absolute",
        right: 16,
        top: 250,
        padding: 20,

    },

    textStyle: {
        color: 'white'
    }
})

export default ImageDetail
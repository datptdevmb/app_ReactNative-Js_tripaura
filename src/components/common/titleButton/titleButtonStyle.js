import {StyleSheet} from 'react-native';

const stylesheader = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sizeIcon: {
        width: 24,
        height: 24,
    },
    sizeIconRight:{
        width:55,
        height:24

    },
    text: {
        flex: 10,
        fontSize: 16,
        fontWeight: '400',
        fontStyle: 'normal',
        justifyContent: 'center',
        fontFamily: 'Lato',
        lineHeight: 27,
        color:'#000000',
        marginLeft:16
    },
    placeholder: {
        flex: 0,
        width: 24,
        height: 24,
    },
    placeholdertitle: {
        flex: 10,
        width: 24,
        height: 24,
    },
});

  
  export default stylesheader;
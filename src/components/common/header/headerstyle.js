import {StyleSheet} from 'react-native';

const stylesheader = StyleSheet.create({
    container: {
        width:350,
        height:47,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        paddingHorizontal:16
    },
    sizeIcon: {
        width: 24,
        height: 24,
    },
    text: {
        fontSize: 18,
        fontWeight: '700',
        fontStyle: 'normal',
        fontFamily: 'Lato',
        lineHeight: 27,
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
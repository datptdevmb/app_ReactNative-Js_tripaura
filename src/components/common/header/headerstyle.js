import {StyleSheet} from 'react-native';

const stylesheader = StyleSheet.create({
    container: {
        width:350,
        height:47,
        flexDirection: 'row',
        alignItems: 'center',
    },
    sizeIcon: {
        width: 24,
        height: 24,
    },
    text: {
        flex: 10,
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center',
        fontStyle: 'normal',
        justifyContent: 'center',
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
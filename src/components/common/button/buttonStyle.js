import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import FONTSIZE from '../../../constants/fontsize';

const stylesbutton = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttoncomponet: {
        width: 339,
        height: 47,
        display: 'flex',
        paddingVertical: 6,
        paddingHorizontal: 16,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        borderRadius: 8,
        flexShrink: 0,
        backgroundColor: colors.primary
      },
      containericonbtn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      txtbutoncomponent: {
        width: 267,
        textAlign: 'center',
        color: colors.onPrimary,
        fontSize: FONTSIZE.md,
        fontStyle: 'normal',
        fontWeight: '700',
        fontFamily: 'Lato',
      }
})
  
  export default stylesbutton;
import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import fontsize from '../../../constants/fontsize';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.onPrimary,
  },
  text: {
    fontSize: 36,
    fontFamily: 'Limelight-Regular',
    fontWeight: '400',
    color: colors.primary_500,
    textAlign: 'center',
  },
});

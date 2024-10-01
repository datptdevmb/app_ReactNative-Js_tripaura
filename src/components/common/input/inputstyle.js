import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import FONTSIZE from '../../../constants/fontsize';

const stylesinput = StyleSheet.create({
  container: {
    width: 339,
    height: 56,
    marginTop: 12,
    marginLeft: 16,
  },
  inputComponent: {
    height: 56,
    width: 339,
    paddingVertical: 0,
    paddingHorizontal: 10,
    color: 'rgba(128, 128, 128, 0.90)',
    fontFamily: 'Lato',
    fontSize: FONTSIZE.sm,
    fontWeight: '700',
    lineHeight: 24,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(5, 114, 231, 0.05)',
    backgroundColor: colors.Gray_0,
  },
});

export default stylesinput;

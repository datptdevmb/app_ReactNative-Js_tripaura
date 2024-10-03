import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import fontsize from '../../constants/fontsize';

export const styles = StyleSheet.create({
  text: {
    fontSize: fontsize.xxl,
    lineHeight: 48,
    fontFamily: 'Lato',
    fontWeight: '700',
    color: colors.Grey_900,
    width: '100%',
    height:'auto',
    marginTop: 14,
  },
  txtnhantaikhoan: {
    fontSize: fontsize.md,
    width: '100%',
    height: 'auto',
    lineHeight: 24,
    fontFamily: 'Lato',
    fontWeight: '400',
    color: colors.Grey_900,
    letterSpacing: 0.08,
  },
  TripAru: {
    color: colors.primary_500,
    fontSize: 16,
  },

  EmailButton: {
    backgroundColor: colors.vividOrange,
    marginTop: 83,
    borderRadius: 8,
  },
  EmailLabel: {
    color: '#fff',
    fontSize: fontsize.md,
    fontWeight: '600',
  },
  PhoneButton: {
    backgroundColor: colors.onPrimary,
    marginTop: 12,
    borderWidth: 1,
    borderColor: colors.Grey_200,
  },
  PhoneLabel: {
    color: '#212121',
    fontSize: 16,
    fontWeight: '600',
  },
  fbButton: {
    backgroundColor: '#0572E7',
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#b0b0b0',
  },
  fbLabel: {
    color: '#FFFFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  ggButton: {
    backgroundColor: '#C9C9C9',
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#b0b0b0',
  },
  ggLabel: {
    color: '#212121',
    fontSize: 16,
    fontWeight: '600',
  },
  iconggeStyle: {
    width: 30,
    height: 30,
    padding: 1,
  },
  mota: {
    marginLeft: 16,
    marginTop: 255,
    width: 348,
    height: 26,
    fontSize: 11,
    fontWeight: '400',
    color: '#C9C9C9',
    letterSpacing: 0.11,
  },
});

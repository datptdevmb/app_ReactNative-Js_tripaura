import {StyleSheet} from 'react-native';
import colors from '../../../../constants/Icons';
import fontsize from '../../../../constants/fontsize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  image_back: {
    width: 20,
    height: 20,
    marginTop: 10,
    marginLeft: 10,
    padding: 1,
  },
  image_filter: {
    width: 30,
    height: 30,
    marginTop: 10,
    marginLeft: 15,
  },
  inputSreach: {
    width: 296,
    height: 44,
    backgroundColor: '#F8F9FE',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#000',
    marginTop: 10,
    marginLeft: 10,
  },
  image_clear: {
    width: 10,
    height: 10,
    color: 'black',
    marginLeft: -25,
    marginTop: 10,
  },
  textSreach: {
    width: '100%',
    height: 32,
    fontSize: 14,
    fontWeight: '700',
    color: '#757575',
    textAlign: 'center',
    marginTop: 73,
  },
  tile: {
    width: 175,
    height: 20,
    fontSize: 16,
    fontWeight: '700',
    color: '#1d192b',
    marginTop: 58,
    marginLeft: 15,
  },
  itemContainer: {
    width: 166,
    height: 239,
    flex: 1,
    backgroundColor: '#F8F9FE',
    borderRadius: 10,
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
  },
  itemImage: {
    width: 180.5,
    height: 120,
    borderTopLeftRadius: 10, // Bo góc trên bên trái
    borderTopRightRadius: 10, // Bo góc trên bên phải
  },
  itemName: {
    width: 133.5,
    height: 40,
    fontSize: fontsize.sm,
    color: '#4D4D4D',
    fontWeight: 'bold',
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
    fontWeight: '700',
  },
  itemPrice: {
    fontSize: fontsize.sm,
    color: '#0572E7',
    fontWeight: '700',
    marginLeft: 16,
    marginRight: 16,
  },
  itemDay: {
    width: 133.5,
    height: 16,
    fontSize: fontsize.xs,
    color: '#757575',
    marginTop: 10,
    marginLeft: 16,
    marginRight: 16,
    fontWeight: '400',
  },
  row: {
    justifyContent: 'space-between',
  },
});

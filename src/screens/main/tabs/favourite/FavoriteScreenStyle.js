import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  Header: {
    color: '#0568D2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 5,
    marginBottom: 5,
    marginTop: 5,
  },
  image: {
    width: 145,
    height: 104,
    borderRadius: 10,
  },
  name: {
    marginTop: 7,
    marginLeft: 10,
    width: 145,
    height: 34,
    fontSize: 14,
    fontFamily: 'Lato',
    fontWeight: '700',
    color: '#212121',
  },
  day: {
    marginTop: 8,
    marginLeft: 10,
    width: 145,
    height: 17,
    fontSize: 14,
    fontFamily: 'lato',
    fontWeight: '700',
    color: '#8A8A8A',
  },
  price: {
    marginTop: 8,
    marginLeft: 10,
    width: 145,
    height: 17,
    fontSize: 14,
    fontFamily: 'lato',
    fontWeight: '700',
    color: '#212121',
  },
});

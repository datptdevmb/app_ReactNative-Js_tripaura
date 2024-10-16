import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  deleteButton: {
    marginTop: 10,
    marginLeft: -35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    width: 75,
    height: 110,
    borderRadius: 12,
  },
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
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 5,
    marginBottom: 5,
    marginTop: 5,
    marginLeft: 20,
    width: 369,
    height: 120,
  },
  image: {
    marginLeft: 5,
    width: 145,
    height: 104,
    borderRadius: 10,
    justifyContent: 'center',
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

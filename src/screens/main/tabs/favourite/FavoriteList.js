import {FlatList, StyleSheet, Text, View} from 'react-native';
import CardFavorite from '../../../../components/common/card/CardFavorite';

const FavoriteList = ({data, onToggleFavorite}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yêu Thích</Text>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <CardFavorite item={item} onToggleFavorite={onToggleFavorite} />
        )}
        keyExtractor={(item, index) =>
          item?.id ? item?.id.toString() : index.toString()
        }
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: 12,
    fontSize: 28,
    fontFamily: 'Lato',
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: 'black',
  },
});

export default FavoriteList;

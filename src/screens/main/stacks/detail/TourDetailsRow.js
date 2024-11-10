import Icon from 'react-native-vector-icons/MaterialIcons';

const TourDetailsRow = ({ details }) => {
   return (
      <View>
         {details.map((item, index) => (
            <View key={index} style={styles.row}>
               <Icon name={item.icon} size={20} color="#0572E7" />
               <Text style={styles.text}>{item.text}</Text>
            </View>
         ))}
      </View>
   );
};

export default TourDetailsRow
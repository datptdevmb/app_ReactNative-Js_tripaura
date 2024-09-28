import { SafeAreaView, StatusBar, Text, View, } from 'react-native';
// import Buttoncomponet from './src/components/common/button/Buttoncomponet';
import InputCompoment from './src/components/common/input/InputCompoment';
import { Provider } from 'react-redux';
import store from './src/api/store';
import DropdownComponent from './src/components/common/dropdown/DropdownComponent';
import Headercomponet from './src/components/header/Headercomponet';
import Addd from './src/components/header/addd';
import HomeScreen from './src/screens/home/HomeScreen';
import AppNavigation from './src/navigation/AppNavigation';


const App = () => {
  return (
    <AppNavigation />
  );
};
export default App;


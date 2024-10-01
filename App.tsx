import React from 'react';
// <<<<<<< HEAD

import HomeScreen from './src/screens/Home/HomeScreen';
import FavouriteScreenNoLogin from './src/screens/favourite/FavouriteScreenNoLogin';
import FavouriteScreenNoItem from './src/screens/favourite/FavouriteScreenNoItem';
import FavoriteScreen from './src/screens/favourite/FavoriteScreen';

import LoginRegisterScreen from './src/screens/LoginRegisterScreen/LoginRegisterScreen';
import LoginScreen from './src/screens/LoginRegisterScreen/Login/LoginScreen';
import RegisterScreen from './src/screens/LoginRegisterScreen/Register/RegisterScreen';
import ForgotScreen from './src/screens/LoginRegisterScreen/Forgot/ForgotScreen';

function App(): React.JSX.Element {
  return <ForgotScreen></ForgotScreen>;
}

export default App;
// import { SafeAreaView, StatusBar, Text, View, } from 'react-native';
// import Buttoncomponet from './src/components/common/button/Buttoncomponet';
// import InputCompoment from './src/components/common/input/InputCompoment';
// import { Provider } from 'react-redux';
// import store from './src/api/store';
// import DropdownComponent from './src/components/common/dropdown/DropdownComponent';
// import Headercomponet from './src/components/header/Headercomponet';
// import Addd from './src/components/header/addd';

// const App = () => {
//   return (
//     <Provider store={store}>
//       <Addd />
//     </Provider>
//   );
// };
// export default App;
// =======
// import { Provider } from 'react-redux';
// import store from './src/api/store';
// import HomeScreen from './src/screens/Home/HomeScreen';

// const App = () => {
//   return (
//     <Provider store={store}>
//       <HomeScreen />
//     </Provider>
//   );
// };
// export default App;
// >>>>>>> 1b0e86081fb940b82d375e79f851670dda3f2bce

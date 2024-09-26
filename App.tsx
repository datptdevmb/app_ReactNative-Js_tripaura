import React from 'react';
import { SafeAreaView, StatusBar, Text, View, } from 'react-native';
import Buttoncomponet from './src/components/common/button/buttoncomponet';


function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <Buttoncomponet />
      </View>
    </SafeAreaView>
  );
}
export default App;
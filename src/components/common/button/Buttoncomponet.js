import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useState } from 'react';
import stylesbutton from './buttonStyle';

const buttonComponent = ({ style, title, onPress, image, changeButton }) => {
  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    setPressed(true);
    if (onPress) {
      onPress();
    }
  };

  return (
    <View style={stylesbutton.container}>
      {!changeButton ? (
        <TouchableOpacity style={[stylesbutton.buttoncomponet, style]} onPress={handlePress}>
          <Text style={stylesbutton.txtbutoncomponent}>
            {title}
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={stylesbutton.buttoncomponet}>
          <View style={stylesbutton.containericonbtn}>
            <Image source={image}/>
            <Text style={stylesbutton.txtbutoncomponent}> {title}</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default buttonComponent;

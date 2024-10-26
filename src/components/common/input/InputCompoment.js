import { StyleSheet, TextInput, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import colors from '../../../constants/colors';
import stylesinput from './inputstyle';

const InputComponent = ({
  placeholder,
  onTextChange,
  value,
  hidePassword,
  placeholderTextColor,
  keyboardType,
  style,
  ...props
}) => {
  const [text, setText] = useState(value);
  const [hide, setHide] = useState(hidePassword);

  useEffect(() => {
    setHide(hidePassword);
  }, [hidePassword]);

  useEffect(() => {
    setText(value);
  }, [value]);

  const handleTextChange = (inputText) => {
    setText(inputText);
    if (onTextChange) {
      onTextChange(inputText);
    }
  };

  return (
    <View style={stylesinput.container}>
      <TextInput
        placeholder={placeholder}
        keyboardType={keyboardType || 'default'}
        onChangeText={handleTextChange}
        value={text}
        placeholderTextColor={placeholderTextColor || colors.Grey_400}
        secureTextEntry={hide}
        style={[stylesinput.inputComponent, style]}
        {...props}
      />
    </View>
  );
};

export default InputComponent;

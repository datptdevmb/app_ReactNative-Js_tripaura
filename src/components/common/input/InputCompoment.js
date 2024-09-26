import { StyleSheet, TextInput, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import colors from '../../../constants/colors';
import FONTSIZE from '../../../constants/fontsize';

const InputComponent = ({
  placeholder,
  onTextChange,
  value,
  hidePassword,
  backgroundColor,
  placeholderTextColor,
  keyboardType,
}) => {
  const [text, setText] = useState(value);
  const [hide, setHide] = useState(hidePassword);

  useEffect(() => {
    setHide(hidePassword); 
  }, [hidePassword]);

  const handleTextChange = (inputText) => {
    setText(inputText);
    if (onTextChange) {
      onTextChange(inputText);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        keyboardType={keyboardType || 'default'}
        onChangeText={handleTextChange}
        value={text}
        placeholderTextColor={placeholderTextColor || colors.Gray_400}
        secureTextEntry={hide} 
        style={styles.inputComponent}
      />
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', 
  },
  inputComponent: {
    height: 56,
    width: 339,
    paddingVertical: 0,
    paddingHorizontal: 10,
    color: 'rgba(128, 128, 128, 0.90)',
    fontFamily: 'Lato',
    fontSize: FONTSIZE.sm,
    fontWeight: '700',
    lineHeight: 24,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(5, 114, 231, 0.05)',
    backgroundColor: colors.Gray_0,
  },
});

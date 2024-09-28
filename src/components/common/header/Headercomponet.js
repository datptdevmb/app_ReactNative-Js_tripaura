import { stylesheaderheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import stylesheader from './headerstyle';

const Headercomponet = ({ leftIcon, title, rightIcon, onPressLeftIcon, onPressRightIcon, style }) => {
    let renderLeftIcon, renderTitle, renderRightIcon;
    if (leftIcon) {
        renderLeftIcon = (
            <TouchableOpacity onPress={onPressLeftIcon}>
                <Image source={leftIcon} style={stylesheader.sizeIcon} />
            </TouchableOpacity>
        );
    } else {
        renderLeftIcon = <View style={stylesheader.placeholder} />;
    }
    if (title) {
        renderTitle = <Text style={[stylesheader.text, style]}>{title}</Text>;
    } else {
        renderTitle = <Text style={stylesheader.placeholdertitle} />;
    }
    if (rightIcon) {
        renderRightIcon = (
            <TouchableOpacity onPress={onPressRightIcon}>
                <Image source={rightIcon} style={stylesheader.sizeIcon} />
            </TouchableOpacity>
        );
    } else {
        renderRightIcon = <View style={stylesheader.placeholder} />;
    }
    return (
        <View style={stylesheader.container}>
            {renderLeftIcon}
            {renderTitle}
            {renderRightIcon}
        </View>
    );
};

export default Headercomponet



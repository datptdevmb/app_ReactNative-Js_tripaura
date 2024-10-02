import { stylesheaderheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import stylesheader from './titleButtonStyle';

const TitleBotton = ({ leftIcon, title, rightIcon, onPress, style }) => {
    let renderLeftIcon, renderTitle, renderRightIcon;
    if (leftIcon) {
        renderLeftIcon = (
            <Image source={leftIcon} style={stylesheader.sizeIcon} />
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
            <Image source={rightIcon} style={stylesheader.sizeIconRight} />
        );
    } else {
        renderRightIcon = <View style={stylesheader.placeholder} />;
    }
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={stylesheader.container}>

                {renderLeftIcon}
                {renderTitle}
                {renderRightIcon}

            </View>
        </TouchableOpacity>
    );
};

export default TitleBotton



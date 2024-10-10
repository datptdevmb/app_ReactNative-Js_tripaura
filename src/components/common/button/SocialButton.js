import { Text, TouchableOpacity, View } from "react-native";
import styles from "./SocialButtonStyle";
import { memo } from "react";

function SocialButton({
    label,
    icon ,
    style = {},
    labelStyle,
    onPressed,
    ...props
}) {
    return (
        <View>
            <TouchableOpacity
                onPress={onPressed}
                style={[styles.btnContainer, style]}
                {...props}
            >
                <View>

                    {icon && (
                        <View>
                            {typeof icon === "string" ? (
                                <Text>{icon}</Text>
                            ) : (
                                icon
                            )}
                        </View>
                    )}
                </View>

                {label && (
                    <Text style={[styles.btnLabel, labelStyle]}>
                        {label}
                    </Text>
                )}
            </TouchableOpacity>
        </View>
    );
}

export default memo(SocialButton)

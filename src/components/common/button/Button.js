import { memo } from "react"
import { Text, TouchableOpacity } from "react-native"
import styles from "./ButtonStyle"

function ButtonApp(
    { label = ''
        , onPressed
        , style = {}
        ,styleText
        , ...props
       
    }
) {
    return (
        <TouchableOpacity
            onPress={onPressed}
            style={[styles.buttonContainer, style]}
            {...props}
        >
            <Text style={[styles.buttonLabel,styleText]}>{label}</Text>
        </TouchableOpacity>
    )
}

export default memo(ButtonApp)
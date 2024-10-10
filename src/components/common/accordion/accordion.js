

/* 
{
title :""
subtitle:""
content : "noi dung "
}
*/

import { Text, TouchableOpacity, View } from "react-native";
import styles from "../accordion/AccordionStyle";


function Accordion({
    values
}) {
    return (
        <View>
            {
                values && <TouchableOpacity
                    style={styles.container}
                >
                    <Text>{values?.title}</Text>
                </TouchableOpacity>
            }

        </View>
    )
}

export default Accordion
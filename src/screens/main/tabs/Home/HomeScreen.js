import { View } from "react-native";
import Button from "../../components/common/button/Button";
import SocialButton from "../../components/common/button/SocialButton";
import EmailIcon from "../../assets/icons/EmailIcon";
import DropdownComponent from "../../components/common/dropdown/DropdownComponent";
import Headercomponet from "../../components/common/header/Headercomponet";
import Accordion from "../../components/common/accordion/accordion";


function HomeScreen() {
    const values = {
        title:"title1"
    }
    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <Accordion values={values}/>
        </View>
        
    )
}

export default HomeScreen
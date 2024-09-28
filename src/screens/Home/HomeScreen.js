import { View } from "react-native";
import Button from "../../components/common/button/Button";
import SocialButton from "../../components/common/button/SocialButton";
import EmailIcon from "../../assets/icons/EmailIcon";

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <SocialButton
                // style={{ backgroundColor: '#fff' }}
                icon={<EmailIcon />}
                label="home">

            </SocialButton>
           
        </View>
    )
}

export default HomeScreen
import { colors } from "@/constants/theme"
import { Text, View } from "react-native"

export default function Feed() {
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: colors.background}}>
            <Text>
                This is the Feed page.
            </Text>
        </View>
    )
}
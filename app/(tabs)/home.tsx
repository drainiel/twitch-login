import Button from "@/components/button"
import { router } from "expo-router"
import { Text, View } from "react-native"

export default function Home() {
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: 'purple'}}>
            <Text>
                There's something {"\n"}
                for you on <Text>Twitch</Text>
            </Text>
            <Button variant="primary" onPress={() => {router.push('/(auth)')}}>
                back home
            </Button>
        </View>
    )
}
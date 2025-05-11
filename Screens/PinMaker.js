import { View } from "react-native-web";

export default function PinMaker() {
    return (
        <View>
            <Text>Welcome to making your first pin!</Text>
            <Text>Click the button below to get started!</Text>
            <Button title="Get Started" onPress={() => navigation.navigate('PinMaker')}/>
        </View>
    )
}
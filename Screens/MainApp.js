import { Pressable, Text, View, Image, Button } from 'react-native';
import styles from './STYLES';

export default function MainApp() {
    return (
        <View style={styles.menuWelcome}>
            <Text>Welcome to making your first pin!</Text>
            <Text>Click the button below to get started.</Text>
            <Button title="Get Started" onPress={() => navigation.navigate('PinMaker')}/>
        </View>
    )
}
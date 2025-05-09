import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, Text, TouchableOpacity, View, Image, Modal } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './STYLES.js';

const PinImage = require('../assets/Images/PinIcon.png')
const menuPress = () => {
  console.log("Menu Pressed")
}
//    <NavigationContainer>
//      <Tab.Navigator>
//        <Tab.Screen name="Homepage" component={HomeScreen} options={{title: "Home"}}/>
//        <Tab.Screen name="Idk yet" component={PinEditor} options={{title: "PinEditor"}}/>
//        <Tab.Screen name="Idk yet_V2" component={Backpack} options={{title: "Backpack"}}/>
//        <Tab.Screen name="Settings" component={Settings} options={{title: "Settings"}}/>
//      </Tab.Navigator>
//    </NavigationContainer>

export default function App() {
  return (
    <View style={[styles.menuWelcome]}>
      <Image source={PinImage} style={{height: 150, width:150, position: 'absolute', marginBottom: 200 }}/>
    <Pressable onPress={menuPress}>
      <View style={[styles.menuButton]}>
          <Text style={styles.menuText}>
            Welcome to <Text style={[{fontWeight:"bold"}]} >Pinable!</Text>
          </Text>
      </View>
    </Pressable>
    <Text style={[styles.menuSlogan]}>
      Creating memories at the pinch of a pin
    </Text>
  </View>
  )
}
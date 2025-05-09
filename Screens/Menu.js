import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, Text, TouchableOpacity, View, Image, Modal } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './STYLES.js';

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
  <View style={styles.menuWelcome}>
    <Text style={styles.menuText}>
      Welcome to Pinable!
    </Text>
  </View>
  )
}
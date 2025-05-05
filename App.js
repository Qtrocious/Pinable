import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';

function HomeScreen() {
  return  (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style= {styles.title}>Main Screen</Text>
      </View>
    </SafeAreaView>
  )
}

function Settings() {
  return  (
    <View style={styles.container}>
      <Text style= {styles.title}>Settings</Text>
    </View>
  )
   
}

function PinEditor() {
  return  (
    <View style={styles.container}>
      <Text style= {styles.title}>Here's where the pins go!</Text>
    </View>
  )

}

function Backpack() {
  return  (
    <View style={styles.container}>
      <Text style= {styles.title}>This is your precious backpack</Text>
    </View>
  )
}
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Homepage" component={HomeScreen} options={{title: "Home"}}/>
        <Tab.Screen name="Idk yet" component={PinEditor} options={{title: "PinEditor"}}/>
        <Tab.Screen name="Idk yet_V2" component={Backpack} options={{title: "Backpack"}}/>
        <Tab.Screen name="Settings" component={Settings} options={{title: "Settings"}}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
});
  
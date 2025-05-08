import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';

function HomeScreen() {
  return  (
      <View style={styles.container}>
      </View>
  )
}

function Settings() {
  return  (
    <View style={styles.container}>
      <Text style= {styles.title}>Settings</Text>
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
    <View style={[styles.container]}>
      <View style={[styles.greenBox, styles.boxShadow]}>
        <Text style={[styles.normalText]}>Welcome to <Text style={[styles.boldText]}>Pinable!</Text></Text>
    </View>
      <View style={[styles.uploadPinBox, styles.boxShadow]}>
      <Text style={[styles.boldText]}>
          Here you can customize your own Pin!💥
        </Text>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#fff",
    paddingVertical: 45,
    paddingHorizontal: 10,
  },
  boldText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: "center",
  },
  normalText: {
    fontSize: 18,
    textAlign: "center",
  },
  greenBox: {
    flexDirection: 'row',
    width: 100,
    height: 150,
    borderWidth: 2,
    borderColor: "#FAF9F6",
    padding: 15, //nice placement
    borderRadius: 15,
    margin: 5,
  },  
  uploadPinBox: {
    width: 215,
    height: 40,
    padding: 10,
    borderRadius: 12,    
    margin: 5,
    borderWidth: 2,
    borderColor: "#FAF9F6",
  },
  boxShadow: {
    shadowColor: "FAF9F6 ",
    shadowOffset: {
      width: 6,
      height: 5
    },
    shadowOpacity: .7,
    shadowRadius: 5
  }

});

  
import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, TouchableOpacity, View, Image, Modal } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

const pinImg = require("./assets/Images/PinImage.png");

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
  const [isModalVisible, setIsModalVisible] = useState(false); 
  
  const pinPressed = () => {
    console.log("Pin pressed");
    setIsModalVisible(true);
  };
  const closeModalPin = () => {
    console.log("Pin Modal CLOSED!");
    setIsModalVisible(false);
  }
  
  return (
    <View style={[styles.container]}>
      
      <Pressable onPress={pinPressed}>
        <Image source={pinImg} style={{ 
          borderRadius: 150, 
          borderColor: "black", 
          borderWidth: 3, 
          shadowColor: "purple", 
          shadowOffset: {
            height:20, 
            width:10
          }, 
          shadowOpacity: .6, 
          shadowRadius: 50, 
          height:220, 
          width: 220}}
          />
      </Pressable>
      <Modal
        style={[styles.Box, styles.boxShadow]}
        visible={isModalVisible}
        animationType='slide'
        presentationStyle='pageSheet'>
        <Pressable onPress={closeModalPin}>
          <View style={[styles.pinUpload, styles.boxShadow, { alignSelf: "center", marginTop: 20}]}>
            <Text style={[styles.boldText, {fontSize: 20}]}>
              This is where you'll make your Pins!!
            </Text>
          </View>
        </Pressable>
      </Modal>
      <View style={[styles.Box, styles.boxShadow]}>
        <Text style={[styles.normalText]}>
          Welcome to 
          <Text style={[styles.boldText]}>Pinable!</Text>
          </Text>
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
 
 
  Box: {
    flexDirection: 'row',
    width: 200,
    height: 60,
    borderWidth: 2,
    borderColor: "#FAF9F6",
    padding: 15, //nice placement
    borderRadius: 15,
    margin: 5,
  },  
 
  uploadPinBox: {
    width: 380,
    height: 60,
    padding: 10,
    borderRadius: 12,    
    margin: 5,
    borderWidth: 2,
    borderColor: "#FAF9F6",
  },
 
 
  boxShadow: {
    shadowColor: "FAF9F6 ",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: .5,
    shadowRadius: 3
  },
  pinUpload: {
    width: 280,
    height: 60,
    padding: 20,
    alignItems: "center",
    borderRadius: 12,    
    margin: 5,
    borderWidth: 2,
    borderColor: "#FAF9F6",
  },
});

  
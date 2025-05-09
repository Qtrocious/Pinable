import React from 'react';
import { Button, Pressable, Text, TouchableOpacity, View, Image, Modal } from 'react-native';

import styles from './STYLES.js';

const PinImage = require('../assets/Images/PinIcon.png')
export default function Menu({ navigation }) {
  const menuPress = () => {
    console.log("Menu Pressed");
    navigation.navigate("PinMaker");
  };
  return (
    <View style={[styles.menuWelcome]}>
      <Image source={PinImage} style={[styles.menuImage]}/>
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
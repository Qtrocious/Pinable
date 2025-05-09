import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, TouchableOpacity, View, Image, Modal } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

const pinImg = require("C:/Users/alons.QTROCIOUS/Documents/GitHub/Pinable/assets/Images/PinImage.png");
const [isModalVisible, setIsModalVisible] = useState(false); 
  
  const pinPressed = () => {
    console.log("Pin pressed");
    setIsModalVisible(true);
  };
  const closeModalPin = () => {
    console.log("Pin Modal CLOSED!");
    setIsModalVisible(false);
  }
  


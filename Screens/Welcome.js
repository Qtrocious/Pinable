import { Pressable, Text, View, Image, Button } from 'react-native';
import { TabActions } from '@react-navigation/native';

import styles from './STYLES.js';

const PinImage = require('../assets/Images/PinIcon.png')



export default function Welcome({navigation}) {
  return (
    <View style={[styles.menuWelcome]}>

      <Image source={PinImage} style={[styles.menuImage]}/>
      
      <View style={[styles.menuButton]}>
          <Text style={styles.menuText}>
            Welcome to <Text style={{fontWeight:"bold"}} >Pinable!</Text>
          </Text>
      </View>
      
      <Text style={[styles.menuSlogan]}>
        Creating memories at the pinch of a pin
      </Text>
      
      <Text style={[styles.menuNextPage]}>
        <Text style={{fontWeight:"bold"}}>Get started</Text> by creating your own pins!
      </Text>

      <Pressable 
        onPress={() => {navigation.dispatch(TabActions.jumpTo('Create & Custom'))}}
        style={[styles.menuStarted]} 
      >
        <Text style={[styles.menuText]}>
          Get Started
        </Text>
      </Pressable>
    </View>
  )
}
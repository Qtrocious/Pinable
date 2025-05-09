import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Menu from './Screens/Menu.js';
import PinMaker from './Screens/PinMaker.js';

const Stack = createNativeStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName= "Menu" screenOptions={{ headerShown: false, animation: 'flip', animationEnabled: true, animationDuration: 500, }}>
        <Stack.Screen name="Menu" component={Menu}/>
        <Stack.Screen name="PinMaker" component={PinMaker}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
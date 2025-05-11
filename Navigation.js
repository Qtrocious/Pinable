import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainApp from './Screens/MainApp.js';
import PinMaker from './Screens/PinMaker.js';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName='Welcome'>
      <Stack.Screen name="MainApp" component={MainApp} />
      <Stack.Screen name="PinMaker" component={PinMaker} />
    </Stack.Navigator>
  );
}

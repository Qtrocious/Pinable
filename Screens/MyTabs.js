import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainApp from './MainApp.js';
import PinMaker from './PinMaker.js';
import Backpack from './Backpack.js';
import Welcome from './Welcome.js';
import CreatePinScreen from './CreatePinScreen.js';

const Tab = createBottomTabNavigator();

//This is the main tab navigator for the app
export default function MyTabs() {
    return (
        <Tab.Navigator initialRouteName='Welcome' options={{
                headerShown: false,}}>
            
            <Tab.Screen name="Welcome" component={Welcome} 
                options={{ 
                    headerShown: false,
                    tabBarStyle: {display: 'none'},}} />
            
            <Tab.Screen name="MainApp" component={MainApp} 
                options={{
                    headerShown: false,}}/>
            
            <Tab.Screen name="PinMaker" component={PinMaker} 
                options={{
                    headerShown: false,
                }}/>
            
            <Tab.Screen name="CreatePin" component={CreatePinScreen}
                options={{
                    headerShown: false}}/>

            <Tab.Screen name="Backpack" component={Backpack}
                options={{
                    headerShown: false,}}/>
        </Tab.Navigator>
    );
}
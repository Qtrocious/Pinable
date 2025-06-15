import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainApp from './MainApp.js';
import Backpack from './Backpack.js';
import Welcome from './Welcome.js';
import InventoryPin from './InventoryPin.js';
import CreateCustomPin from './CreateCustomPin.js';

const Tab = createBottomTabNavigator();

//This is the main tab navigator for the app
export default function MyTabs() {
    return (
        <Tab.Navigator initialRouteName='Welcome' 
                options={{
                    headerShown: false,}}>
            
            <Tab.Screen name="Welcome" component={Welcome} 
                options={{ 
                    headerShown: false,
                    tabBarStyle: {display: 'none'},}} />
            
            <Tab.Screen name="MainApp" component={MainApp} 
                options={{
                    headerShown: true,}}/>
            
            <Tab.Screen name="Create & Custom" component={CreateCustomPin}
                options={{
                    headerShown: true}}/>

            <Tab.Screen name="Backpack" component={Backpack}
                options={{
                    headerShown: true,}}/>
            <Tab.Screen name="Inventory" component={InventoryPin}
                options={{
                    headerShown: true}}/>
        </Tab.Navigator>
    );
}
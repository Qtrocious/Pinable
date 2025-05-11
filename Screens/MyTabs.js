import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainApp from './MainApp.js';
import PinMaker from './PinMaker.js';
import Backpack from './Backpack.js';
import Welcome from './Welcome.js';

const Tab = createBottomTabNavigator();

//This is the main tab navigator for the app
export default function MyTabs() {
    return (
            <Tab.Navigator initialRouteName='Welcome' options={{
                headerShown: false,
            }}>
            <Tab.Screen name="Welcome" component={Welcome} options={{ headerShown: false,
                tabBarStyle: {display: 'none'},
                tabBarButton: () => null, // Hide the tab bar button for this screen
            }} />
            <Tab.Screen name="MainApp" component={MainApp} options={}/>
            <Tab.Screen name="PinMaker" component={PinMaker} />
            <Tab.Screen name="Backpack" component={Backpack} />
        </Tab.Navigator>
    );
}
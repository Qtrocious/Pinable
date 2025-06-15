import React from 'react';
import { View, Text, Button } from 'react-native';
import { ScrollView } from 'react-native-web';
// The main app screen will dislpay after the welcome screen once the user click the button
// It will have a bottom tab navigator with two tabs: PinMaker, TBD, TBD, TBD


export default function MainApp() {
    return (
        <View style={{ 
            backgroundColor:'#FDFEEC',
            flex: 1,
            }
        }>
                <View style={{ 
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 10,
                    margin: 10,
                    backgroundColor: '#0D7EEC',
                    borderRadius: 20,
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,}}>
                    <Text style={{
                        fontSize: 12,
                        fontWeight: 'bold',
                        textAlign: 'center',}}>
                        Welcome! 
                        This is the main app screen.
                        You can navigate to different sections of the app using the bottom tab navigator.
                        The tabs will include: PinMaker, Backpack, TBD, TBD.
                    </Text>
                </View>
                <View style={{ 
                    borderRadius: 5,
                    borderWidth:3,
                    borderColor: '#0D7EEC',
                    backgroundColor: '#FDFEEC',
                    padding: 10,}}>
                    <Text>
                        This is where you
                    </Text>
                </View>
        </View>
    );
    
}
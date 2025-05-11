import React from 'react';
import { View, Text } from 'react-native';
// The main app screen will dislpay after the welcome screen once the user click the button
// It will have a bottom tab navigator with two tabs: PinMaker, TBD, TBD, TBD


export default function MainApp() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Welcome to making your first pin!</Text>
            <Text>Click the button below to get started!</Text>
        </View>
    );
    
}
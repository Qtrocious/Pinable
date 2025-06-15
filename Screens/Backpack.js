import React from 'react';
import { View, Text } from 'react-native';

export default function Backpack() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Welcome to your Backpack</Text>
            <Text>Select a pin to pin your 
            <Text style={{fontWeight:"bold"}}> Backpack</Text>!</Text>
        </View>
    )
}
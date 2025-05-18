import { View, Text, FlatList,  Button, Image, TextInput, Alert, Pressable } from 'react-native';
import styles from './STYLES.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { load } from 'react-native-track-player/lib/src/trackPlayer.js';

export default function InventoryPin() {
    const [pins, setPins] = useState([]);
    useEffect(() => {
        const loadPins = async () => {
            const storedPins = await AsyncStorage.getItem('pins');
            if (storedPins) {
                setPins(JSON.parse(storedPins));
            }
        };
        loadPins();
    }, []);

    return (    
        <FlatList
            data={pins}
            keyExtractor={(item) => item.id}    
            renderItem={({ item }) => (
                <View>
                    <Text>{item.title}</Text>
                    <Image source={{uri: item.imageUri}}
                    style = {{width: 150, height:150, borderRadius: 100,}}/>
                    <Text>{item.createdAt}</Text>
                </View>
            )} 
        />
    )
}
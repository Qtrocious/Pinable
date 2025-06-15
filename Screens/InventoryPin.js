import { View, Text, FlatList,Image,  } from 'react-native';
import styles from './STYLES.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Gesture } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

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
// Main view for the InventoryPin screen
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}> 
        <View // View for the inventory being displayed
            style={{flex:0.4, width: '100%'}}>
            <FlatList // List of pins
                style = {{
                    margin: 5, 
                    padding:10,
                    borderWidth: 1.5,
                    borderTopEndRadius: 20,
                    borderBottomEndRadius: 20,
                    borderBottomStartRadius: 20,
                    backgroundColor: 'white',
                    numColumns: 3, // Number of columns in the list                   
                }}
                
                data={pins}
                keyExtractor={(item) => item.id}    
                renderItem={({ item }) => (
                    <View>
                        <Image source={{uri: item.imageUri}} // Image for each pin
                        style = {{ // Style of the pin IMAGE
                            height:70,
                            width:70,
                            borderRadius: 100, 
                        }}/> 
                                                <Image source={{uri: item.imageUri}} // Image for each pin
                        style = {{ // Style of the pin IMAGE
                            height:70,
                            width:70,
                            borderRadius: 100, 
                        }}/> 
                                                <Image source={{uri: item.imageUri}} // Image for each pin
                        style = {{ // Style of the pin IMAGE
                            height:70,
                            width:70,
                            borderRadius: 100, 
                        }}/> 
                                                <Image source={{uri: item.imageUri}} // Image for each pin
                        style = {{ // Style of the pin IMAGE
                            height:70,
                            width:70,
                            borderRadius: 100, 
                        }}/> 
                                                <Image source={{uri: item.imageUri}} // Image for each pin
                        style = {{ // Style of the pin IMAGE
                            height:70,
                            width:70,
                            borderRadius: 100, 
                        }}/> 
                                                <Image source={{uri: item.imageUri}} // Image for each pin
                        style = {{ // Style of the pin IMAGE
                            height:70,
                            width:70,
                            borderRadius: 100, 
                        }}/> 
                        <Text style={{ 
                            textAlign: 'center',
                            fontSize: 12,
                            fontWeight: 'bold',
                            }}> {item.title} </Text>
                    </View>
                )}/>
        </View>
        <View // View for backpack placeholder 
        style={{
            flex:0.6,
            backgroundColor: '#0D7EEC',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            }}>     
            <Text
            style={{
                fontSize: 24,}}>
                Your Backpack
            </Text>
        </View>
    </View>
    )
}
import { View, Text,Image,  } from 'react-native';
import styles from './STYLES.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { GestureDetector, Gesture, GestureHandlerRootView, FlatList  } from 'react-native-gesture-handler';
import Animated, {useSharedValue, useAnimatedStyle, withSpring, withDelay, runOnJS} from 'react-native-reanimated';

function DraggablePin({item, newPinPosition}) {

    const translateX = useSharedValue(item.x); // Starts at saved X
    const translateY = useSharedValue(item.y); // at saved Y
    const scale = useSharedValue(1);
    
    const drag = Gesture.Pan()
        .onBegin(() => {
            scale.value =  withSpring(1.2);
        })
        .onChange((event) => {
            translateX.value = item.x + event.translationX ;
            translateY.value = item.y + event.translationY ;
        })
        .onEnd(() => {
            scale.value = withSpring(1);
            runOnJS(newPinPosition)(item.id, translateX.value, translateY.value);
        });

        const animatedStyle = useAnimatedStyle(() => {
            return {
                transform: [
                    { translateX: translateX.value },
                    { translateY: translateY.value },
                    { scale: scale.value },
                ],
            };
        });
    return (
        <GestureDetector gesture={drag}> 
            <Animated.View style={[styles.animatedStyle, animatedStyle, {position: 'absolute', left: 0, top: 0}]}>
                <Image source={{uri: item.imageUri}} // Image for each pin
                    style = {{ // Style of the pin IMAGE
                        height:70,
                        width:70,
                        borderRadius: 100,
                        }}/>
                        
            </Animated.View>
        </GestureDetector>
        )
    };

// Main component for InventoryPin screen
export default function InventoryPin() {
    const [pins, setPins] = useState([]);

    const newPinPosition = async (id, x, y) => {
        const updatedPins = pins.map(pin => {
            if (pin.id === id) {
                return {...pin, x, y}; // Updates the pin's position
            }
            return pin;
        });
        setPins(updatedPins);
        await AsyncStorage.setItem('pins', JSON.stringify(updatedPins)); // Saves updated pins to AsyncStorage
    };

    useEffect(() => {
        const loadPins = async () => {
            
        try {
            const storedPins = await AsyncStorage.getItem('pins');
            if (storedPins) {
                setPins(JSON.parse(storedPins));
            }
        }   catch (error) {
            console.error('Error loading pins', error);
            }
        };
        loadPins();
    }, []);
    
    return (    
        // Main view for the InventoryPin screen
        <GestureHandlerRootView style={{flex: 1, backgroundColor: '#0D7EEC'}}> 
            {pins.map((item) => (
                <DraggablePin key={item.id} item={item} onDrop={handleDrop} />
            ))}
                    
            <View // View for backpack placeholder 
                style={{
                    backgroundColor: '#0D7EEC',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex:0.6,
                }}>     
                    <Text
                        style={{
                            fontSize: 24,}}>
                                Your Backpack
                    </Text>
                </View>

        </GestureHandlerRootView>

    )
}
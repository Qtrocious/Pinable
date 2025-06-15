import { View, Text,Image, TouchableHighlight, TouchableOpacity,  } from 'react-native';
import styles from './STYLES.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { GestureDetector, Gesture, GestureHandlerRootView, FlatList, Pressable  } from 'react-native-gesture-handler';
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
    const [activePins, setActivePins] = useState([]); 
    const handleActivePin = (pin) => {
        if (!activePins.some(p => p.id === pin.id)) {
          const newPin = {
            ...pin,
            x: 100, // Default starting X (you can customize)
            y: 100, // Default starting Y
          };
          setActivePins([...activePins, newPin]);
        }
      };
    const newPinPosition = async (id, x, y) => {
        const updatedPins = pins.map(pin => 
            pin.id === id ? { ...pin, x, y } : pin 
        );

        const updatedActivePins = activePins.map(pin => 
            pin.id === id ? { ...pin, x, y } : pin 
        );
        
        setPins(updatedPins);
        setActivePins(updatedActivePins);  
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
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: '#0D7EEC' }}>
        <View // Backpack bro
          style={{
            backgroundColor: '#0D7EEC',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 0.6,
          }}
        >
          <Text style={{ fontSize: 24 }}>Your Backpack</Text>
        </View>
      <FlatList //inventory preview
        contentContainerStyle={{ padding: 10 }}
          style={{ 
            margin: 5,
            padding: 10,
            borderWidth: 1.5,
            borderTopEndRadius: 20,
            borderBottomEndRadius: 20,
            borderBottomStartRadius: 20,
            backgroundColor: 'white',
          }}
        numColumns={3}
        data={pins}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

          <View style={{ padding: 5 }}>

            <TouchableOpacity onPress={() => handleActivePin(item)}> 

              <Image
                source={{ uri: item.imageUri }}
                style={{
                  height: 70,
                  width: 70,
                  borderRadius: 100,
                }}
              />

            </TouchableOpacity>

          </View>
        )}
      />

      {activePins.map((item) => (
        <DraggablePin
          key={`draggable-${item.id}`}
          item={item}
          newPinPosition={newPinPosition}
        />
      ))}

    </GestureHandlerRootView>
    )
}
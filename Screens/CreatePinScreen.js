import { useState } from 'react';
import { View, Text, Button, Image, TextInput, Alert, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

//creating vars with the same data type at the same time
//use state only stores data WHILE running the app, not locally only online typa thing
//useState => '' is to store strings, 0 to store numbers, false to store booleans, name:'', 
//age: 0 to store user profiles, [] to storer images, lists, null to detect when something is selecter yet    
const [pins, setPins] = useState([]); //why []? cuz i want to store many pins made by the users!
const [pinPixelated, setPinPixelated] = useState(null);   
const [pinSize, setPinSize] = useStateForPath;te(null);

const createPin = (imageUri, title) => {
    const newPin = {                        //This makes up data stuff so it stays even when offline
        id: Date.now().toString(), //foun this is a great way to make a unique id
        imageUri, //this is the path file from where the user upload the photo from
        title, //text user typed
        createdAt: new Date().toISOString(), 
    };

    const createdPins = [newPin, ...pins]; //This adds newly created pins to the top of the list, so later you dont have to scroll down
    
    setPins(createdPins) // this updates the state, so, the memory
    
    //but, without the below, this data gets lost without saving it, so, we're saving it
    AsyncStorage.setItem('pins', JSON.stringify(createdPins)); // Save the PinCreated on local storage
}




export default function CreatePinScreen() {
    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();


        
        if (status !== 'granted') {
            Alert.alert('Sorry, a great pin needs a great image!');
            return;
        }
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri); // store the selected image
        }
    }
    

    return (
        <View   
            style={{ 
                flex: 1, 
                justifyContent: 'center', 
                alignItems: 'center' 
                }}
            >
            <Text 
                style={{
                    fontSize: 24, 
                    fontWeight: 'bold', 
                    marginBottom: 20, 
                    textAlign: 'center', 
                    color: 'black',
                    textShadowColor: 'rgba(192, 40, 40, 0.5)',
                    textShadowOffset: { width: 0, height: 1 },
                    textShadowRadius: 2,
                }}>
                Create a Pin!
            </Text>

            <Pressable 
                style={{
                    padding: 15, 
                    margin: 20,

                    backgroundColor: '#FDFEEC', 

                    borderRadius: 5, 
                    borderWidth: 2,
                    borderColor: '#000',

                    shadowColor: '#FFA1C5',
                    shadowRadius: 3,
                    shadowOffset:{width: 2, height: 2},
                }}
                onPress={pickImage}>
                    <Text 
                        style={{ 
                            fontWeight:'bold',
                            color: 'black',
                        }}
                        >
                        Pick an image!
                    </Text>
                </Pressable>

            <TextInput
                style={{ 
                    alignSelf: 'center', 
                    height: 40, 
                    borderWidth: 3, 
                    borderRadius: 5,
                    width: 200, 
                    margin: 20,   
                    padding: 10, 
                    shadowColor: 'black',
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.8,
                    shadowRadius: 3,
                }}
                onChangeText={setTitle}                 
                placeholder="Enter a title for your pin"
                value={title}
                maxLength={25}
                returnKeyType="done"

                />
            <Pressable 
                style={{ 
                        fontWeight:'bold',
                           color: 'black',

                        padding: 15, 
                        margin: 20,

                        backgroundColor: '#FDFEEC', 

                        borderRadius: 5, 
                        borderWidth: 2,
                        borderColor: '#000',

                        shadowColor: '#FFA1C5',
                        shadowRadius: 3,
                        shadowOffset:{width: 2, height: 2},
                            
                    }}

                onPress={() => {
                    if (!image || !title.trim()) {
                        Alert.alert('Missing info', 'Please pick an image and enter a title.');
                        return;
                    }
                    Alert.alert('Pin created!', `Title: ${title}`);
                }} >
                <Text style={{ color: 'black', }}>
                    Create Pin
                </Text>
                </Pressable>
                {image && <Image source={{ uri: image }}
                    style={{ width: 200, height: 200, borderRadius: 100, margin: 20,}} // Adjust the size as needed
                />}
                
        </View>
    );
}

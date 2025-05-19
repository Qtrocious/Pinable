import { useEffect, useState } from 'react';
import { View, Text, Button, Image, TextInput, Alert, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './STYLES';
//creating vars with the same data type at the same time
//use state only stores data WHILE running the app, not locally only online typa thing
//useState => '' is to store strings, 0 to store numbers, false to store booleans, name:'', 
//age: 0 to store user profiles, [] to storer images, lists, null to detect when something is selecter yet    

//const [pinPixelated, setPinPixelated] = useState(null);   
//const [pinSize, setPinSize] = useState(null);



export default function CreateCustomPin() {
    
    const [pins, setPins] = useState([]); //why []? cuz i want to store many pins made by the users!
    const [titlePin, setTitlePin] = useState('');
    const [imageUri, setImageUri] = useState(null);
    
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
        AsyncStorage.setItem('pins', JSON.stringify(createdPins)); // sets the data under the key 'pins', stringify converts objeect into a string, cuz asyncstorage can only store strings  
    }
    //Asking for permission because we are not creepy
    const requestCameraPermission = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission need vro 🥀');
            return false;
        }
        return true;
    }
    
    // allows the user to open camera if they want to take camera  
    const takePhoto = async () => {
        const allowedTakePhoto = await requestCameraPermission();
        if (!allowedTakePhoto) return;

        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            quality: 1,
            });
        
        if (!result.canceled) {
            setImageUri(result.assets[0].uri);
        }
    };
    
    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: 'images',
            allowsEditing: true,
            quality:1,
        });
        if (!result.canceled) {
            setImageUri(result.assets[0].uri);
        }
    };

    return (
        <View   
            style={{ 
                flex: 1, 
                justifyContent: 'center', 
                alignItems: 'center' 
                }}>

            <Text 
                style={{
                    fontSize: 24, 
                    fontWeight: 'bold', 
                    marginBottom: 20, 
                    textAlign: 'center', 
                }}>
                Create a Pin!
            </Text>
            <TextInput
                placeholder='Title your pin bro'
                value={titlePin}
                onChangeText={setTitlePin}
                style = {{
                    borderWidth: 2,
                    padding:10,
                    margin:10, 
                    borderRadius: 30, 
                }}/>
                
            <Button title='Take a memory' onPress={takePhoto}/>
            
            <Button title='Pick your memory' onPress={pickImage}/>
            
            {imageUri && (
                <Image 
                source={{uri: imageUri}}
                style={{
                    width: 150,
                    height: 150, 
                    marginTop: 20,
                    borderRadius: 150, 
                }}/>
            )}
            
            <Pressable
                onPress={() => {
                    if (!imageUri || !titlePin.trim()) {
                        Alert.alert('just put the image and the title vro🥀🥀');
                    return;
                }
                    
                createPin(imageUri, titlePin);
                setImageUri(null);
                setTitlePin('');
                Alert.alert('Pin saved lil bro');
                }}
            
                >
                    <Text style={{
                        padding:10, 
                        margin:10, 
                        borderWidth: 2, 
                        borderColor: 'black', 
                        borderRadius: 20, 
                        shadowColor: 'red', 
                        shadowOffset: {width:5, height:5}, 
                        shadowRadius: 5, 
                        shadowOpacity: .57,
                        }}>
                        Save Pin
                    </Text>
                </Pressable>
        </View>
    )
}

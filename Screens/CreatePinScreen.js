import { useState } from 'react';
import { View, Text, Button, Image, TextInput, Alert, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


export default function CreatePinScreen() {
    
    const [image, setImage] = useState(null); 
    const [title, setTitle] = useState('');   

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

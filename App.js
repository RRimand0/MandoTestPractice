import React, {useState} from 'react'; 
import { StyleSheet, View, TextInput, Button, Text} from 'react-native';
// import CryptoJS from 'crypto-js';


const App = () => {
    return(
    <View style ={style.container}>
        <TextInput 
            style={style.input}
            placeholder="Message"
            />
        <TextInput
            style={style.container}
            placeholder="Secret key"
           />
        <Button title="Encrypt"  />
        <Text>Encrypted Message:  </Text>

        <Text>Decrypt a Meessage</Text>
        <TextInput
            style={style.container}
            placeholder="Enter encrypted message"
            />
        <TextInput 
            style={style.container}
            placeholder="enter secret key"
             />
        <Button title="Decrypt" />
        <Text> Decrypt Meessage: </Text>
    </View>
    );
};

const style = StyleSheet.create({
    conatainer: { 
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center', 
        padding: 20,
    }, 
    input: {
        width: '100%',
        padding: 10, 
        margin: 10,
        borderColor: 'blue',
        borderWidth: 1,
    },
});

export default App;

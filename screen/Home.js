import React from "react";
import { View, Text, Button,StyleSheet} from 'react-native';

const Home = ({navigation}) => { 
    return (
        <View style={StyleSheet.container}>
            <Text style={style.title}> Home Screen</Text>
        </View>
    );
};

export default Home;

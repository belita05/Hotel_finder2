import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useNavigation} from '@react-navigation/native'
import { Image, ImageBackground,StyleSheet, Button,Text,TouchableOpacity, View } from 'react-native';

const staticImage = require("./../assets/images/Picture1.jpg");
const staticLogo = require("./../assets/images/test.png");
const sub = require("./../assets/images/sub.png");

const PaymentUpdate = () => {
    const navigation = useNavigation();
    return (
       < View>
           Your payment is successful 
           An email will be send to you for successful.
       

<View style={{flex:1,marginBottom:20,justifyContent: 'flex-end',width:300,height:50 }}>
<Button onPress={()=> navigation.navigate("Login")} title='Get Started' color={'#E3AC1E'} ></Button>

</View>
</View>
    )
}

    export default Start

const styles = StyleSheet.create({
    container :{
        flex: 1,
        backgroundColor: '#fff'
    }
     
});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useNavigation} from '@react-navigation/native'
import { Image, ImageBackground,StyleSheet, Button,Text,TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const staticImage = require("./../assets/images/Picture1.jpg");
const staticLogo = require("./../assets/images/test.png");
const sub = require("./../assets/images/sub.png");

const Start = () => {
    const navigation = useNavigation();
    return (
 <View style = {styles.container}>
        <ImageBackground source={staticImage} style={styles.ImageBackground}>
   <StatusBar style="auto" />
    <View style={{ alignItems:'flex-start',marginTop:100}}> 
    
        <Image  source={staticLogo}></Image>
         <Image style={{marginTop: 10}}  source={sub}></Image>
    </View>
       <View style={{flex:1,marginBottom:20,justifyContent: 'flex-end',width:300,height:50 }}>
       <Button onPress={()=> navigation.navigate("Login")} title='Get Started' color={'#E3AC1E'} ></Button>
    
    </View>
       
 </ImageBackground>
        </View>
       
    )
}

export default Start

const styles = StyleSheet.create({
    container :{
        flex: 1,
        backgroundColor :'#fff',
    },
    
    ImageBackground: {
        flex: 1,
        resizeMode: "cover",
        width: "100%",
        alignItems: "center",
      },
     
});
    
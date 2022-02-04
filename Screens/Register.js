import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useNavigation} from '@react-navigation/native'
import { Image, ImageBackground,StyleSheet, Button,Text,TouchableOpacity, View,TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {firebase} from '../Firebase/firebase';

const staticImage = require("./../assets/images/Picture1.jpg");
const staticLogo = require("./../assets/images/test.png");
const sub = require("./../assets/images/sub.png");

const Register = () => {
    const navigation = useNavigation();
    console.log(firebase);
    return (
        <View style = {styles.container}>
        <ImageBackground source={staticImage} style={styles.ImageBackground}>
   <StatusBar style="auto" />
    <View style={{ alignItems:'flex-start',marginTop:100}}> 
    
        <Image  source={staticLogo}></Image>
         
    </View>
       <View style={{flex:1,marginBottom:20,justifyContent: 'flex-end',alignContent:'center',width:303,height:50 }}>
       <View style={{color:'#fff',justifyContent:'center',alignItems:"center",marginBottom:5}}>
       <Text style={{color:'#fff'}}>Enter Your First Name </Text>
       </View>
      <TextInput style={styles.Input}> </TextInput>
        <View style={{color:'#fff',justifyContent:'center',alignItems:"center",marginBottom:5}}>
       <Text style={{color:'#fff'}}>Enter Your Last Name </Text>
       </View>
      <TextInput style={styles.Input}> </TextInput>
      <View style={{color:'#fff',justifyContent:'center',alignItems:"center",marginBottom:5}}>
       <Text style={{color:'#fff'}}>Enter Your Contact Number </Text>
       </View>
      <TextInput style={styles.Input}> </TextInput>
      <View style={{color:'#fff',justifyContent:'center',alignItems:"center",marginBottom:5}}>
       <Text style={{color:'#fff'}}>Enter Your Email Address </Text>
       </View>
      <TextInput style={styles.Input}> </TextInput>
       <View style={{color:'#fff',justifyContent:'center',alignItems:"center",marginBottom:5}}>
       <Text style={{color:'#fff'}}>Enter Your Password</Text>
       </View>
      <TextInput style={styles.Input}> </TextInput>
      <View style={{color:'#fff',justifyContent:'center',alignItems:"center",marginBottom:5}}>
       <Text style={{color:'#fff'}}>Confirm Your Password</Text>
       </View>
      <TextInput style={styles.Input}> </TextInput>

       
       {/* <View style={{marginTop:10,marginBottom:20}}>
       <Button onPress={()=> navigation.navigate("Home")} title='Create Account' color={"#E37D1E"} ></Button>
       </View> */}
       <View style={{marginTop:40,marginBottom:20}}>
       <Button onPress={()=> navigation.navigate("TabScreen")} title='Create Account' color={"#E37D1E"} ></Button>
       </View>
       {/* <View style={{marginTop:10,marginBottom:20}}>
       <Button onPress={()=> navigation.navigate("TabScreen")} title='Login' color={"#E37D1E"} ></Button>
       </View> */}



       
       
     
    </View>
       
 </ImageBackground>
        </View>
    )
}

export default Register
const styles = StyleSheet.create({
    container :{
        flex: 1,
        backgroundColor :'#fff',
        alignItems:"center"
    },
    
    ImageBackground: {
        flex: 1,
        resizeMode: "cover",
        width: "100%",
        alignItems: "center",
      },
     Input:{
         borderRadius:5,
         backgroundColor:'#FAF1A4',
         height:39,
         marginBottom:5,
        
     }
});
    
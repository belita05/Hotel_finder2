import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useNavigation} from '@react-navigation/native'
import { Image, ImageBackground,StyleSheet, Button,Text,TouchableOpacity, View } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';

const staticImage = require("./../assets/images/Picture1.jpg");
const staticLogo = require("./../assets/images/test.png");
const sub = require("./../assets/images/sub.png");

const Password = () => {
    const navigation = useNavigation();
    return (

        <View style = {styles.container}>
        <ImageBackground source={staticImage} style={styles.ImageBackground}>
   <StatusBar style="auto" />
    <View style={{ alignItems:'flex-start',marginTop:100}}> 
    
        <Image  source={staticLogo}></Image>
         <Image style={{marginTop: 10}}  source={sub}></Image>
    </View>

    { <Text style= {{color: '#fff', fontWeight:'bold', marginTop: 100, paddingTop: 10, marginBottom: 70} }>FORGOTTEN YOUR PASSWORD?</Text> }
    <View style={{marginBottom: 300,justifyContent: 'flex-end',alignContent:'center',width:300,height:50 }}>
       <View style={{color:'#fff',justifyContent:'center',alignItems:"center",marginBottom:5, marginTop:20}}>
       <Text style={{color:'#fff'}}>Enter Your Email Address </Text>
       </View>
      <TextInput style={styles.Input}> </TextInput>
     
       </View>
       
       <View style={{flex:1,marginBottom:20,justifyContent: 'flex-end',width:300,height:50 }}>
       <Button onPress={()=> navigation.navigate("Login")} title='Submit' color={'#E3AC1E'} ></Button>
    
       </View>
       
       
      
       

 </ImageBackground>
        </View>

    )
}
export default Password

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
    



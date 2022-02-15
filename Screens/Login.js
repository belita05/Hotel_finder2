import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { Image, ImageBackground, StyleSheet, Button, Text, TouchableOpacity, View } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';
import { auth } from '../Screens/Firebase/firebase';

const staticImage = require("./../assets/images/Picture1.jpg");
const staticLogo = require("./../assets/images/test.png");
const sub = require("./../assets/images/sub.png");

const Login = () => {
    const navigation = useNavigation()
    
    
        const [email, setEmail] = useState()
        const [password, setPassword] = useState()
        const handleLogin = () =>{
        auth
        .signInWithEmailAndPassword(email,password)
        .then(userCredentials =>{
            const user = userCredentials.user;
            console.log('Logged in with:', user.email);
            navigation.navigate("Home")
        })
        .catch(error => alert(error.message))
    }
    console.log(email)
    return (
        <View style={styles.container}>
            <ImageBackground source={staticImage} style={styles.ImageBackground}>
                <StatusBar style="auto" />
                <View style={{ alignItems: 'flex-start', marginTop: 100 }}>

                    <Image source={staticLogo}></Image>
                    <Image style={{ marginTop: 10 }} source={sub}></Image>
                </View>
                <View style={{ flex: 1, marginBottom: 20, justifyContent: 'flex-end', alignContent: 'center', width: 303, height: 50 }}>
                    <View style={{ color: '#fff', justifyContent: 'center', alignItems: "center", marginBottom: 5 }}>
                        <Text style={{ color: '#fff' }}>Enter Your Email </Text>
                    </View>
                    <TextInput value={email} placeholder="email" onChangeText={(text) =>  setEmail(text) }  style={styles.Input}/> 
                    <View style={{ color: '#fff', justifyContent: 'center', alignItems: "center", marginBottom: 10 }}>
                        <Text style={{ color: '#fff' }}>Enter Your Password</Text>
                    </View>
                    <TextInput value={password} placeholder="password" onChangeText={(text) =>  setPassword(text) }  style={styles.Input}/> 
                    
                    <View style={{ marginBottom: 10, marginTop: 20}}>
                        <Button onPress={() => handleLogin()} title='Login' color={'#E3AC1E'} ></Button>
                    </View>

                    <Button onPress={() => navigation.navigate("Register")} title='Register' color={"#E37D1E"} ></Button>
                    <View style={{ color: '#fff', justifyContent: 'center', alignItems: "center", marginTop: 20 }}>
                    </View>

                    
                    <TouchableOpacity onPress={()=>Login() }>
                        <Text style= {{color: '#fff', justifyContent: "center", alignItems: "center", marginBottom: 5}}>
                        Forgot Password? Click Here
                        </Text>
                        {/* passwordReset: email => {
  return firebase.auth().sendPasswordResetEmail(email)
}, */}
                    </TouchableOpacity>
                        
                           

                </View>

            </ImageBackground>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center"
    },

    ImageBackground: {
        flex: 1,
        resizeMode: "cover",
        width: "100%",
        alignItems: "center",
    },
    Input: {
        borderRadius: 5,
        backgroundColor: '#FAF1A4',
        height: 39,
        marginBottom: 5,

    }
});

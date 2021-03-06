import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { Image, ImageBackground, StyleSheet, Button, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { auth } from '../Screens/Firebase/firebase';
import { auth } from './Firebase/firebase';
import firebase from 'firebase';

const staticImage = require("./../assets/images/Picture1.jpg");
const staticLogo = require("./../assets/images/test.png");
const sub = require("./../assets/images/sub.png");

    const Register = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigation = useNavigation()
    // const [email, resetPassword] = useState()

    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged(user=>{
    //         if (user){
    //             navigation.navigate("Home")
    //         }
    //     })
    //     return unsubscribes
    // }, [])

    const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user
                console.log('Registered with', user.email);
                navigation.navigate("Login")
                
            })
            .catch(error => alert(error.message))
    }
    // const      resetPassword=(email)=>{
    //      auth.sendPasswordResetEmail(email).then(res => {

    //      }). catch ( err => {

    //      })

    // }


    return (
        <View style={styles.container}>
            <ImageBackground source={staticImage} style={styles.ImageBackground}>
                <StatusBar style="auto" />
                <View style={{ alignItems: 'flex-start', marginTop: 100 }}>
                    <Image source={staticLogo}></Image>
                </View>
                <View style={{ flex: 1, marginBottom: 20, justifyContent: 'flex-end', alignContent: 'center', width: 303, height: 50 }}>
                    <View style={{ color: '#fff', justifyContent: 'center', alignItems: "center", marginBottom: 5 }}>
                        <Text style={{ color: '#fff' }}>Enter Your First Name </Text>
                    </View>
                    <TextInput style={styles.Input}/>
                    <View style={{ color: '#fff', justifyContent: 'center', alignItems: "center", marginBottom: 5 }}>

                        <Text style={{ color: '#fff' }}>Enter Your Last Name </Text>
                    </View>
                    <TextInput style={styles.Input}/>
                    <View style={{ color: '#fff', justifyContent: 'center', alignItems: "center", marginBottom: 5 }}>
                        <Text style={{ color: '#fff' }}>Enter Your Email Address</Text>
                    </View>
                    <TextInput value={email} placeholder="email" onChangeText={(text) =>  setEmail(text) } style={styles.Input} />
                    {/* <View style={{ color: '#fff', justifyContent: 'center', alignItems: "center", marginBottom: 5 }}>
                        <Text style={{ color: '#fff' }}>Enter Your Phone n </Text>
                    </View>
                    <TextInput onChangeText={(text) => setPassword(text)} style={styles.Input}/> */}
                    <View style={{ color: '#fff', justifyContent: 'center', alignItems: "center", marginBottom: 5 }}>
                        <Text style={{ color: '#fff' }}>Enter Your Password</Text>
                    </View>
                    <TextInput value={password} onChangeText={(text) => setPassword(text)} style={styles.Input}/>
                    <View style={{ color: '#fff', justifyContent: 'center', alignItems: "center", marginBottom: 5 }}>
                        <Text style={{ color: '#fff' }}>Confirm Your Password</Text>
                    </View>
                    <TextInput style={styles.Input}/>


                    {/* <View style={{marginTop:10,marginBottom:20}}>
       <Button onPress={()=> navigation.navigate("Home")} title='Create Account' color={"#E37D1E"} ></Button>
       </View> */}
                    <View style={{ marginTop: 40, marginBottom: 20 }}>
                        <Button onPress={handleSignUp}  title='Create Account' color={"#E37D1E"} ></Button>
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

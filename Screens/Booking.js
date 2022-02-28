import React,{useState} from 'react';
//import { ListItem } from 'react-native-elements';
import {useNavigation} from '@react-navigation/native'
import { View, Text, StyleSheet, SafeAreaView, TextInput,Button, Image, TouchableOpacity,ScrollView, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


const Booking = () => {
const navigation = useNavigation();


    
    return (
        <>
            <SafeAreaView style={styles.container}>

            <Text style={{ fontWeight: 'bold', marginBottom: 10, marginTop: 10, fontSize: 25}}>Bookings History</Text>
               
             <ImageBackground source={require("../assets/images/lodge1.png")} style={{width:'90%',borderRadius: 10,height:'45%', marginTop: 15, paddingTop: 10 , marginLeft: 30}}>
                 
                 <Text style= {{color: '#ffffff', fontSize: 17, borderRadius: 5}}>Name: Thego Tau </Text>
                 <Text style= {{color: '#ffffff', fontSize:  17, borderRadius: 5}}>Contacts: 078 170 7575 </Text>
                 <Text style= {{color: '#ffffff', fontSize: 17, borderRadius: 5}}>Check in date: 28/02/2022</Text>
                 <Text style= {{color: '#ffffff', fontSize: 17, borderRadius: 5}}>Check out date: 01/03/2022</Text>
                 <Text style= {{color: '#ffffff', fontSize: 17, borderRadius: 5}}>Hotel name: West Hotel</Text>
            
            </ImageBackground>

            <ImageBackground source={require("../assets/images/lodge1.png")} style={{width:'90%',borderRadius: 10,height:'45%', paddingTop: 10, marginLeft: 30, marginTop: -180}}>
                 
                 <Text style= {{color: '#ffffff', fontSize: 17, borderRadius: 5}}>Name: Thego Tau </Text>
                 <Text style= {{color: '#ffffff', fontSize:  17, borderRadius: 5}}>Contacts: 078 170 7575 </Text>
                 <Text style= {{color: '#ffffff', fontSize: 17, borderRadius: 5}}>Check in date: 28/02/2022</Text>
                 <Text style= {{color: '#ffffff', fontSize: 17, borderRadius: 5}}>Check out date: 01/03/2022</Text>
                 <Text style= {{color: '#ffffff', fontSize: 17, borderRadius: 5}}>Hotel name: Parkin Hotel</Text>
            
            </ImageBackground>

            <ImageBackground source={require("../assets/images/lodge1.png")} style={{width:'90%',borderRadius: 10,height:'45%', paddingTop: 10, marginLeft: 30, marginTop: -180}}>
                 
                 <Text style= {{color: '#ffffff', fontSize: 17, borderRadius: 5}}>Name: Thego Tau </Text>
                 <Text style= {{color: '#ffffff', fontSize:  17, borderRadius: 5}}>Contacts: 078 170 7575 </Text>
                 <Text style= {{color: '#ffffff', fontSize: 17, borderRadius: 5}}>Check in date: 28/02/2022</Text>
                 <Text style= {{color: '#ffffff', fontSize: 17, borderRadius: 5}}>Check out date: 01/03/2022</Text>
                 <Text style= {{color: '#ffffff', fontSize: 17, borderRadius: 5}}>Hotel name: Ivory Hotel</Text>
            
            </ImageBackground>
           
              
            </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },  
});
export default Booking;
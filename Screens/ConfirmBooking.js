import React,{useState} from 'react';
//import { ListItem } from 'react-native-elements';
import {useNavigation} from '@react-navigation/native'
import { View, Text, StyleSheet, SafeAreaView, TextInput,Button, Image, TouchableOpacity,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


const ConfirmBooking = () => {
const navigation = useNavigation();


    
    return (
        <>
        <Image style={style.bed4} source={require("./../assets/images/bed4.jpg")} >
                </Image>
            <SafeAreaView style={style.container}>
            
                   <View style={style.btn}>
        <View style={{flex:1,marginBottom:20,justifyContent: 'flex-end',width:300,height:50 }}>
       <Button onPress={()=> navigation.navigate("Payment")} title='Book' color={'#E3AC1E'} ></Button>

       

       </View>
        </View> 
       
            </SafeAreaView>
        </>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
     bed4: {
    height: 400,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    overflow: 'hidden',
    width: 450
  },
});
export default ConfirmBooking;
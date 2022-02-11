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
            {/* <ScrollView style={{width:'100%'}}
                 horizontal={true}> */}
               
                {/* <Image style={style.bed4} source={require("./../assets/images/bed3.jpg")} >
                </Image> */}
                   <View style={style.btn}>
        <View style={{flex:1,marginBottom:20,justifyContent: 'flex-end',width:300,height:50 }}>
       <Button onPress={()=> navigation.navigate("Payment")} title='Book' color={'#E3AC1E'} ></Button>
       </View>
        </View> 
        <View style={{flex:1,marginBottom:20,justifyContent: 'flex-end',width:300,height:50 }}>
       <Button onPress={()=> navigation.navigate("Home")} title='Cancel' color={'#E3AC1E'} ></Button>
        
        {/* <View style={style.btn}> */}
       
       {/* </View> */}
        </View>     

                {/* </ScrollView> */}
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
    // head: {
    //     alignItems: 'center',
    //     fontSize: 25,
    //     color: '#00BFFF',
    //     fontWeight: 'bold',
    // },
    // buttonTitle: {
    //     color: "#E3AC1E",
    //     fontWeight: 'bold',

    // },
    // inside: {
    //     width: '100%',
    //     borderBottomWidth: 1,
    //     margin: 5
    // },
    // inputBox: {
    //     flexDirection: 'row',
    //     backgroundColor: '#FAF1A4',
    //     //color: '#FAF1A4',
    //     elevation: 3,
    //     width: '80%',
    //     height: 40,
    //     margin: 5,
    //     borderRadius:5, 
    // },
     bed4: {
    height: 400,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    overflow: 'hidden',
    width: 450
  },
});
export default ConfirmBooking;
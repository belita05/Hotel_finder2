import React,{useState} from 'react';
import { ListItem } from 'react-native-elements';
import { View, Text, StyleSheet, SafeAreaView, TextInput, Image, TouchableOpacity,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


const Booking = ({ navigation }) => {


    
    return (
        <>
            <SafeAreaView style={styles.container}>
               
             <Image source={require("../assets/images/lodge1.png")} style={{width:'90%',borderBottomLeftRadius:10,borderBottomRightRadius:10,height:'20%',marginTop:25}}></Image>
              <View style={styles.inputBox} >
              <Icon name='calendar' size={20} color='#00BFFF' style={{ margin: 5 }}></Icon>
              
               <Text style={{marginTop:5}}> Sat 5 Jan - Mon 7 Jan </Text>
               </View>
               <View style={styles.inputBox} >
              <Icon name='user' size={20} color='#00BFFF' style={{ margin: 5 }}></Icon>
               
               <Text style={{marginTop:5}}> 1 room/s - 2 adults - 0 childern </Text>
               </View>
                    <TouchableOpacity style={styles.button}>
                        <Text >
                            Check Availability
                        </Text>
                    </TouchableOpacity>

                <View style={styles.inside}>
                    <Text  style={{ margin: 5,color: "#00BFFF", fontWeight: 'bold' }} >
                        AVALIABLE ROOOMS
                    </Text>
                </View>
               
                <ScrollView style={{width:'100%'}}
                 horizontal={true}>
               {
                            room.map((data) => (

                                <ListItem  key={data.id} style={{borderBottomColor:'#000',borderBottomWidth:0.4}}>
                      <Avatar size={250} source={data.img} ></Avatar>
                                    <ListItem.Content >
                                        <ListItem.Title > </ListItem.Title>
                                    </ListItem.Content>
                                </ListItem>
                            )

                            )
}
                        

                </ScrollView>
            </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    head: {
        alignItems: 'center',
        fontSize: 25,
        color: '#00BFFF',
        fontWeight: 'bold',
    },
    buttonTitle: {
        color: "#FFF",
        fontWeight: 'bold',

    },
    inside: {
        width: '100%',
        borderBottomWidth: 1,
        margin: 5
    },
    inputBox: {
        flexDirection: 'row',
        backgroundColor: '#D5DBE3',
        elevation: 3,
        width: '90%',
        margin: 5,
        borderRadius:10, 
    },
    button: {
        elevation: 3,
        width: '80%',
        backgroundColor: "#00BFFF",
        color: "#fff",
        height: 35,
        borderRadius: 10,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
export default Booking;
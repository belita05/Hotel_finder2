import React,{useState} from 'react';
//import { ListItem } from 'react-native-elements';
import {useNavigation} from '@react-navigation/native'
import { View, Text, StyleSheet, SafeAreaView, TextInput,Button, Image, TouchableOpacity,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


const AvailableRoom = () => {
const navigation = useNavigation();


    
    return (
        <>
            <SafeAreaView style={styles.container}>

            

                {/* <Text style={{marginTop: 15, fontWeight: 'bold'}}>Mumbai Lodge</Text> */}
               
             {/* <Image source={require("../assets/images/lodge1.png")} style={{width:'90%',borderRadius: 5,height:'40%',marginTop:30, marginBottom: 30}}></Image>
              <View style={styles.inputBox} >
              <Icon name='calendar' size={20} color='#000000' style={{ margin: 5 }}></Icon>
              
               <Text style={{marginTop:5, color: '#000000'}}> Sat 5 Jan - Mon 7 Jan </Text>
               </View>
               <View style={styles.inputBox} >
              <Icon name='user' size={20} color='#000000' style={{ margin: 5 }}></Icon>
               
               <Text style={{marginTop:5, color: '#000000'}}> 1 room/s - 2 adults - 0 childern </Text> */}
               {/* </View> */}
               {/* <View style={{flex:1,marginBottom:250,justifyContent: 'flex-end',width:360,height:70 }}>
       <Button onPress={()=> navigation.navigate("Login")} title='Check Availability' color={'#E3AC1E'} ></Button>
</View> */}
               
                <ScrollView style={{width:'100%'}} horizontal={true}>
                {/* {
                            room.map((data) => (

                                <ListItem  key={data.id} style={{borderBottomColor:'#000',borderBottomWidth:0.4}}>
                      <Avatar size={250} source={data.img} ></Avatar>
                                    <ListItem.Content >
                                        <ListItem.Title > </ListItem.Title>
                                    </ListItem.Content>
                                </ListItem>
                            )

                            )
}  */}
                        

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
        alignItems: 'center',
    },
    head: {
        alignItems: 'center',
        fontSize: 25,
        color: '#00BFFF',
        fontWeight: 'bold',
    },
    // buttonTitle: {
    //     color: "#E3AC1E",
    //     fontWeight: 'bold',

    // },
    inside: {
        width: '100%',
        borderBottomWidth: 1,
        margin: 5
    },
    inputBox: {
        flexDirection: 'row',
        backgroundColor: '#FAF1A4',
        elevation: 3,
        width: '80%',
        height: 40,
        margin: 5,
        borderRadius:5, 
    },
     headerImage: {
    height: 400,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    overflow: 'hidden',
  },
});
export default AvailableRoom;
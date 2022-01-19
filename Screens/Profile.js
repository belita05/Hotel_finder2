import React from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';



const Profile = ({navigation}) => {

    return (
        <>
            <SafeAreaView style={style.cover}>

                <View style={style.backBox}>

                <Text style={style.heading}>
                        My Profile

                    </Text>

                    
                    <View >
                        
                       <View style={style.profile}>
                               
                                    <Image style={style.profile} source={require("./../assets/images/profile.png")} />

                                    <Text style= {style.infor}>
                                        
                                    </Text>
                            </View>
                            </View>
                            </View>
                            
            </SafeAreaView>

        </>
    )
}

const style = StyleSheet.create({

    heading: {
      
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft: 35,
        //fontFamily: 'ruthie',
        },
   
    profile: {

   
        height: "40%",
        paddingTop: 30,
        marginBottom: 50,
        backgroundColor: "white",
        
    },

    HotelPic: {
        height: "90%",
        marginLeft: "8%",
       width: "85%",
        borderRadius: 20,
    }
   
})
export default Profile

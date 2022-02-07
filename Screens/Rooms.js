import React from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';



const Rooms = ({navigation}) => {

    return (
        <>
            <SafeAreaView style={style.cover}>

                <Text style={style.heading}>
                        Available rooms

                    </Text>

                            <View style={style.roomPic}>
                                <TouchableOpacity  onPress={() => navigation.navigate("DetailScreen")} title='Get Started'>
                                    <Image style={style.lodge1} source={require("./../assets/images/lodge1.png")} />

                                </TouchableOpacity>
                            </View>

                            {/* <View style={style.roomPic}>
                                <TouchableOpacity  onPress={() => navigation.navigate("DetailScreen")} title='Get Started'>
                                    <Image style={style.lodge1} source={require("./../assets/images/lodge1.png")} />

                                </TouchableOpacity>
                            </View>

                            <View style={style.roomPic}>
                                <TouchableOpacity  onPress={() => navigation.navigate("DetailScreen")} title='Get Started'>
                                    <Image style={style.lodge1} source={require("./../assets/images/lodge1.png")} />

                                </TouchableOpacity>
                            </View> */}

                        
            </SafeAreaView>

        </>
    )
}

const style = StyleSheet.create({
    cover: {
        backgroundColor: "#fff",
        height: "100%",

    },
    roomPic:{
margin: 10,
    },
   
    
})
export default Rooms;
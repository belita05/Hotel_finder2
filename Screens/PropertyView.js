import React from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';



const PropertyVew = ({navigation}) => {

    return (
        <>
            <SafeAreaView style={style.cover}>

                <Text style={style.heading}>
                        Available rooms

                    </Text>

                    <View style={style.search}>
                    <TextInput  placeholder="Search hotel"/>
                   
                    </View>
                    

                    <View >
                        
                        <View style={style.picContainer}>

                            <View style={style.picView}>
                                <TouchableOpacity  onPress={() => navigation.navigate('searchroom', { name: 'searchroom' })}>
                                    <Image style={style.lodge1} source={require("./../assets/images/lodge1.png")} />

                                </TouchableOpacity>
                            </View>

                            <View style={style.picView}>
                                <TouchableOpacity  onPress={() => navigation.navigate('searchroom', { name: 'searchroom' })}>
                                    <Image style={style.lodge1} source={require("./../assets/images/lodge1.png")} />

                                </TouchableOpacity>
                            </View>

                            <View style={style.picView}>
                                <TouchableOpacity  onPress={() => navigation.navigate('searchroom', { name: 'searchroom' })}>
                                    <Image style={style.lodge1} source={require("./../assets/images/lodge1.png")} />

                                </TouchableOpacity>
                            </View>

                        </View>

                    </View>
            </SafeAreaView>

        </>
    )
}

const style = StyleSheet.create({
    cover: {
        backgroundColor: "#fff",
        height: "100%",

    },
    heading: {
      
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft: 35,
        //fontFamily: 'ruthie',
        
},
    search: {
        backgroundColor: "#d4d3cf",
        marginLeft: 30,
        borderRadius:50,
        paddingLeft:100,
        marginTop:30,
        justifyContent: 'center',
        width:"70%",
        height:"5%",

    },
    picContainer: {

       
   },
    
    picView: {
        height: "40%",
        paddingTop: 30,
        marginBottom: 50,
        backgroundColor: "white",
        },

    HotelPic: {
        height: "90%",
        marginLeft: "8%",
       width: "85%",
        borderRadius: 10,
},
    line: {
        marginBottom: 0,
       marginLeft: "13%",
        marginBottom: 30,
        marginTop: 10,
        color:"#d1d0cd",

    },
   })
export default PropertyVew
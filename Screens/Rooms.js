import React from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View,TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';



const Rooms = ({navigation}) => {

    return (
        <>
            <SafeAreaView style={style.cover}>

                <Text style={style.heading}>

                        Available Rooms
                </Text>

                            {/* <View style={style.roomPic}>
                                <TouchableOpacity  onPress={() => navigation.navigate("AvailableRoom")}>
                                    <Image style={style.bed3} source={require("./../assets/images/bed3.jpg")} />
                                    </TouchableOpacity> */}
                            {/* </View> */}
                            {/* <Image source={require('../assets/images/bed3.jpg')} style={style.bed3} onPress={() => navigation.navigate('AvailableRoom')}/> */}
                           <TouchableOpacity  onPress={() => navigation.navigate("ConfirmBooking")}>
                            <View style={style.roomPic}>
                                
                                    <Image style={style.bed3} source={require("./../assets/images/bed3.jpg")} />
                                    
                            </View>
                            </TouchableOpacity>


                            <View style={style.details}>
                            <View style={{flexDirection: 'row'}}>
                            <Icon name="shower" size={25} style={{marginRight: 40, paddingTop: 20}} />
                            <Icon name="tv" size={25} style={{marginRight: 40, paddingTop: 20}} />
                            <Icon name="bed" size={25} style={{marginRight: 40, paddingTop: 20}} />
                            <Icon name="wifi" size={25} style={{marginRight: 40, paddingTop: 20}} />
                            {/* <Icon name="microwave" size={25} style={{marginRight: 40, paddingTop: 20}} /> */}
                             
                                </View>
                                <Text style={{fontSize:14,marginRight:95, marginTop: 10}}>
                                Double deluxe room,  Price per night R700
                                </Text>
                                {/* <Text style={{fontSize:18, marginLeft:15, marginTop: 10, fontSize: 20,fontWeight: 'bold'}}>
                                Price per night R700
                                </Text> */}
</View>

                                <TouchableOpacity  onPress={() => navigation.navigate("ConfirmBooking")}>
                            <View style={style.roomPic1}>
                                
                                    <Image style={style.bed4} source={require("./../assets/images/bed4.jpg")} />
                                   
                            </View>
                            </TouchableOpacity>
                            <View style={style.details}>
                            <View style={{flexDirection: 'row'}}>
                            <Icon name="bathtub" size={20} style={{marginRight: 40, paddingTop: 20, }} />
                            <Icon name="tv" size={25} style={{marginRight: 40, paddingTop: 20}} />
                            <Icon name="bed" size={25} style={{marginRight: 40, paddingTop: 20}} />
                            <Icon name="wifi" size={25} style={{marginRight: 40, paddingTop: 20}} />
                            
            
                                </View>
                                 <Text style={{fontSize:14,marginRight:95, marginTop: 10}}>
                                2 Single bedroom, Price per night R700
                                </Text>
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

details:{

width:'100%',
margin: 10
},

 heading: {

  alignItems: 'center',
  fontSize: 20,
  fontWeight: 'bold',
  margin: 10

},

bed4:{
    
    marginTop: 40,
    borderRadius: 10,
    height: 250,
    width: 400,
    margin: 10
},

bed3:{

    marginTop: 40,
    borderRadius: 10,
    height: 250,
    width: 400,
    margin: 10,
    alignItems: 'center'
},
row:{

    margin: 20,
    alignItems: 'center'
        }
   })
export default Rooms;
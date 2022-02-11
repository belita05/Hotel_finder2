import React from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
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
                            <Image source={require('../assets/images/bed3.jpg')} style={style.bed3} onPress={() => navigation.navigate('AvailableRoom')}/>
                            <View style={{flexDirection: 'row'}}>
                            <Icon name="shower" size={25} style={{marginRight: 40, paddingTop: 20}} />
                            <Icon name="tv" size={25} style={{marginRight: 40, paddingTop: 20}} />
                            <Icon name="bed" size={25} style={{marginRight: 40, paddingTop: 20}} />
                            <Icon name="wifi" size={25} style={{marginRight: 40, paddingTop: 20}} />
                            <Icon name="pool" size={25} style={{marginRight: 40, paddingTop: 20}} />
                            <Icon name="microwave" size={25} style={{marginRight: 40, paddingTop: 20}} />
                                </View>
                                <Text>
                                 
                                </Text>
                            <View style={style.roomPic1}>
                                <TouchableOpacity  onPress={() => navigation.navigate("AvailableRoom")}>
                                    <Image style={style.bed4} source={require("./../assets/images/bed4.jpg")} />
                                    </TouchableOpacity>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                            <Icon name="tub" size={25} style={{marginRight: 40, paddingTop: 20}} />
                            <Icon name="tv" size={25} style={{marginRight: 40, paddingTop: 20}} />
                            <Icon name="bed" size={25} style={{marginRight: 40, paddingTop: 20}} />
                            <Icon name="wifi" size={25} style={{marginRight: 40, paddingTop: 20}} />
                            <Icon name="microwave" size={25} style={{marginRight: 40, paddingTop: 20}} />
                            <Icon name="pool" size={25} style={{marginRight: 40, paddingTop: 20}} />
            
                                </View>
                                <Text>

                                </Text>

                           
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

  fontSize: 30,
  alignItems: 'center',
  marginLeft: 100,



},

bed4:{
    
    marginTop: 120,
    borderRadius: 10,
    height: 250,
    width: 450,

},
bed3:{
    marginTop: 30,
    borderRadius: 10,
    height: 250,
    width: 450,
    
    
        },
        row:{
            margin: 20,
        }
   
    
})
export default Rooms;
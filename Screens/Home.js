import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, Image, TouchableOpacity,ScrollView,Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/Ionicons';




const {height,width} = Dimensions.get('window');
const Home = ({ navigation }) => {
     

       const  lists= [{
            id:1,
            name: 'Mumbai Hotel',
            location: 'Polokwane',
            img:require('../assets/images/lodge1.png')
        },
        {
            id:2,
            name: 'Montana Hotel',
            location: 'Polokwane',
            img:require('../assets/images/lodge2.png'),
        },
        {
            id:3,
            name: 'West Hotel',
            location: 'Polokwane',
            img:require('../assets/images/lodge1.png'),
        },
      
       
        ]
    

    return (
        <>
            <SafeAreaView style={styles.container}>
                {/* <StatusBar
                    backgroundColor="#00BFFF"
                    barStyle="light-content"
                />
                 */}
                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                        <Icon name='notifications-sharp' size={22} color='#000000' style={{ marginTop: 40, paddingLeft: 350 }}></Icon>
                    </TouchableOpacity>
        
                <View >
                    <Text style={{ color: '#000000', margin: 10, marginBottom: 40, fontWeight: 'normal', fontSize: 25 }}>
                        FIND YOUR STAY
                    </Text>
                    <View style={{ flexDirection: 'row', width: '100%' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Map')}title='Location'>
                        <Icon name='location-outline' size={22} color='#000000' style={{ marginTop: 20, marginLeft: 10 }}></Icon>
                        </TouchableOpacity>
                        <View style={{ backgroundColor: '#FAF1A4', height: 40, width: '78%', margin: 10, borderRadius: 10, flexDirection: 'row' }}>
                            <TextInput style={{ padding: 5, width: '88%', margin: 5 }} placeholder="Seacher Location" />
                            <TouchableOpacity>
                                <Icon name='md-search-sharp' style={{ marginTop: 10 }} size={22} color='#000000' ></Icon>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ScrollView scrollEventThrottle={15}>
                       

                       
                   </ScrollView>

                        
                        <View>


</View>
<View style={{width:"95%",height:4000,margin: 10}}>
{
    lists.map((action => 
<TouchableOpacity   key={action.id} onPress={() => navigation.navigate('Booking')}> 
<View style={{width:"95%",height:200,margin: 10}}>
 
<Image source={action.img}  style={{flex:1,height:null,width:null,resizeMode:'cover',borderRadius:5}}></Image>  
  
   <Text style={{fontWeight:'normal'}}>
       {action.location}
       </Text> 
       <Text style={{fontWeight:'normal',fontSize:20, paddingBottom: 1}}>
       {action.name}
       </Text> 
      </View>
            </TouchableOpacity>
))
}

</View>
                
                
                </View>


            </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    onborder:{
        flexDirection:'row',
    },
    com :{
        flexDirection:'row',
        margin:2,
        justifyContent:'space-between'
    },
    header:{
        fontSize: 10,
       fontWeight:'bold',
    }
});
export default Home;
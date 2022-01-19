import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, Image, TouchableOpacity,ScrollView,Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';



const {height,width} = Dimensions.get('window');
const Home = ({ navigation }) => {
     

       const  lists= [{
            id:1,
            name: 'Mumbai Hotel',
            location: 'Polokwane',
            img:require('../assets/Images/lodge1.png')
        },
        {
            id:2,
            name: 'Montane Hotel',
            location: 'Los',
            img:require('../assets/Images/.png'),
        },
        {
            id:3,
            name: 'West Hotel',
            location: 'Los',
            img:require('../assets/Images/photo1.jpg'),
        },
      
       
        ]
    

    return (
        <>
            <SafeAreaView style={styles.container}>
                <StatusBar
                    backgroundColor="#00BFFF"
                    barStyle="light-content"
                />
                <View style={{ backgroundColor: '#00BFFF', height: 60, width: '100%', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <Text style={{ color: '#fff', marginTop: 20, marginLeft: 10 }}>
                        WELLCOME  {'\n'}
                        LOVERS MALULEKE
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                        <Icon name='notifications-sharp' size={22} color='#FFF' style={{ marginTop: 20, marginRight: 10 }}></Icon>
                    </TouchableOpacity>
                </View>
                <View >
                    <Text style={{ color: '#00BFFF', margin: 10, fontWeight: 'bold', fontSize: 25 }}>
                        Find your hotel
                    </Text>
                    <View style={{ flexDirection: 'row', width: '100%' }}>
                        <Icon name='location-outline' size={22} color='#00BFFF' style={{ marginTop: 20, marginLeft: 10 }}></Icon>
                        <View style={{ backgroundColor: '#D5DBE3', height: 40, width: '88%', margin: 10, borderRadius: 10, flexDirection: 'row' }}>
                            <TextInput style={{ padding: 5, width: '88%', margin: 5, }} placeholder="Seacher Location" />
                            <TouchableOpacity>
                                <Icon name='md-search-sharp' style={{ marginTop: 10 }} size={22} color='#00BFFF' ></Icon>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ScrollView 
                    scrollEventThrottle={15}
                    >
                        <View>
                        <Text style={{ color: '#00BFFF', margin: 10, fontWeight: 'bold', fontSize: 25 }}>
                        Popular hotels
                    </Text>
                        </View>
                        <View style={{height:130,margin:10}}>
                   <ScrollView
                   horizontal={true}
                   showsHorizontalScrollIndicator={false}
                   >

                       <View  style={{height:130,width:130,margin:5}}>
                           {/* {
                                lists.map(element  =>
                                    
                                    <Text>
                                    {element.name}
                                    </Text>
                                    )
                           } */}
                          <View style={{flex:2}}>
                                <Image  source={require('../Img/photo1.jpg')} style={{flex:1,height:null,width:null,resizeMode:'cover'}}></Image>  
                               
                          </View>
                          <View style={{flex:1}}>
                                <Text style={{color:'#00BFFF',fontWeight:'bold'}}>
                                    Mothebeka Village
                                </Text>

                          </View>
                       </View>
                       <View  style={{height:130,width:130,margin:5,borderWidth:0.5,borderColor:'#dddddd'}}>
                          <View style={{flex:2}}>
                                <Image  source={require('../Img/photo2.jpg')} style={{flex:1,height:null,width:null,resizeMode:'cover'}}></Image>  
                               
                          </View>
                          <View style={{flex:1}}>
                                <Text style={{color:'#00BFFF',fontWeight:'bold'}}>
                                    Tshabela Village
                                </Text>

                          </View>
                       </View>
                       <View  style={{height:130,width:130,margin:5,borderWidth:0.5,borderColor:'#dddddd'}}>
                          <View style={{flex:2}}>
                                <Image  source={require('../Img/photo.png')} style={{flex:1,height:null,width:null,resizeMode:'cover'}}></Image>  
                               
                          </View>
                          <View style={{flex:1}}>
                                <Text style={{color:'#00BFFF',fontWeight:'bold'}}>
                                    Mothebeka Village
                                </Text>

                          </View>
                       </View>
                       <View  style={{height:130,width:130,margin:5,borderWidth:0.5,borderColor:'#dddddd'}}>
                          <View style={{flex:2}}>
                                <Image  source={require('../Img/photo.png')} style={{flex:1,height:null,width:null,resizeMode:'cover'}}></Image>  
                               
                          </View>
                          <View style={{flex:1}}>
                                <Text style={{color:'#00BFFF',fontWeight:'bold'}}>
                                    Mothebeka Village
                                </Text>

                          </View>
                          

                       </View>
                   </ScrollView>

                        </View>
                        <View>
<Text style={{ color: '#00BFFF', marginLeft: 10,  fontSize: 20 }}>
    Network Hotels around you
</Text>

</View>
<View style={{width:"95%",height:4000,margin: 10}}>
{
    lists.map((action => 
<TouchableOpacity   key={action.id} onPress={() => navigation.navigate('Booking')}> 
<View style={{width:"95%",height:200,margin: 10}}>
 
<Image source={action.img}  style={{flex:1,height:null,width:null,resizeMode:'cover',borderRadius:5}}></Image>  
  
   <Text style={{fontWeight:'bold'}}>
       {action.location}
       </Text> 
       <Text style={{fontWeight:'bold',fontSize:20}}>
       {action.name}
       </Text> 
       {/* {   
       lists.map(action => <Image source={action.img} style={{width:100,height:100,marginTop:25}}>
           
       </Image>
       )
    } */}
            
            </View>
            </TouchableOpacity>
))
}

</View>
                    </ScrollView>
                
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
        // margin:1,
        
     
    },
    com :{
        flexDirection:'row',
        margin:2,
        justifyContent:'space-between'
    },
    header:{
        fontSize:15,
       fontWeight:'bold' ,
      
    //    padding:5,
    }
});
export default Home;
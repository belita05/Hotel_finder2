import React from 'react';
import { View , Text,StyleSheet,SafeAreaView,Button,TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import * as ImagePicker from 'expo-image-picker';

const Profile = () => {
    const navigation = useNavigation();
    return(
        <>
        <SafeAreaView style ={styles.container}>
            {/* <View style={styles.userInfoSection}> */}
            {/* <View style={{ marginTop: 10, marginLeft: 140, borderRadius: 10, height: '40%'}}> */}
           
          
           
 {/* <View style={{marginLeft: 20}}> */}
 {/* <Text style={[styles.title, {
              marginTop:10,
              marginBottom: 5,
              
        
            }]} >
          Bella Tau
     </Text> */}
     {/* <Text style={styles.caption}>
         Tau
     </Text> */}

     {/* </View> */}
     {/* </View> */}
     {/* </View> */}

     {/* <SafeAreaView style={styles.userInfoSection}> */}
      <Avatar size={90} source={require('../assets/images/profile.png')}></Avatar>
        <View style={styles.row}>
          <Icons name="person" color="#000000" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20, fontSize: 17}}>Bella Tau</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#000000" size={20} />
          
          <Text style={{color:"#777777", marginLeft: 20 , fontSize: 17}}>078 222 4375</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#000000" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20, fontSize: 17}}>bellam@gmail.com</Text>
        </View>
      {/* </SafeAreaView> */}

           <View  style={styles.ButtonCover} > 
      
       <View  style={styles.button} > 
    
    
        <Button style={styles.button} onPress={ ()=>navigation.navigate('UpdateProfile')}title='Edit Profile' color={'#E3AC1E'} >
            
        </Button>
        </View> 
             <View  style={styles.button} > 
        <Button style={styles.button} onPress={ ()=>navigation.navigate('Login')}title='Log Out' color={'#E3AC1E'} >
           
        </Button>
         </View> 
         </View> 
         {/* </View> */}
        
        </SafeAreaView>
        
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        
        // alignItems: 'center',
        justifyContent: 'center',
    },
    icon:{
        flexDirection:'row',
        justifyContent:"space-between" ,
        // width: '100%',
    },ButtonCover : {
      flex:1,


      marginRight:60,
      marginLeft:60,
      marginTop:400,
      // marginBottom:20,
   justifyContent: 'center'
    },
    button: {
     margin:5,
    //  height: 300,
     justifyContent: 'center',
     
     
    },
    content:
    {
        margin:15,
    },
    box:{
        flex:1,
        backgroundColor:'#fff'
    },
    img:{
        width:"70%",
        borderRadius:10,
        height:'50%',
        backgroundColor:'#00BFFF'
    },
    head:
    {
        marginTop:40,
        fontSize:25,
        color:'#00BFFF',
        fontWeight:'bold',
        margin:5,


    },
    // prH:{
      
    //     color:'#00BFFF',
    //     fontSize:22,
    //     fontWeight:'bold',
    //     marginTop:2,
    // },
    // // subConent:{
    // //     borderBottomWidth:1,
    // //     width: '80%',
    // },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
        // alignItems: 'center',
        justifyContent: 'center',
        
      },
      // title: {
      //   fontSize: 24,
      //   fontWeight: 'bold',
      // },
      // caption: {
      //   fontSize: 14,
      //   lineHeight: 14,
      //   fontWeight: '500',
      // },
      row: {
        flexDirection: 'row',
        marginBottom: 10,
      },
      // infoBoxWrapper: {
      //   borderBottomColor: '#dddddd',
      //   borderBottomWidth: 1,
      //   borderTopColor: '#dddddd',
      //   borderTopWidth: 1,
      //   flexDirection: 'row',
      //   height: 100,
      // },
      // infoBox: {
      //   width: '50%',
      //   alignItems: 'center',
      //   justifyContent: 'center',
      // },
      menuWrapper: {
        marginTop: 10,
      },
      menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
      },
      menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
      },
});
export default Profile;
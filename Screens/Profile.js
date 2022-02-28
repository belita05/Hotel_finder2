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
        <View style ={styles.picture}>     
      <Avatar size={200} source={require('../assets/images/profile.png')}></Avatar>
      </View>
        <View style={styles.row}>
          <Icons name="person" color="#000000" size={25}/>
          <Text style={{color:"#777777", marginLeft: 20, fontSize: 17}}>Bella Tau</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#000000" size={25} />
          
          <Text style={{color:"#777777", marginLeft: 20 , fontSize: 17}}>078 222 4375</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#000000" size={25}/>
          <Text style={{color:"#777777", marginLeft: 20, fontSize: 17}}>bellam@gmail.com</Text>
        </View>

           <View  style={styles.ButtonCover}> 
      
       <View  style={styles.button} > 
    
    
        <Button style={styles.button} onPress={ ()=>navigation.navigate('UpdateProfile')}title='Edit Profile' color={'#E3AC1E'} >
            
        </Button>
        </View> 
             <View  style={styles.button} > 
        <Button style={styles.button} onPress={ ()=>navigation.navigate('Login')}title='Log Out' color={'#E3AC1E'} >
           
        </Button>
         </View> 
         </View> 
         
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',

    },

    ButtonCover : {
      flex:1,
      marginRight:60,
      marginLeft:60,
      marginTop: 250,
     justifyContent: 'center'
    },

    button: {
     margin:5,
     justifyContent: 'center',
     
     
    },
    content:
    {
        margin:15,
    },
    picture: {
    alignItems: 'center',
    marginBottom: 100,
    marginTop: 30
    },
    box:{
        flex:1,
        backgroundColor:'#fff'
    },
    
    head:
    {
        marginTop:40,
        fontSize:25,
        color:'#00BFFF',
        fontWeight:'bold',
        margin:5,
},
        userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
        justifyContent: 'center',
        
      },
     
      row: {
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'center',
        
      },

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
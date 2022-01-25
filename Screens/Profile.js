import React from 'react';
import { View , Text,StyleSheet,SafeAreaView,   TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import * as ImagePicker from 'expo-image-picker';
const Profile  =({navigation}) =>{
    return(
        <>
        <SafeAreaView style ={styles.container}>
            <View style={styles.userInfoSection}>
            {/* <View style={{ marginTop: 10, marginLeft: 140, borderRadius: 10, height: '40%'}}>
            <Avatar size={90} source={require('../assets/images/lodge1.png')}></Avatar> */}
          
           
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

     </View>
     {/* </View> */}
     {/* </View> */}

     <SafeAreaView style={styles.userInfoSection}>
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
      </SafeAreaView>

      
      
      <View  style={styles.button} >
        <TouchableOpacity onPress={ ()=>navigation.navigate('UpdateProfile')}>
            <Text style={{color:"#fff", }}>
                Edit Profile 
            </Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={ ()=>navigation.navigate('SignIn') }   >
            <Text style={{color:"#fff"}} >
                Log Out 
            </Text>
        </TouchableOpacity>
        
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
    },
    button: {
        backgroundColor: "#E37D1E",
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: '6%',
        marginLeft:35,
        marginTop:18
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
      title: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
      },
      row: {
        flexDirection: 'row',
        marginBottom: 10,
      },
      infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
      },
      infoBox: {
        width: '50%',
        alignItems: 'center',
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
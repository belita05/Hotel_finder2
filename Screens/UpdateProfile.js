import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ImageBackground, TextInput, StyleSheet, Button,Platform ,Image} from 'react-native';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const UpdateProfile = () => {
    const navigation = useNavigation();
const [image, setImage] = useState('./assets/image/profile.png');
const pickImage = async () => {
let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  console.log(result);

  if (!result.cancelled) {
    setImage(result.uri);
  }
}
return (
        <>
        <ScrollView>
                 <View style={styles.container}>
                     {/* <View style={{margin:30}}> */}
                     <View style={{alignItems:"center", marginTop:5}}>
                       {/* <TouchableOpacity onPress={pickImage}>
                 <Avatar size={80} source={require('../Img/Ellipse.png')}></Avatar>
                 </TouchableOpacity> */}
                 <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',paddingBottom: 50 }}>
   
      {image && <Avatar rounded size={100} source={{ uri: image }}  />}
      
      <Icons name="camera" color="#000000" size={20} onPress={pickImage} />
    </View>
                 </View>
             
                       
                       <View style={styles.action}>
         <Icons name="person" color="#000000" size={20}/>
          <TextInput
            placeholder="First Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color:'black',
              },
            ]}
          />
        </View>  
        <View style={styles.action}>
         <Icons name="person" color="#000000" size={20}/>
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color:'black',
              },
            ]}
          />
        </View>
        <View style={styles.action}>
         <Icon name="phone" color="#000000" size={20} />
          <TextInput
            placeholder="Phone"
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: 'black',
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <Icon name="email" color="#000000" size={20}/>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#666666"
            keyboardType="email-address"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: 'black',
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <Icon name="lock" color="#000000" size={20}/>
          <TextInput
            placeholder="Create Password"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: 'black',
              },
            ]}
          />
           <Icon name="eye" color={'#000000'} size={20} />
        </View>
        <View style={styles.action}>
          <Icon name="lock" color="#000000" size={20}/>
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: 'black',
              },
            ]}
          />
           <Icon name="eye" color={'#000000'} size={20} />
        </View>
        
       <View style={{marginTop: 300,justifyContent: 'center',width:300,height:50, marginLeft: 70 }}>
        <Button onPress={()=> navigation.navigate("Profile")} title='Submit' color={'#E3AC1E'} ></Button>
        </View>
        {/* <TouchableOpacity style={styles.commandButton} onPress={() => navigation.navigate ("Profile")}>
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity> */}
         {/* <TouchableOpacity onPress={() => navigation.navigate("Password")}>
                        <Text style= {{color: '#fff', justifyContent: "center", alignItems: "center", marginBottom: 5}}>
                        Forgot Password? Click here
                        </Text>
                    </TouchableOpacity> */}
                        
                </View> 
                {/* </View>     */}
                </ScrollView>
        </>
    )
    
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor:'#fff',

      
    },
    commandButton: {
    //   padding: 10,
      borderRadius: 5,
      backgroundColor: '#E3AC1E',
      alignItems: 'center',
    //   marginTop: 10,
    //   flex:1,
    //   marginBottom:20,
    //   justifyContent: 'flex-end',
      width:300,
      height:50
    },
    panel: {
      padding: 20,
      backgroundColor: '#FFFFFF',
      paddingTop: 20,
      
    },
    header: {
      backgroundColor: '#FFFFFF',
      shadowColor: '#333333',
      shadowOffset: {width: -1, height: -3},
      shadowRadius: 2,
      shadowOpacity: 0.4,
      paddingTop: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    panelHeader: {
      alignItems: 'center',
    },
    panelHandle: {
      width: 40,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#00000040',
      marginBottom: 10,
    },
    panelTitle: {
      fontSize: 27,
      height: 35,
    },
    panelSubtitle: {
      fontSize: 14,
      color: 'gray',
      height: 30,
      marginBottom: 10,
    },
    panelButton: {
    //   padding: 13,
      marginRight: 20,
      marginLeft: 20,
      borderRadius: 5,
      backgroundColor: '#FF6347',
    //   alignItems: 'center',
    //   marginVertical: 7,
    },
    panelButtonTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white',
    },
    action: {
      flexDirection: 'row',
      marginTop: 15,
      marginLeft: 15,
      marginRight: 20,
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 2,
    },
    actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5,
    },
    textInput: {
      flex: 1,
      paddingLeft: 10,
      color: '#05375a',
      fontSize: 20
    },
  });
export default UpdateProfile;
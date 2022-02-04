import React from 'react';
import { SafeAreaView, Text, View, StyleSheet,TextInput,TouchableOpacity  } from 'react-native';
import { Avatar } from 'react-native-elements';
<<<<<<< HEAD
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
=======
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Feather from 'react-native-vector-icons/Feather';
>>>>>>> 23a6e927189ab9b54ecf4242c9eba44a1d4d0cee

const Payment = ({navigation}) => {
    return (
        <>
            <SafeAreaView style={styles.container}>


                <View style={{margin:12}}>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row',marginBottom:30}}>
                        <Avatar
<<<<<<< HEAD
                            source={require('./../assets/images/image 36.png')}
                        ></Avatar>
                        <Avatar
                            source={require('./../assets/images/image 37.png')}
                        ></Avatar>
                        <Avatar
                            source={require('./../assets/images/image 38.png')}
=======
                            source={require('../assets/images/image 36.png')}
                        ></Avatar>
                        <Avatar
                            source={require('../assets/images/image 37.png')}
                        ></Avatar>
                        <Avatar
                            source={require('../assets/images/image 38.png')}
>>>>>>> 23a6e927189ab9b54ecf4242c9eba44a1d4d0cee
                        ></Avatar>
                    </View>
                    <Text> Card Number</Text>
                    <View style={styles.action}>
                   
          <TextInput
            
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            style={[
              styles.textInputStyle,
              {
                color: 'black',
              },
            ]}
          />
          </View>
<Text>Card Holder Name </Text>
          <View style={styles.action}>
   
          <TextInput
       
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            style={[
              styles.textInputStyle,
              {
                color: 'black',
              },
            ]}
          />
          </View>
          
          <View style={styles.action}>
              <Text>Expiry Date </Text>
          <TextInput
        
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            style={[
              styles.textInputStyle,
              {
                color: 'black',
              },
            ]}
          />
          </View>
          <View style={styles.action}>
              <Text>CVV </Text>
          <TextInput
        
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            style={[
              styles.textInputStyle,
              {
                color: 'black',
              },
            ]}
          />
          </View>
<<<<<<< HEAD
          <TouchableOpacity style={styles.commandButton} onPress={() => navigation.navigate('PaymentSuc')}>
=======
          <TouchableOpacity style={styles.commandButton} onPress={() => navigation.navigate('ConfirmPayment')}>
>>>>>>> 23a6e927189ab9b54ecf4242c9eba44a1d4d0cee
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
                   
                </View>

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
    textInput: {
        flex: 1,
      //   marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
      },
      action: {
        flexDirection: 'row',
        
      
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        borderRadius:10,
        paddingBottom: 5,
      },
      textInputStyle: {
        height: 35,
        borderWidth: 1,
        width:'100%',
        paddingLeft: 20,
        margin: 5,
        borderColor: '#00BFFF',
        backgroundColor: '#FFFFFF',
      },
    commandButton: {
      padding: 10,
      borderRadius: 10,
      backgroundColor: '#00BFFF',
      alignItems: 'center',
      marginTop: 10,
    },
    panelButton: {
      padding: 13,
      borderRadius: 10,
      backgroundColor: '#FF6347',
      alignItems: 'center',
      marginVertical: 7,
    },
    panelButtonTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white',
    },
})

export default Payment;
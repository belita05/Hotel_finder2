import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet,TextInput,TouchableOpacity  } from 'react-native';
import { Avatar, ThemeConsumer } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';
import style from 'react-native-datepicker/style';
import { Searchbar } from 'react-native-paper';


const Payment = ({navigation}) => {

  
    return (
        <>
            <SafeAreaView style={styles.container}>


                <View style={{margin:12}}>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row',marginBottom:30}}>
                        <Avatar

                            source={require('./../assets/images/image 36.png')}
                        ></Avatar>
                        <Avatar
                            source={require('./../assets/images/image 37.png')}
                        ></Avatar>
                        <Avatar
                            source={require('./../assets/images/image 38.png')}

                        ></Avatar>
                    </View>
                    <Text>Card Number</Text>
                    <View style={styles.action}>
                   
          <TextInput
            
            placeholderTextColor="#000000"
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
       
            placeholderTextColor="#000000"
            keyboardType="number-pad"
            autoCorrect={false}
            style={[
              styles.textInputStyle,
              {
                color: '#000000',
              },
            ]}
          />
          </View>
          <View style={style.input}>
          <Text>Expiry Date </Text>
          <View style={styles.action}>
          <TextInput
        
            placeholderTextColor="#000000"
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
          <Text>CVV </Text>
          <View style={styles.action }>
              
          <TextInput
        
            placeholderTextColor="#000000"
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
          </View>

          {/* <TouchableOpacity style={styles.commandButton} onPress={() => navigation.navigate('PaymentSuc')}>
            </TouchableOpacity> */}

          <TouchableOpacity style={styles.commandButton} onPress={() => navigation.navigate('ConfirmPayment')}>

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
        justifyContent: 'center',
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#000000',
      },
      action: {
        flexDirection: 'row',
        
      
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        borderRadius:10,
        paddingBottom: 5,
      },

      input: {
        flexDirection: 'column-reverse'

      },
      textInputStyle: {
        height: 35,
        borderWidth: 1,
        width:'100%',
        paddingLeft: 20,
        margin: 5,
      
      },
    commandButton: {
      padding: 10,
      borderRadius: 5,
      backgroundColor: '#E3AC1E',
      alignItems: 'center',
      marginTop: 10,
      width: 300,
      alignItems:'center'
      
      },
    panelButton: {
      padding: 13,
      borderRadius: 10,
      backgroundColor: '#E3AC1E',
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
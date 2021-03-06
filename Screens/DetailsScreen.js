
import React, { useState } from 'react';
import { ImageBackground, ScrollView, StatusBar, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DatePicker from 'react-native-datepicker'
import COLORS from './colors';

const DetailsScreen = ({ navigation, route }) => {
  const item = route.params;
  const [startDate, setstartDate] = useState('09-10-2022');
  const [endDate, setendDate] = useState('09-10-2022');
  const [type, setType] = useState('startDate')
  const [show, setShow] = useState(false)

  

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: COLORS.white,
        paddingBottom: 20,
      }}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="rgba(0,0,0,0)"
      />
      <ImageBackground style={style.headerImage} source={item.image}>
      </ImageBackground>
      <View>
        <View style={style.iconContainer}>
          <Icon name="place" color={COLORS.white} size={28} onPress={() => navigation.navigate("Map")} style={{ color: "#000000", marginBottom: 30 }} />
        </View>
        <View style={{ marginTop: 10, paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '400',
              color: COLORS.grey,
              marginTop: 20,
              paddingBottom: 5
            }}>
            <TouchableOpacity title='location'></TouchableOpacity>
            {item.location}
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            {/* <View style={{ flexDirection: 'row' }}>
              <View style={{ flexDirection: 'row' }}>
                <Icon name="star" size={20} color={COLORS.orange} />
                <Icon name="star" size={20} color={COLORS.orange} />
                <Icon name="star" size={20} color={COLORS.orange} />
                <Icon name="star" size={20} color={COLORS.orange} />
                <Icon name="star" size={20} color={COLORS.grey} />
              </View>
              <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 5 }}>
                4.0
              </Text>
            </View> */}
            {/* <Text style={{ fontSize: 13, color: COLORS.grey }}>365 reviews</Text> */}
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={{ lineHeight: 20, color: COLORS.grey }}>
              {item.details}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 20,
            alignItems: 'center',
          }}>
          {/* <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Price includes breakfast
          </Text> */}

        </View>
        <View style={{ flexDirection: 'row' }}>
          
            <DatePicker
              style={style.calender}
              date={startDate}
              mode="date"
              // placeholder="check in"
              format="YYYY-MM-DD"
              // minDate="0"
              // maxDate="0"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 20,
                  marginRight: 20

                },
                dateInput: {
                  marginLeft: 40,
                  width: 150,
                  backgroundColor: COLORS.white,
                }
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(startDate) => { setstartDate(startDate) }}
            />


          <DatePicker
        style={{width: 165}}
        date={endDate}
        mode="date"
        // placeholder="select date"
        format="YYYY-MM-DD"
        // minDate="2016-05-01"
        // maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 20,
            marginRight: 20
          },
          dateInput: {
            marginLeft: 40,
            width: 100,
        
            backgroundColor:COLORS.white,
          }
         
        }}
        onDateChange={(endDate) =>  {setendDate(endDate)}}
      />
        </View>
        <View style={style.btn}>
          <View style={{ flex: 1, marginBottom: 20, justifyContent: 'flex-end', width: 300, height: 50 }}>
            <Button onPress={() => navigation.navigate("Rooms")} title='Check Availability' color={'#E3AC1E'} ></Button>
          </View>
        </View>

      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  btn: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: COLORS.primary,
    marginHorizontal: 20,
    borderRadius: 10,
  },

  calender: {
    marginLeft: 30
  },

  priceTag: {
    height: 40,
    alignItems: 'center',
    marginLeft: 40,
    paddingLeft: 20,
    flex: 1,
    backgroundColor: COLORS.secondary,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
  },
  iconContainer: {
    position: 'absolute',
    height: 60,
    width: 60,
    backgroundColor: COLORS.primary,
    top: -30,
    right: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    height: 400,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    overflow: 'hidden',
  },
  header: {
    marginTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
});

export default DetailsScreen;
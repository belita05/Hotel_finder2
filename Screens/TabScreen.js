import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Profile from './Profile';
// import History from './History';
import Booking from './Booking';

const Tab = createBottomTabNavigator();

const TabScreen = () => {
    return (
        <>
            <Tab.Navigator>
          <Tab.Screen name ={"Home"} component={Home}      options={{
           headerShown: false,
           tabBarLabel: 'Home',
           tabBarColor: '#000000',
          
          tabBarIcon: ({  }) => (
          <Icon name="home" color={'#000000'} size={24} />
          ),
        }} />
{/* <Tab.Screen name ={"History"} component={History}      options={{
          headerShown: false,
          tabBarLabel: 'History',
          tabBarColor: '#E3AC1E',
          tabBarIcon: ({  }) => (
          <Icons name="history" color={'#000000'} size={24} />
          ),
        }}/> */}

<Tab.Screen name ={"Booking"} component={Booking}      options={{
          headerShown: false,
          tabBarLabel: 'Booking',
          tabBarColor: '#E3AC1E',
          tabBarIcon: ({ }) => (
          <Icon name="book" color={'#000000'} size={24} />
          ),
}}/>
        <Tab.Screen name ={"Profile"} component={Profile}      options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarColor: '#E3AC1E',
          tabBarIcon: ({}) => (
          <Icon name="person" color={ '#000000'} size={24} />
          ),
        }} />
        
         </Tab.Navigator>
        </>
    )
}
export default TabScreen;
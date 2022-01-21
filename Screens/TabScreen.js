import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Profile from './Profile';
import History from './History';




const Tab = createBottomTabNavigator();



const TabScreen = () => {
    return (
        <>
            <Tab.Navigator>
            <Tab.Screen name ={"Home"} component={Home}      options={{
          tabBarLabel: 'Home',
          tabBarColor: '#00BFFF',
          headerShown :false,
          tabBarIcon: ({ color }) => (
          <Icon name="home" color={color} size={24} />
          ),
        }} ></Tab.Screen>
<Tab.Screen name ={"History"} component={History}      options={{
          tabBarLabel: 'History',
          tabBarColor: '#00BFFF',
          tabBarIcon: ({ color }) => (
          <Icons name="history" color={color} size={24} />
          ),
        }} ></Tab.Screen>

<Tab.Screen name ={"Favorite"} component={Love}      options={{
          tabBarLabel: 'favorite',
          tabBarColor: '#00BFFF',
          tabBarIcon: ({ color }) => (
          <IconM name="favorite" color={color} size={24} />
          ),
}}> </Tab.Screen>
        <Tab.Screen name ={"Profile"} component={Profile}      options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#00BFFF',
          tabBarIcon: ({ color }) => (
          <Icon name="person" color={color} size={24} />
          ),
        }} ></Tab.Screen>
        
         </Tab.Navigator>
        </>
    )
}
export default TabScreen;
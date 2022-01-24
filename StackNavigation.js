import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './Screens/Start';
import Login from './Screens/Login';
import Home from './Screens/Home';
import Register from './Screens/Register';
import Password from './Screens/Password';
import Booking from './Screens/Booking';
import TabScreen from './Screens/TabScreen';
import DetailsScreen from './Screens/DetailsScreen';
import Map from './Screens/Map';
// import Hotels from '.Screens/Hotels';


const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator>
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name= "TabScreen" component={TabScreen}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Password" component={Password}/>
        {/* <Stack.Screen name= "Booking" component={Booking}/> */}
        {/* <Stack.Screen name= "TabScreen" component={TabScreen}/> */}
        <Stack.Screen name= "Map" component= {Map}/>
        <Stack.Screen name= "DetailsScreen" component= {DetailsScreen}/>
        {/* <Stack.Screen name= "Hotels" component= {Hotels}/> */}
        
      </Stack.Navigator>
    )
}

export default StackNavigation

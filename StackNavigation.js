import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './Screens/Start';
import Login from './Screens/Login';
import Home from './Screens/Home';
import Register from './Screens/Register';
import Password from './Screens/Password';
import TabScreen from './Screens/TabScreen';
import DetailsScreen from './Screens/DetailsScreen';
import Map from './Screens/Map';
import Payment from './Screens/Payment';
import UpdateProfile from './Screens/UpdateProfile';
import PropertyView from './Screens/PropertyView';
import Rooms from './Screens/Rooms';
import ConfirmBooking from './Screens/ConfirmBooking';
import Notification from './Screens/Notification';
import Stripe from './Screens/Stripe';



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
        <Stack.Screen name= "Map" component= {Map}/>
        <Stack.Screen name= "DetailsScreen" component= {DetailsScreen}/>
        <Stack.Screen name= "Payment" component={Payment}/>
        <Stack.Screen name= "UpdateProfile" component={UpdateProfile}/>
        <Stack.Screen name= "PropertyView" component={PropertyView}/>
        <Stack.Screen name= "Rooms" component={Rooms}/>
        <Stack.Screen name= "ConfirmBooking" component={ConfirmBooking}/>
        <Stack.Screen name= "Notification" component={Notification}/>
        <Stack.Screen name= "Stripe" component={Stripe}/>
        </Stack.Navigator>
    )
}

export default StackNavigation;

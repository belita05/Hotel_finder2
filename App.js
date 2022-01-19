import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text,View } from 'react-native';
import StackNavigation from './StackNavigation';

export default function App() {
    return(
        <NavigationContainer>
            <StackNavigation/>
            <StatusBar style='dark'></StatusBar>
        </NavigationContainer>
       
     
);
    }
    


import React, { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    Button,
    TextInput,
    Input,
    Pressable,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack'
import Home from './screens/home';
import Ar from './screens/AR';
import Vr from './screens/VR';
import { styles } from './styles/style';


const Tab=createStackNavigator();


function App(){
  
    return(
        <NavigationContainer>
           <Tab.Navigator>
           <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Ar" component={Ar} options={{header:()=>null}}/>
            <Tab.Screen name="Vr" component={Vr} options={{header:()=>null}}/>             
           </Tab.Navigator>
        </NavigationContainer>
    )
}

export default App;
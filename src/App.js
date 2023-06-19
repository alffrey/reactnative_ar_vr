
import React from 'react';
// import {
//     StyleSheet,
//     SafeAreaView,
//     View,
//     Text,
//     Button,
//     TextInput,
//     Input,
//     Pressable,
// } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createStackNavigator} from '@react-navigation/stack'
import Home from './screens/home';
import AR from './screens/AR';
import AR_Hello from './screens/hello_world_scene';
import VR from './screens/VR';
// import { styles } from './styles/style';


// const Tab=createStackNavigator();
const Stack = createNativeStackNavigator();

function App(){
  
    return(
        // <NavigationContainer>
        //     <Tab.Navigator>
        //         <Tab.Screen name="HOME" component={Home} />
        //         <Tab.Screen name="AR" component={AR} options={{header:()=>null}}/>
        //         <Tab.Screen name="VR" component={VR} options={{header:()=>null}}/>             
        //    </Tab.Navigator>
        // </NavigationContainer>

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="AR" component={AR} />
                <Stack.Screen name="AR_Hello" component={AR_Hello} />
                <Stack.Screen name="VR" component={VR} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;
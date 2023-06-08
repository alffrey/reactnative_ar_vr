import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import home from './home';
import ar from './ar';
import vr from './vr';
const Stack=createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      >
        <Stack.Screen
          name="Home"
          component={home}
        />
        <Stack.Screen
          name="AR"
          component={ar}
        />
        <Stack.Screen
          name="VR"
          component={vr}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

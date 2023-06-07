import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { styles } from '../styles/style';
const Home= ({ navigation }) => {

    const handler1=()=>{
        navigation.navigate('Ar');
    }
    const handler2=()=>{
        navigation.navigate('Vr');
    }
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handler1}>
        <Text style={styles.buttonText}>View in AR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handler2}>
        <Text style={styles.buttonText}>View in VR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

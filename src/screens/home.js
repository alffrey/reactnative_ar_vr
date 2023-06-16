import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { styles } from '../styles/style';


const Home= ({ navigation }) => {

  const handleNavigation = (view) => {
      navigation.navigate(view);
  }
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => handleNavigation('AR')}>
        <Text style={styles.buttonText}>View in AR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleNavigation('AR_Hello')}>
        <Text style={styles.buttonText}>View in AR_Hello</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleNavigation('VR')}>
        <Text style={styles.buttonText}>View in VR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

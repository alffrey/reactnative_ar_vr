import React, { useEffect, useRef } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ImageBackground, Animated } from 'react-native';

import logo from '../../assets/images/logo.png';

const Home = ({ navigation }) => {
  const translationAnimation = useRef(new Animated.Value(-200)).current; // Ref for translation animation
  const rotationAnimation = useRef(new Animated.Value(0)).current; // Ref for rotation animation

  const handleNavigation = (view) => {
    navigation.navigate(view);
  };

  useEffect(() => {
    const translationAnimationConfig = {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
    };

    const rotationAnimationConfig = {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    };

    Animated.parallel([
      Animated.spring(translationAnimation, translationAnimationConfig),
      Animated.timing(rotationAnimation, rotationAnimationConfig),
    ]).start();
  }, []);

  const rotationInterpolation = rotationAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <ImageBackground source={logo} style={styles.backgroundImage} resizeMode="contain">
      <Animated.View
        style={[
          styles.container,
          {
            transform: [
              { translateY: translationAnimation },
              { rotate: rotationInterpolation },
            ],
          },
        ]}
      >
        <Text style={styles.title}>Welcome to the Container Store</Text>
        <Text style={styles.subtitle}>Choose your immersive experience:</Text>
        <TouchableOpacity style={styles.button} onPress={() => handleNavigation('AR')}>
          <Text style={styles.buttonText}>View in Augmented Reality</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNavigation('VR')}>
          <Text style={styles.buttonText}>View in Virtual Reality</Text>
        </TouchableOpacity>
      </Animated.View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '75%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#EE82EE',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 10,
    width: '100%',
    maxWidth: 300,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Home;

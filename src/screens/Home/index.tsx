import React, { useRef } from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';

export function Home() {

  const windowHeight = Dimensions.get('window').height;
  const popAnimation = useRef(new Animated.Value(windowHeight * -1)).current;

  function popIn() {
    Animated.timing(popAnimation, {
      toValue: windowHeight * 0.35 * -1,
      duration: 300,
      useNativeDriver: true
    }).start(popOut);
  };

  function popOut() {
    setTimeout(() => {
      Animated.timing(popAnimation, {
        toValue: windowHeight * -1,
        duration: 300,
        useNativeDriver: true
      }).start();
    }, 2000);
  }

  function instantPopOut() {
    Animated.timing(popAnimation, {
      toValue: windowHeight * -1,
      duration: 150,
      useNativeDriver: true
    }).start();
  }

  return (
    <View style={styles.container} >

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ADA8B6'
  }
})

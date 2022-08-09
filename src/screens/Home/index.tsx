import React, { useRef, useState } from 'react';
import { Animated, Dimensions, SafeAreaView, StyleSheet } from 'react-native';

import { Button } from '../../components/Button';
import { ToastAnimated } from '../../components/ToastAnimated';

export function Home() {
  const [status, setStatus] = useState('');

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
    }, 5000);
  }

  function instantPopOut() {
    Animated.timing(popAnimation, {
      toValue: windowHeight * -1,
      duration: 150,
      useNativeDriver: true
    }).start();
  }

  function handleSuccess() {
    setStatus('success');
    popIn();
  }

  function handleFail() {
    setStatus('fail');
    popIn();
  }

  return (
    <SafeAreaView style={styles.container} >
      <ToastAnimated
        status={status}
        style={{
          transform: [{
            translateY: popAnimation
          }]
        }}
        onPress={instantPopOut}
      />
      <Button
        title='Success Message'
        onPress={handleSuccess}
      />
      <Button
        title='Fail Message'
        onPress={handleFail}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

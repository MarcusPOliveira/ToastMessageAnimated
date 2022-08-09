import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest} >
      <Text style={styles.buttonTitle}> {title} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#573280',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    width: '80%',
    height: 56,
    borderRadius: 10
  },
  buttonTitle: {
    color: '#FFF',
    fontWeight: 'bold'
  }
})

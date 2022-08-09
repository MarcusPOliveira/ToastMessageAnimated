import React from 'react';
import { Animated, StyleProp, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View, ViewProps } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {
  status: string;
  containerStyle?: Animated.AnimatedProps<StyleProp<ViewProps>>;
}

export function ToastAnimated({ status, containerStyle, ...rest }: Props) {
  return (
    <Animated.View style={styles.container} {...rest} >
      <View style={styles.toastRow}>
        <AntDesign
          name={status === "success" ? "checkcircleo" : "closecircleo"}
          size={24}
          color={status === "success" ? '#6dcf81' : '#bf6060'}
        />
        <View style={styles.textContent}>
          <Text style={styles.title}>
            {status === "success" ? 'Success!' : 'Failed!'}
          </Text>
          <Text style={styles.message}>
            {status === "success" ? "You pressed the success button!" : "You pressed the fail button!"}
          </Text>
        </View>
        <TouchableOpacity  {...rest}>
          <Entypo
            name="cross"
            size={24}
            color='#000'
          />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: 350,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  toastRow: {
    flexDirection: 'row',
    width: "90%",
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  textContent: {

  },
  title: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  message: {
    fontSize: 12,
  }
})

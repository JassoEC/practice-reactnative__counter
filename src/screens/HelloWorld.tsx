import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const HelloWorld = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.helloText}>Hola Mundo component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  helloText: {
    color: 'black',
    fontSize: 50,
    fontWeight: 'bold',
  },
});

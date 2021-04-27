import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
    paddingHorizontal: 50,
  },
  title: {
    fontSize: 25,
  },
});

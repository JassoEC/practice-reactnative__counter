import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Fab} from '../components/Fab';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(10);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 40}}>Couter: {counter}</Text>
      <Fab title="+1" onPress={() => setCounter(counter + 1)} />
      <Fab title="-1" onPress={() => setCounter(counter - 1)} position="bl" />
    </View>
  );
};

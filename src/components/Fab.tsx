import React from 'react';
import {
  Text,
  TouchableOpacity,
  Platform,
  View,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';

type Br = 'br';
type Bl = 'bl';

interface PropTypes {
  title: string;
  position?: Br | Bl;
  onPress: () => void;
}

export const Fab = ({title, onPress, position = 'br'}: PropTypes) => {
  const ios = () => (
    <TouchableOpacity
      style={[
        styles.fabLocation,
        position === 'br' ? styles.right : styles.left,
      ]}
      activeOpacity={0.8}
      onPress={onPress}>
      <View style={styles.fab}>
        <Text style={styles.fabText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );

  const android = () => (
    <View
      style={[
        styles.fabLocation,
        position === 'br' ? styles.right : styles.left,
      ]}>
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple('#28435B', false, 30)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );

  return Platform.OS === 'android' ? android() : ios();
};

const styles = StyleSheet.create({
  fab: {
    backgroundColor: '#5856D6',
    width: 70,
    height: 70,
    borderRadius: 40,
    display: 'flex',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  },
  fabText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  fabLocation: {
    position: 'absolute',
    bottom: 40,
  },
  right: {
    right: 30,
  },
  left: {
    left: 30,
  },
});

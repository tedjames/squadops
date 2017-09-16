import React, { Component } from 'react';
import { View } from 'react-native';

export default class StatusIcon extends Component {
  render() {
    return (
      <View style={styles.statusIcon}>
        <View style={styles.outerCircle}>
          <View style={styles.innerCircle} />
        </View>
      </View>
    );
  }
}

const styles = {
  outerCircle: {
    height: 25,
    width: 25,
    borderColor: '#66f06f',
    borderRadius: 12.5,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    shadowColor: '#73e97b',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 8,
  },
  innerCircle: {
    height: 15,
    width: 15,
    borderRadius: 7.5,
    borderWidth: 2,
    borderColor: '#41e44c',
    backgroundColor: 'transparent',
    shadowColor: '#73e97b',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 3.5,
  },
  statusIcon: {
    transform: [{ scale: 0.55 }],
    height: 25,
    width: 25,
    backgroundColor: 'transparent',
    opacity: 0.9
  }
};

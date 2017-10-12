import React from 'react';
import { View, Text, Animated } from 'react-native';

const EventName = ({ name, type, opacity, translateY }) => {
  return (
    <Animated.View style={{ top: 15, marginBottom: 30, opacity: opacity || 1, transform: [{ translateY: translateY || 0 }] }}>
      <View style={{ flexDirection: 'row', marginTop: 50, marginLeft: 15, marginBottom: 7 }}>
        <Text style={styles.slash}>//</Text>
        <Text style={styles.eventType}>{type || 'UNKNOWN'}</Text>
      </View>
      <Text style={styles.eventName}>{name || 'UNKNOWN'}</Text>
    </Animated.View>
  );
};

const styles = {
  eventType: {
    fontFamily: 'rubik-light',
    fontSize: 11,
    letterSpacing: 1.25,
    color: '#a1a1a1'
  },
  slash: {
    fontFamily: 'rubik',
    fontSize: 8,
    letterSpacing: 1.5,
    color: '#a1a1a1',
    marginRight: 3,
    top: 2,
    opacity: 0.75
  },
  eventName: {
    marginLeft: 14,
    marginTop: 2.5,
    fontFamily: 'syncopate',
    fontSize: 28,
    letterSpacing: 1.2,
    color: '#3b3b3b',
    alignSelf: 'flex-start',
    textShadowColor: 'rgba(0, 0, 0, 0.025)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
    elevation: 1,
  },
};

export default EventName;

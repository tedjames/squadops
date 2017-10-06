import React from 'react';
import { View, Text } from 'react-native';

const EventName = ({ name, type }) => {
  return (
    <View>
      <View style={{ flexDirection: 'row', marginTop: 70, marginLeft: 15, marginBottom: 7 }}>
        <Text style={styles.slash}>//</Text>
        <Text style={styles.eventType}>{type || 'OPERATION'}</Text>
      </View>
      <Text style={styles.eventName}>{name || 'UNKNOWN'}</Text>
    </View>
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
    marginBottom: 10,
    marginTop: 2.5,
    fontFamily: 'syncopate',
    fontSize: 28,
    letterSpacing: 1.2,
    color: '#505050',
    alignSelf: 'flex-start',
    textShadowColor: 'rgba(0, 0, 0, 0.025)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
    elevation: 1,
  },
};

export default EventName;

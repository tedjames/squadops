import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

const InfoBar = ({ session1, session2, location }) => {
  return (
    <View style={{ transform: [{ scale: 0.995 }], opacity: 0.415, width: '100%', justifyContent: 'space-between', marginTop: 15, flexDirection: 'row', paddingLeft: 12.5, paddingRight: 12.5, alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', top: 1 }}>
        <MaterialCommunityIcons style={styles.clockIcon} name="clock" size={12.5} color="#888" />
        <Text style={styles.time}>{session1}</Text>
        {session2 ? <Text style={styles.slash}>//</Text> : null}
        {session2 ? <Text style={styles.time}>{session2}</Text> : null}
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', top: 1, opacity: 0.95 }}>
        <FontAwesome style={styles.locationIcon} name="location-arrow" size={10} color="#999" />
        <Text style={styles.location}>{location}</Text>
      </View>
    </View>
  );
};

const styles = {
  clockIcon: {
    marginRight: 7.5,
    top: 0.5
  },
  locationIcon: {
    marginRight: 8
  },
  slash: {
    fontFamily: 'rubik',
    fontSize: 8,
    letterSpacing: 1.75,
    color: '#555',
    marginRight: 5,
    marginLeft: 5
  },
  time: {
    fontFamily: 'rubik',
    fontSize: 10.5,
    letterSpacing: 1.5,
    color: '#444',
  },
  location: {
    fontFamily: 'rubik',
    fontSize: 10.5,
    letterSpacing: 1.5,
    color: '#333'
  },
};

export default InfoBar;

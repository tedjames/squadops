import React from 'react';
import { View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo';
import StatusIcon from '../icons/statusIcon';

const Profile = ({ name, status, hours, ops, certs }) => {
  const styles = {
    divider: {
      height: 0.5,
      width: '100%',
      backgroundColor: '#ccc',
      marginTop: 27.5,
      marginBottom: 30
    },
    statsBar: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'transparent'
    },
    stat: {
      flex: 1,
      backgroundColor: 'transparent'
    },
    statValue: {
      fontFamily: 'roboto-light',
      fontSize: 32,
      letterSpacing: 0.025,
      backgroundColor: 'transparent',
      color: '#32383c',
      marginBottom: 2.5,
      right: 1
    },
    statName: {
      fontFamily: 'rubik',
      fontSize: 11,
      letterSpacing: 0.45,
      backgroundColor: 'transparent',
      color: '#747b8a',
      left: 2
    },
    avatar: {
      height: 65,
      width: 65,
      borderRadius: 32.5,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.15,
      shadowRadius: 14,
      elevation: 1
    },
    userInfo: {
      marginLeft: 32.5,
      marginTop: 35
    },
    name: {
      fontFamily: 'syncopate',
      fontSize: 26,
      letterSpacing: 1,
      backgroundColor: 'transparent',
      color: '#252525',
      marginTop: 35
    },
    status: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      right: 3
    },
    statusText: {
      fontFamily: 'rubik',
      fontSize: 12,
      letterSpacing: 0.25,
      backgroundColor: 'transparent',
      color: '#747b8a',
      marginLeft: 5
    }
  };
  return (
    <View style={styles.userInfo}>
      <View style={styles.avatar}>
        <Image
          source={{ uri: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/0f/0f15e3ef2fa010110bb70fc833fc9772c3deaf0b_full.jpg' }}
          style={{ flex: 1, height: 65, width: 65, borderRadius: 32.5 }}
        />
      </View>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.status}>
        <StatusIcon />
        <Text style={styles.statusText}>{status}</Text>
      </View>
      <LinearGradient style={styles.divider} start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}} locations={[0.3, 1]} colors={['#ccd5da', '#fff']} />
      <View style={styles.statsBar}>
        <View style={styles.stat}>
          <Text style={styles.statValue}>{hours}</Text>
          <Text style={styles.statName}>Hours</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>{ops}</Text>
          <Text style={styles.statName}>Ops</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>{certs}</Text>
          <Text style={styles.statName}>Certifications</Text>
        </View>
      </View>
    </View>
  );
}

export default Profile;

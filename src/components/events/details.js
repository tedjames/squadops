import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import Section from './section';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

const InfoBar = ({ session1, session2, location }) => {
  const infoBarStyles = {
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
  return (
    <View style={{ transform: [{ scale: 0.995 }], opacity: 0.415, width: '100%', justifyContent: 'space-between', marginTop: 15, flexDirection: 'row', paddingLeft: 12.5, paddingRight: 12.5, alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', top: 1 }}>
        <MaterialCommunityIcons style={infoBarStyles.clockIcon} name="clock" size={12.5} color="#888" />
        <Text style={infoBarStyles.time}>{session1}</Text>
        {session2 ? <Text style={infoBarStyles.slash}>//</Text> : null}
        {session2 ? <Text style={infoBarStyles.time}>{session2}</Text> : null}
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', top: 1, opacity: 0.95 }}>
        <FontAwesome style={infoBarStyles.locationIcon} name="location-arrow" size={10} color="#999" />
        <Text style={infoBarStyles.location}>{location}</Text>
      </View>
    </View>
  );
};

const Details = ({ data }) => {
  const { width } = Dimensions.get('window');
  const styles = {
    description: {
      fontFamily: 'open-sans',
      fontSize: 14,
      color: '#3e3e3e',
      paddingLeft: 12.5,
      paddingRight: 12.5,
      marginTop: 12.5,
      opacity: 0.75,
      lineHeight: 22
    },
    sectionNote: {
      fontFamily: 'open-sans',
      fontSize: 14,
      color: '#3e3e3e',
      paddingLeft: 12.5,
      paddingRight: 12.5,
      opacity: 0.75,
      lineHeight: 22
    },
  };
  return (
    <View style={{ width }}>
      <InfoBar session1="15:30" session2="20:30" location="AL BASRAH" />

      <Text style={styles.description}>{data.description}</Text>

      <Section title="VICTORY CONDITIONS">
        {data.victoryConditions.map((data) => <Text key={data.key} style={styles.sectionNote}>- {data.value}</Text> )}
      </Section>

      <Section title="INFANTRY ASSETS">
        {data.infantryAssets.map((data) => <Text key={data.key} style={styles.sectionNote}>- {data.value}</Text> )}
      </Section>

      <Section title="SUPPORT ASSETS">
        {data.supportAssets.map((data) => <Text key={data.key} style={styles.sectionNote}>- {data.value}</Text> )}
      </Section>

      <Section title="LOGISTIC ASSETS">
        {data.logisticAssets.map((data) => <Text key={data.key} style={styles.sectionNote}>- {data.value}</Text> )}
      </Section>

      <Section title="MOBILITY RESTRICTIONS">
        {data.mobilityRestrictions.map((data) => <Text key={data.key} style={styles.sectionNote}>- {data.value}</Text> )}
      </Section>

      <Section title="BEFORE LIVE">
        {data.beforeLive.map((data) => <Text key={data.key} style={styles.sectionNote}>- {data.value}</Text> )}
      </Section>

      <Section title="SPECIALTY RULES">
        {data.specialtyRules.map((data) => <Text key={data.key} style={styles.sectionNote}>- {data.value}</Text> )}
      </Section>

      <Section title="INTEL">
        {data.intel.map((data) => <Text key={data.key} style={styles.sectionNote}>- {data.value}</Text> )}
      </Section>
    </View>
  );
};

export default Details;

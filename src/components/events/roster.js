import React from 'react';
import { View, Dimensions, Text, TouchableOpacity } from 'react-native';
import Section from './section';

const RosterRow = ({ data }) => {
  const { key, user1 } = data;
  const renderUser2 = (user2) => {
    return (
      <TouchableOpacity style={styles.userButton}>
        <Text style={styles.user}>{user2}</Text>
      </TouchableOpacity>
    );
  }
  const styles = {
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'space-between',
      paddingBottom: 2.5,
      paddingTop: 2.5
    },
    user: {
      alignSelf: 'center',
      textAlign: 'center',
      fontFamily: 'open-sans',
      fontSize: 14,
      color: '#3e3e3e',
      opacity: 0.75,
      lineHeight: 22
    },
    userButton: {
      paddingBottom: 2.5,
      paddingTop: 2.5,
      width: '50%',
    }
  }
  return (
    <View style={styles.row}>
      <TouchableOpacity style={styles.userButton}>
        <Text style={styles.user}>{user1}</Text>
      </TouchableOpacity>
      {data.user2 ? renderUser2(data.user2) : null}
    </View>
  );
};

const Roster = ({ data }) => {
  const { width } = Dimensions.get('window');
  const renderRow = (data) => {
    return (
      <RosterRow key={data.key} data={data} />
    );
  };
  return (
    <View style={{ width }}>
      <Section title="COMMANDS">
        {data.commands.map(renderRow)}
      </Section>
      <Section title="SQUAD LEADERS">
        {data.squadLeaders.map(renderRow)}
      </Section>
      <Section title="EVENT ADMINS">
        {data.commentators.map(renderRow)}
      </Section>
      <Section title="COMMENTATORS">
        {data.commentators.map(renderRow)}
      </Section>
      <Section title="SPECIAL GUESTS">
        {data.specialGuests.map(renderRow)}
      </Section>
      <Section title="CONFIRMED">
        {data.confirmed.map(renderRow)}
      </Section>
      <Section title="RESERVES">
        {data.reserves.map(renderRow)}
      </Section>
    </View>
  );
};

export default Roster;

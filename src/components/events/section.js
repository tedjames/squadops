import React from 'react';
import { View, Text } from 'react-native';

const SectionDivider = ({ title, children }) => {
  return (
    <View>
      <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginTop: 25, marginBottom: 15 }}>
        <View style={styles.sectionDividerEnd} />
        <View style={styles.sectionDivider} />
        <Text style={styles.sectionName}>{title || 'UNKNOWN'}</Text>
        <View style={styles.sectionDivider} />
        <View style={styles.sectionDividerEnd} />
      </View>
      {children}
    </View>
  );
};

const styles = {
  sectionDivider: {
    flex: 1,
    height: 0.5,
    backgroundColor: '#252525',
    opacity: 0.15
  },
  sectionDividerEnd: {
    height: 1.5,
    backgroundColor: '#252525',
    opacity: 0.15,
    flex: 0.1
  },
  sectionName: {
    fontFamily: 'rubik',
    marginRight: 10,
    marginLeft: 10,
    alignSelf: 'center',
    fontSize: 11,
    color: '#252525',
    letterSpacing: 0.8,
    opacity: 0.55
  },
};

export default SectionDivider;

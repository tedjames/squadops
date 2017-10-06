import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const SectionBar = () => {
  return (
    <View style={styles.sectionBar}>
      <TouchableOpacity style={styles.sectionButton}><Text style={styles.sectionTitle}>US FORCES</Text></TouchableOpacity>
      <Text style={styles.sectionDivider}>|</Text>
      <TouchableOpacity style={styles.sectionButton}><Text style={[styles.sectionTitle, styles.selectedTitle]}>INS FORCES</Text></TouchableOpacity>
      <Text style={styles.sectionDivider}>|</Text>
      <TouchableOpacity style={styles.sectionButton}><Text style={styles.sectionTitle}>SESSION I</Text></TouchableOpacity>
      <Text style={styles.sectionDivider}>|</Text>
      <TouchableOpacity style={styles.sectionButton}><Text style={styles.sectionTitle}>SESSION II</Text></TouchableOpacity>
    </View>
  );
};

const styles = {
  sectionBar: {
    justifyContent: 'space-between',
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
  },
  sectionButton: {
    paddingTop: 20
  },
  sectionTitle: {
    fontFamily: 'rubik-light',
    color: '#000000',
    letterSpacing: 2.25,
    fontSize: 10,
    backgroundColor: 'transparent',
    opacity: 0.5,
  },
  sectionDivider: {
    fontFamily: 'rubik-light',
    color: '#000000',
    letterSpacing: 2.25,
    fontSize: 10,
    backgroundColor: 'transparent',
    opacity: 0.4,
    paddingTop: 20
  },
  selectedTitle: {
    opacity: 0.75
  }
};

export default SectionBar;

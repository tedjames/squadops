import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const SectionBar = () => {
  return (
    <View>
      <View style={styles.sectionBar}>
        <TouchableOpacity style={styles.sectionButton}><Text style={styles.sectionTitle}>US FORCES</Text></TouchableOpacity>
        <Text style={styles.buttonDivider}>|</Text>
        <TouchableOpacity style={styles.sectionButton}><Text style={[styles.sectionTitle, styles.selectedTitle]}>INS FORCES</Text></TouchableOpacity>
        <Text style={styles.buttonDivider}>|</Text>
        <TouchableOpacity style={styles.sectionButton}><Text style={styles.sectionTitle}>SESSION I</Text></TouchableOpacity>
        <Text style={styles.buttonDivider}>|</Text>
        <TouchableOpacity style={styles.sectionButton}><Text style={styles.sectionTitle}>SESSION II</Text></TouchableOpacity>
      </View>
      <View style={styles.divider} />
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
    fontFamily: 'rubik',
    color: '#000000',
    letterSpacing: 2.25,
    fontSize: 10,
    backgroundColor: 'transparent',
    opacity: 0.5,
  },
  selectedTitle: {
    opacity: 0.75,
    transform: [{ scale: 1.03 }],
  },
  buttonDivider: {
    fontFamily: 'rubik-light',
    color: '#000000',
    letterSpacing: 2.25,
    fontSize: 10,
    backgroundColor: 'transparent',
    opacity: 0.4,
    paddingTop: 20
  },
  divider: {
    height: 0.5,
    backgroundColor: '#000',
    opacity: 0.05,
    marginTop: 10,
    width: '100%'
  },
};

export default SectionBar;

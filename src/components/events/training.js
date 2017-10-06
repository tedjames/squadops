import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { BlurView, LinearGradient } from 'expo';
import { Entypo, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import HeaderImage from './HeaderImage';
import HeaderCard from './HeaderCard';
import EventName from './EventName';

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

class Training extends Component {
  static navigationOptions = {
    title: 'Training',
    header: null
  }

  render() {
    const { goBack } = this.props.navigation;
    const image = require('../../../assets/images/forest.png');

    return (
      <View style={{ flex: 1 }}>

        <HeaderImage image={image} />
        <HeaderCard image={image} day="03" month="SEPTEMBER" />

        <LinearGradient style={{ flex: 1 }} colors={['#eee', '#fff']}>
          <ScrollView style={styles.infoContainer}>
            <EventName type="OPERATION" name="OPEN ROAD" />

            <SectionBar />
            <View style={styles.divider} />

            <View style={{ opacity: 0.425, width: '100%', justifyContent: 'space-between', marginTop: 15, flexDirection: 'row', paddingLeft: 12.5, paddingRight: 12.5, alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <MaterialCommunityIcons style={styles.clockIcon} name="clock" size={12.5} color="#888" />
                <Text style={styles.time}>15:30</Text>
                <Text style={styles.slash}>//</Text>
                <Text style={styles.time}>20:30</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome style={styles.locationIcon} name="location-arrow" size={10} color="#999" />
                <Text style={styles.time}>AL BASRAH</Text>
              </View>
            </View>

            <View>
              <Text style={styles.description}>US command has identified an insurgent stronghold within a village, just a few kilometers from our forward operating base in the suburbs of Al Basrah. Our objective is to eliminate all hostiles and protect the FOB.</Text>
            </View>

          </ScrollView>
        </LinearGradient>

      </View>
    );
  }
}

const styles = {
  description: {
    fontFamily: 'open-sans-light',
    fontSize: 17.5,
    color: '#444',
    paddingLeft: 12.5,
    paddingRight: 12.5,
    marginTop: 10,
    opacity: 0.75,
    lineHeight: 24
  },
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
    fontSize: 11,
    letterSpacing: 1.5,
    color: '#444',
  },
  divider: {
    height: 0.5,
    backgroundColor: '#000',
    opacity: 0.05,
    marginTop: 10,
    width: '100%'
  },
  infoContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
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
  selectedTitle: {
    opacity: 0.8
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
};

export { Training };

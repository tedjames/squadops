import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { BlurView, LinearGradient } from 'expo';
import { Entypo, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import HeaderImage from './HeaderImage';
import HeaderCard from './HeaderCard';
import EventName from './EventName';
import Section from './section';
import InfoBar from './infoBar';
import SectionBar from './sectionBar';

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

            <SectionBar  />

            <InfoBar session1="15:30" session2="20:30" location="AL BASRAH" />

            <Text style={styles.description}>US command has identified an insurgent stronghold within a village, just a few kilometers from our forward operating base in the suburbs of Al Basrah. Our objective is to eliminate all hostiles and protect the FOB.</Text>

            <Section title="VICTORY CONDITIONS">
              <Text style={styles.sectionNote}>- Destory insurgent FOB</Text>
              <Text style={styles.sectionNote}>- Eliminate all insurgent forces in the area</Text>
            </Section>

            <Section title="INFANTRY ASSETS">
              <Text style={styles.sectionNote}>- M4</Text>
              <Text style={styles.sectionNote}>- M249 SAW</Text>
              <Text style={styles.sectionNote}>- M203</Text>
              <Text style={styles.sectionNote}>- M72 LAW</Text>
            </Section>

            <Section title="SUPPORT ASSETS">
              <Text style={styles.sectionNote}>- HMMWV</Text>
              <Text style={styles.sectionNote}>- Logistic Truck</Text>
            </Section>

            <Section title="LOGISTIC ASSETS">
              <Text style={styles.sectionNote}>- COP</Text>
              <Text style={styles.sectionNote}>- Possible heavy weapons</Text>
            </Section>

            <Section title="MOBILITY RESTRICTIONS">
              <Text style={styles.sectionNote}>- Vehicles must use bridges</Text>
            </Section>

            <Section title="BEFORE LIVE">
              <Text style={styles.sectionNote}>- Decide on COP location</Text>
            </Section>

            <Section title="SPECIALTY RULES">
              <Text style={styles.sectionNote}>- Destory insurgent FOB</Text>
              <Text style={styles.sectionNote}>- Eliminate all insurgent forces in the area</Text>
            </Section>

            <Section title="INTEL">
              <Text style={styles.sectionNote}>- Destory insurgent FOB</Text>
              <Text style={styles.sectionNote}>- Eliminate all insurgent forces in the area</Text>
            </Section>

          </ScrollView>
        </LinearGradient>

      </View>
    );
  }
}

const styles = {
  sectionNote: {
    fontFamily: 'open-sans',
    fontSize: 14,
    color: '#3e3e3e',
    paddingLeft: 12.5,
    paddingRight: 12.5,
    opacity: 0.75,
    lineHeight: 22
  },
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
};

export { Training };

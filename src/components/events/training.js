import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { BlurView, LinearGradient } from 'expo';
import { Entypo } from '@expo/vector-icons';

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

        <Image style={styles.backgroundImage} source={image}>
          <BlurView intensity={75} style={{ position: 'absolute', top: 0, height: '100%', width: '100%' }} />
        </Image>

        <TouchableOpacity activeOpacity={0.9} style={styles.floatingCard}>
          <Image style={styles.cardImage} source={image || require('../../../assets/images/default.png')}>
            <BlurView intensity={90} style={{ height: '100%', width: '67.5%', left: 0, position: 'relative' }}>
              <Text style={styles.cardDay}>03</Text>
              <Text style={styles.cardMonth}>SEPTEMBER</Text>
            </BlurView>
          </Image>
          <TouchableOpacity activeOpacity={0.75} style={styles.outerCircle}>
            <View style={styles.innerCircle}>
              <Entypo style={styles.playIcon} name="controller-play" size={20} color="#4922e3" />
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
        <LinearGradient style={{ flex: 1 }} colors={['#eee', '#fff']}>
          <ScrollView style={styles.infoContainer}>
            <View style={{ flexDirection: 'row', marginTop: 70, marginLeft: 15, marginBottom: 7 }}>
              <Text style={styles.slash}>//</Text>
              <Text style={styles.eventType}>OPERATION</Text>
            </View>
            <Text style={styles.eventName}>OPEN ROAD</Text>
            <View style={styles.sectionBar}>
              <TouchableOpacity style={styles.sectionButton}><Text style={styles.sectionTitle}>US FORCES</Text></TouchableOpacity>
              <Text style={styles.sectionDivider}>|</Text>
              <TouchableOpacity style={styles.sectionButton}><Text style={[styles.sectionTitle, styles.selectedTitle]}>INS FORCES</Text></TouchableOpacity>
              <Text style={styles.sectionDivider}>|</Text>
              <TouchableOpacity style={styles.sectionButton}><Text style={styles.sectionTitle}>SESSION I</Text></TouchableOpacity>
              <Text style={styles.sectionDivider}>|</Text>
              <TouchableOpacity style={styles.sectionButton}><Text style={styles.sectionTitle}>SESSION II</Text></TouchableOpacity>
            </View>
            <View style={styles.divider} />
          </ScrollView>
        </LinearGradient>

      </View>
    );
  }
}

const styles = {
  backgroundImage: {
    height: 180,
    width: '100%',
    position: 'relative'
  },
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
    marginLeft: 12.5,
    fontFamily: 'syncopate',
    fontSize: 26,
    letterSpacing: 1,
    backgroundColor: 'transparent',
    color: '#252525',
  },
  divider: {
    height: 0.5,
    backgroundColor: '#000',
    opacity: 0.05,
    marginTop: 10,
    width: '100%'
  },
  cardImage: {
    height: 110,
    width: '100%',
    borderRadius: 12,
    position: 'relative'
  },
  outerCircle: {
    position: 'absolute',
    bottom: 11,
    right: 77.5,
    height: 85,
    width: 85,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: "rgba(245, 245, 245, 0.25)",
    backgroundColor: 'transparent',
    justifyContent: 'center',
    flex: 1
  },
  innerCircle: {
    backgroundColor: '#fff',
    height: 60,
    width: 60,
    borderRadius: 100,
    alignSelf: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 15,
    elevation: 1,
    opacity: 0.95
  },
  playIcon: {
    backgroundColor: 'transparent',
    alignSelf: 'center',
    left: 1
  },
  checkIcon: {
    backgroundColor: 'transparent',
    alignSelf: 'center'
  },
  cardDay: {
    fontFamily: 'rubik',
    fontSize: 41,
    color: '#fff',
    letterSpacing: 0.15,
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 35,
    paddingLeft: 24,
    paddingRight: 25,
    textShadowColor: 'rgba(0, 0, 0, 0.35)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 15,
    elevation: 1,
  },
  cardMonth: {
    fontFamily: 'syncopate',
    fontSize: 15,
    color: '#fff',
    letterSpacing: 1.25,
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 15,
    left: 25,
  },
  floatingCard: {
    position: 'absolute',
    top: 105,
    height: 110,
    width: '90%',
    right: 15,
    backgroundColor: '#eee',
    zIndex: 5,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 13,
    elevation: 1
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
    opacity: 0.75,
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

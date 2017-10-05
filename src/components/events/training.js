import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { BlurView, LinearGradient } from 'expo';
import { SimpleLineIcons } from '@expo/vector-icons';

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
              <SimpleLineIcons style={styles.playIcon} name="game-controller" size={20} color="#4922e3" />
            </View>
          </TouchableOpacity>
        </TouchableOpacity>

        <View style={styles.infoContainer}>
          <View style={styles.sectionBar}>
            <TouchableOpacity style={styles.sectionButton}><Text style={styles.sectionTitle}>US FORCES</Text></TouchableOpacity>
            <Text style={styles.sectionDivider}>|</Text>
            <TouchableOpacity style={styles.sectionButton}><Text style={[styles.sectionTitle, styles.selectedTitle]}>INS FORCES</Text></TouchableOpacity>
            <Text style={styles.sectionDivider}>|</Text>
            <TouchableOpacity style={styles.sectionButton}><Text style={styles.sectionTitle}>SESSION I</Text></TouchableOpacity>
            <Text style={styles.sectionDivider}>|</Text>
            <TouchableOpacity style={styles.sectionButton}><Text style={styles.sectionTitle}>SESSION II</Text></TouchableOpacity>
          </View>
        </View>

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
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 13,
    elevation: 1
  },
  infoContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#f5f5f5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 1
  },
  sectionBar: {
    flex: 1,
    justifyContent: 'space-between',
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
  },
  sectionButton: {
    paddingTop: 90
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
    paddingTop: 90
  },
};

export { Training };

import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { BlurView } from 'expo';
import { Ionicons } from '@expo/vector-icons';

class Operation extends Component {
  static navigationOptions = {
    title: 'Operation',
    header: null
  }

  render() {
    const { goBack } = this.props.navigation;

    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <View style={{ height: 22, width: '100%', position: 'relative', backgroundColor: '#e0e0e0' }}>
          <Text style={styles.day}>03</Text>
          <Text style={styles.month}>SEPTEMBER</Text>
          <Text style={styles.time}>15:30 / 20:30</Text>
        </View>
        <ScrollView style={styles.container}>
          <View style={styles.imageBackground} />
          <Image style={styles.cardImage} source={require('../../../assets/images/forest.png')}>
            <BlurView tint={'dark'} intensity={80} style={{ height: '100%', width: '100%', left: 0, position: 'relative' }}>
              <View style={styles.eventTypeContainer}>
                <View style={styles.line} />
                <Text style={styles.eventType}>OPERATION</Text>
                <View style={styles.line} />
              </View>
              <Text style={styles.name}>OPEN ROAD</Text>
            </BlurView>
          </Image>
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
        <TouchableOpacity activeOpacity={0.6} onPress={() => goBack()}>
          <BlurView style={styles.backButton} intensity={80}>
            <Ionicons name="ios-arrow-round-back" color="#252525" size={35} />
          </BlurView>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#e0e0e0',
    flex: 1,
  },
  imageBackground: {
    backgroundColor: '#e0e0e0',
    position: 'absolute',
    top: 85,
    height: 100,
    width: '100%'
  },
  divider: {
    height: 1,
    backgroundColor: '#bdbdbd',
    width: '100%'
  },
  sectionBar: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'space-between',
    backgroundColor: '#e0e0e0',
    borderRadius: 5
  },
  sectionButton: {
    paddingTop: 12,
    paddingBottom: 8
  },
  backButton: {
    position: 'absolute',
    bottom: 27.5,
    right: 25,
    borderRadius: 32.5,
    height: 65,
    width: 65,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.9,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.75,
    shadowRadius: 6,
    elevation: 1,
  },
  sectionTitle: {
    fontFamily: 'rubik-light',
    color: '#000000',
    letterSpacing: 2.25,
    fontSize: 10,
    backgroundColor: 'transparent',
    opacity: 0.75,
    alignSelf: 'center'
  },
  sectionDivider: {
    fontFamily: 'rubik-light',
    color: '#000000',
    letterSpacing: 2.25,
    fontSize: 10,
    backgroundColor: 'transparent',
    opacity: 0.5,
    alignSelf: 'center'
  },
  selectedTitle: {
    opacity: 1
  },
  day: {
    fontFamily: 'rubik-light',
    color: '#252525',
    letterSpacing: 2.25,
    fontSize: 9.5,
    backgroundColor: 'transparent',
    opacity: 0.8,
    position: 'absolute',
    top: 6,
    left: 8
  },
  month: {
    fontFamily: 'syncopate',
    color: '#252525',
    letterSpacing: 2.25,
    fontSize: 9.5,
    backgroundColor: 'transparent',
    opacity: 0.8,
    position: 'absolute',
    top: 7.3,
    left: 30.5
  },
  time: {
    fontFamily: 'rubik-light',
    color: '#252525',
    letterSpacing: 2,
    fontSize: 9.5,
    backgroundColor: 'transparent',
    opacity: 0.8,
    position: 'absolute',
    top: 6,
    right: 8
  },
  eventTypeContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 90,
    alignSelf: 'center'
  },
  line: {
    height: 0.5,
    width: 25,
    backgroundColor: '#edb74d',
    opacity: 0.4
  },
  eventType: {
    fontFamily: 'rubik',
    fontSize: 11,
    color: '#eee',
    letterSpacing: 2.5,
    alignSelf: 'center',
    marginLeft: 17.5,
    marginRight: 17.5,
    backgroundColor: 'transparent',
    opacity: 0.7
  },
  name: {
    fontFamily: 'syncopate',
    fontSize: 19,
    color: '#f5f5f5',
    letterSpacing: 2,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: 'transparent',
    opacity: 0.9,
    position: 'absolute',
    bottom: 65
  },
  cardImage: {
    height: 175,
    width: '97.5%',
    position: 'relative',
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 5
  },
};

export { Operation };

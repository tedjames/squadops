import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { BlurView } from 'expo';

class Operation extends Component {
  static navigationOptions = {
    title: 'Operation',
    header: null
  }

  render() {
    return (
      <View>
        <Image style={styles.cardImage} source={require('../../../assets/images/forest.png')}>
          <BlurView tint={'dark'} intensity={80} style={{ height: '100%', width: '100%', left: 0, position: 'relative' }}>
            <View style={styles.eventTypeContainer}>
              <View style={styles.line} />
              <Text style={styles.eventType}>OPERATION</Text>
              <View style={styles.line} />
            </View>
            <Text style={styles.name}>OPEN ROAD</Text>
            <Text style={styles.day}>03</Text>
            <Text style={styles.month}>SEPTEMBER</Text>
            <Text style={styles.time}>15:30 / 20:30</Text>
          </BlurView>
        </Image>
      </View>
    );
  }
}

const styles = {
  day: {
    fontFamily: 'rubik-light',
    color: '#eee',
    letterSpacing: 2.25,
    fontSize: 9.5,
    backgroundColor: 'transparent',
    opacity: 0.55,
    position: 'absolute',
    top: 10,
    left: 10
  },
  month: {
    fontFamily: 'syncopate',
    color: '#eee',
    letterSpacing: 2.25,
    fontSize: 9.5,
    backgroundColor: 'transparent',
    opacity: 0.55,
    position: 'absolute',
    top: 11.3,
    left: 32.5
  },
  time: {
    fontFamily: 'rubik-light',
    color: '#eee',
    letterSpacing: 2,
    fontSize: 9.5,
    backgroundColor: 'transparent',
    opacity: 0.55,
    position: 'absolute',
    top: 10,
    right: 10
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
    opacity: 0.75
  },
  name: {
    fontFamily: 'syncopate',
    fontSize: 19,
    color: '#f5f5f5',
    letterSpacing: 2,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: 'transparent',
    opacity: 0.95,
    position: 'absolute',
    bottom: 60
  },
  cardImage: {
    height: 175,
    width: '100%',
    position: 'relative'
  },
};

export { Operation };

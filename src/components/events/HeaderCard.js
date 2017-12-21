import React from 'react';
import { TouchableOpacity, View, Text, ImageBackground, Animated } from 'react-native';
import { BlurView } from 'expo';
import { Entypo } from '@expo/vector-icons';

const HeaderCard = ({ day, month, image, translateY }) => {
  return (
    <Animated.View style={[styles.floatingCard, { transform: [{ translateY: translateY || 0 }] }]}>
      <TouchableOpacity activeOpacity={0.9} style={{ height: '100%', width: '100%', position: 'relative' }}>
        <ImageBackground style={styles.cardImage} source={image || require('../../../assets/images/default.png')}>
          <BlurView intensity={90} style={{ height: '100%', width: '67.5%', left: 0, position: 'relative' }}>
            <Text style={styles.cardDay}>{day || '??'}</Text>
            <Text style={styles.cardMonth}>{month || 'UNKNOWN'}</Text>
          </BlurView>
        </ImageBackground>
        <TouchableOpacity activeOpacity={0.75} style={styles.outerCircle}>
          <View style={styles.innerCircle}>
            <Entypo style={styles.playIcon} name="controller-play" size={20} color="#4922e3" />
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = {
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
    textShadowColor: 'rgba(0, 0, 0, 0.075)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
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
};

export default HeaderCard;

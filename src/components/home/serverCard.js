import React, { Component } from 'react';
import { TouchableOpacity, Text, ImageBackground, View, Dimensions } from 'react-native';
import { LinearGradient, BlurView } from 'expo';
import { SimpleLineIcons } from '@expo/vector-icons';

const MAX_PLAYERS = 80;

export default class ServerCard extends Component {
  render() {
    const { playerCount, map, name, day, month, intensity, image, gradient, tint } = this.props;
    const screenWidth = Dimensions.get('window').width;
    const cardWidth = screenWidth / 1.25;
    const cardHeight = screenWidth / 3.25;

    const styles = {
      slash: {
        fontFamily: 'rubik',
        fontSize: 40,
        color: '#fff',
        letterSpacing: 0.15,
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 47.5,
        paddingLeft: 70,
        paddingRight: 25,
        textShadowColor: 'rgba(0, 0, 0, 0.075)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 10,
        elevation: 1,
        opacity: 0.85
      },
      maxPlayers: {
        fontFamily: 'rubik',
        fontSize: 32.5,
        color: '#fff',
        letterSpacing: 0.15,
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 45,
        paddingLeft: 94,
        paddingRight: 25,
        textShadowColor: 'rgba(0, 0, 0, 0.075)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 10,
        elevation: 1,
      },
      playerCount: {
        fontFamily: 'rubik',
        fontSize: 32.5,
        color: '#fff',
        letterSpacing: 0.15,
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 57.5,
        paddingLeft: 25,
        paddingRight: 25,
        textShadowColor: 'rgba(0, 0, 0, 0.075)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 10,
        elevation: 1,
      },
      outerCircle: {
        position: 'absolute',
        bottom: 20,
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
        opacity: 0.925
      },
      playIcon: {
        backgroundColor: 'transparent',
        alignSelf: 'center',
        left: 1
      },
      card: {
        height: cardHeight,
        width: cardWidth,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.35,
        shadowRadius: 8,
        elevation: 1,
        marginBottom: 15,
        marginTop: 15,
        marginLeft: 20
      },
      cardImage: {
        height: cardHeight,
        width: cardWidth,
        borderRadius: 12,
        position: 'relative'
      },
      cardName: {
        fontFamily: 'rubik',
        fontSize: 14,
        color: '#fff',
        letterSpacing: 0.35,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 20,
        left: 25
      },
      map: {
        fontFamily: 'syncopate',
        fontSize: 15,
        color: '#fff',
        letterSpacing: 1,
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 15,
        left: 25,
      },
    };

    return (
      <TouchableOpacity activeOpacity={0.9} style={styles.card}>
        <ImageBackground style={styles.cardImage} source={image || require('../../../assets/images/default.png')} borderRadius={12}>
          <BlurView tint={tint || 'default'} intensity={intensity || 85} style={{ height: '100%', width: '65%', left: 0, position: 'relative', borderBottomLeftRadius: 12, borderTopLeftRadius: 12 }}>
            <Text style={styles.playerCount}>{playerCount}</Text>
            <Text style={styles.slash}>/</Text>
            <Text style={styles.maxPlayers}>{MAX_PLAYERS}</Text>
            <Text style={styles.map}>{map}</Text>
          </BlurView>
          <View style={styles.outerCircle}>
            <View style={styles.innerCircle}>
              <SimpleLineIcons style={styles.playIcon} name="game-controller" size={20} color="#4922e3" />
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

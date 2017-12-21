import React, { Component } from 'react';
import { TouchableOpacity, Text, ImageBackground, View, Dimensions } from 'react-native';
import { LinearGradient, BlurView } from 'expo';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

export default class EventCard extends Component {
  render() {
    const { name, day, month, registered, intensity, image, gradient, tint, navigate, type } = this.props;
    const screenWidth = Dimensions.get('window').width;
    const cardWidth = screenWidth / 1.25;
    const cardHeight = screenWidth / 2.5;

    const styles = {
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
      checkIcon: {
        backgroundColor: 'transparent',
        alignSelf: 'center'
      },
      card: {
        height: cardHeight,
        width: cardWidth,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.35,
        shadowRadius: 8,
        elevation: 2,
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
        letterSpacing: 1,
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 15,
        left: 25,
      },
    };

    return (
      <TouchableOpacity activeOpacity={0.625} style={styles.card} onPress={() => navigate(type)}>
        <ImageBackground style={styles.cardImage} source={image || require('../../../assets/images/default.png')} borderRadius={12}>
        { gradient ?
          <LinearGradient style={{ opacity: 0.9, height: '100%', width: '65%', left: 0, position: 'relative' }} colors={gradient} start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}>
            <Text style={styles.cardName}>{name}</Text>
            <Text style={styles.cardDay}>{day}</Text>
            <Text style={styles.cardMonth}>{month}</Text>
          </LinearGradient> :
          <BlurView tint={tint || 'default'} intensity={intensity || 85} style={{ height: '100%', width: '65%', left: 0, position: 'relative', borderBottomLeftRadius: 12, borderTopLeftRadius: 12 }}>
            <Text style={styles.cardName}>{name}</Text>
            <Text style={styles.cardDay}>{day}</Text>
            <Text style={styles.cardMonth}>{month}</Text>
          </BlurView>
        }
          <View style={styles.outerCircle}>
            <View style={styles.innerCircle}>
              { registered ?
                <MaterialCommunityIcons style={styles.checkIcon} name="check-all" size={20} color="#512de0" /> :
                <Entypo style={styles.playIcon} name="controller-play" size={20} color="#4922e3" /> }
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

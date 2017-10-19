import React, { Component } from 'react';
import { View, Dimensions, Text, TouchableOpacity, Animated } from 'react-native';
import { BlurView } from 'expo';

export default class SectionBar extends Component {
  render() {
    const { scrollX, backgroundColor } = this.props;
    const { width } = Dimensions.get('window');

    const defaultScale = 0.99;
    const focusedScale = 1.04;

    const defaultOpacity = 0.5;
    const focusedOpacity = 0.75;

    const sectionScale1 = scrollX.interpolate({
      inputRange: [0, width],
      outputRange: [focusedScale, defaultScale],
      extrapolate: 'clamp',
      useNativeDriver: true
    });

    const sectionScale2 = scrollX.interpolate({
      inputRange: [0, width, width * 2],
      outputRange: [defaultScale, focusedScale, defaultScale],
      extrapolate: 'clamp',
      useNativeDriver: true
    });

    const sectionScale3 = scrollX.interpolate({
      inputRange: [width, width * 2, width * 3],
      outputRange: [defaultScale, focusedScale, defaultScale],
      extrapolate: 'clamp',
      useNativeDriver: true
    });

    const sectionScale4 = scrollX.interpolate({
      inputRange: [width * 2, width * 3],
      outputRange: [defaultScale, focusedScale],
      extrapolate: 'clamp',
      useNativeDriver: true
    });

    const sectionOpacity1 = scrollX.interpolate({
      inputRange: [0, width],
      outputRange: [focusedOpacity, defaultOpacity],
      extrapolate: 'clamp',
      useNativeDriver: true
    });

    const sectionOpacity2 = scrollX.interpolate({
      inputRange: [0, width, width * 2],
      outputRange: [defaultOpacity, focusedOpacity, defaultOpacity],
      extrapolate: 'clamp',
      useNativeDriver: true
    });

    const sectionOpacity3 = scrollX.interpolate({
      inputRange: [width, width * 2, width * 3],
      outputRange: [defaultOpacity, focusedOpacity, defaultOpacity],
      extrapolate: 'clamp',
      useNativeDriver: true
    });

    const sectionOpacity4 = scrollX.interpolate({
      inputRange: [width * 2, width * 3],
      outputRange: [defaultOpacity, focusedOpacity],
      extrapolate: 'clamp',
      useNativeDriver: true
    });
    return (
      <Animated.View style={{ backgroundColor: backgroundColor || '#fff', borderBottomRightRadius: 4, borderBottomLeftRadius: 4}}>
        <View style={styles.sectionBar}>
          <TouchableOpacity style={styles.sectionButton}><Animated.Text style={[styles.sectionTitle, { opacity: sectionOpacity1, transform: [{ scale: sectionScale1 }] }]}>US FORCES</Animated.Text></TouchableOpacity>
          <Text style={styles.buttonDivider}>|</Text>
          <TouchableOpacity style={styles.sectionButton}><Animated.Text style={[styles.sectionTitle, { opacity: sectionOpacity2, transform: [{ scale: sectionScale2 }] }]}>INS FORCES</Animated.Text></TouchableOpacity>
          <Text style={styles.buttonDivider}>|</Text>
          <TouchableOpacity style={styles.sectionButton}><Animated.Text style={[styles.sectionTitle, { opacity: sectionOpacity3, transform: [{ scale: sectionScale3 }] }]}>SESSION I</Animated.Text></TouchableOpacity>
          <Text style={styles.buttonDivider}>|</Text>
          <TouchableOpacity style={styles.sectionButton}><Animated.Text style={[styles.sectionTitle, { opacity: sectionOpacity4, transform: [{ scale: sectionScale4 }] }]}>SESSION II</Animated.Text></TouchableOpacity>
        </View>
        <View style={styles.divider} />
      </Animated.View>
    );
  }
}

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
    paddingTop: 10
  },
  sectionTitle: {
    fontFamily: 'rubik',
    color: '#000000',
    letterSpacing: 2.25,
    fontSize: 10,
    backgroundColor: 'transparent',
  },
  buttonDivider: {
    fontFamily: 'rubik-light',
    color: '#000000',
    letterSpacing: 2.25,
    fontSize: 10,
    backgroundColor: 'transparent',
    opacity: 0.4,
    paddingTop: 10
  },
  divider: {
    height: 0.5,
    backgroundColor: '#000',
    opacity: 0.05,
    marginTop: 10,
    width: '100%'
  },
};

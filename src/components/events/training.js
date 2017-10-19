import React, { Component } from 'react';
import { Dimensions, View, Text, Image, ScrollView, TouchableOpacity, Animated, Easing } from 'react-native';
import { BlurView, LinearGradient } from 'expo';
import { Entypo, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import HeaderImage from './HeaderImage';
import HeaderCard from './HeaderCard';
import EventName from './eventName';
import Section from './section';
import InfoBar from './infoBar';
import SectionBar from './sectionBar';

class Training extends Component {
  static navigationOptions = {
    title: 'Training',
    header: null
  }

  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0),
      scrollX: new Animated.Value(0),
    };
  }

  render() {
    const { goBack } = this.props.navigation;
    const { width } = Dimensions.get('window');
    const image = require('../../../assets/images/forest.png');

    const onScroll = Animated.event(
      [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }]
    );

    const onSectionScroll = Animated.event(
      [{ nativeEvent: { contentOffset: { x: this.state.scrollX } } }]
    );

    const imagePosition = this.state.scrollY.interpolate({
      inputRange: [0, 125],
      outputRange: [0, -65],
      extrapolate: 'clamp',
      easing: Easing.easeOut
    });

    const cardPosition = this.state.scrollY.interpolate({
      inputRange: [0, 125],
      outputRange: [0, -50],
      extrapolate: 'clamp'
    });

    const nameOpacity = this.state.scrollY.interpolate({
      inputRange: [30, 100],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    });

    const namePosition = this.state.scrollY.interpolate({
      inputRange: [0, 125],
      outputRange: [0, 10],
      extrapolate: 'clamp'
    });

    const sectionBarBackground = this.state.scrollY.interpolate({
      inputRange: [75, 125],
      outputRange: ['rgba(255, 255, 255, 0)', 'rgb(255, 255, 255)'],
      extrapolate: 'clamp'
    });

    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>

        <HeaderImage translateY={imagePosition} image={image} />
        <HeaderCard translateY={cardPosition} image={image} day="03" month="SEPTEMBER" />

        <LinearGradient style={{ flex: 1 }} colors={['#fff', '#f5f5f5']}>
            <ScrollView style={styles.infoContainer} onScroll={onScroll} scrollEventThrottle={16} stickyHeaderIndices={[1]}>
              <EventName translateY={namePosition} opacity={nameOpacity} type="OPERATION" name="OPEN ROAD" />

              <SectionBar scrollX={this.state.scrollX} backgroundColor={sectionBarBackground}  />
              <ScrollView
                style={{ flex: 1 }}
                snapToInterval={width}
                decelerationRate={'fast'}
                horizontal
                scrollEventThrottle={16}
                onScroll={onSectionScroll}
              >
                <View style={{ width }}>
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
                </View>
                <View style={{ width }}>
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
                </View>

                <View style={{ width }}>
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
                </View>
                <View style={{ width }}>
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
                </View>

              </ScrollView>

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
  },
};

export { Training };

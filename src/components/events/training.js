import React, { Component } from 'react';
import { Dimensions, View, Text, Image, ScrollView, TouchableOpacity, Animated, Easing } from 'react-native';
import { BlurView, LinearGradient } from 'expo';
import { Entypo, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import HeaderImage from './headerImage';
import HeaderCard from './headerCard';
import EventName from './eventName';
import Section from './section';
import SectionBar from './sectionBar';
import Roster from './roster';
import Details from './details';

import { roster, operationDetails } from './operationData';

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
      roster: {}
    };

    this.getRowData = this.getRowData.bind(this);
  }

  getRowData(data) {
    console.log(data);
    const rowCount = data.length;
    const cleanedData = [] // intialize new array of data
    const itemsPerRow = 2;
    for (let i = 0; i < rowCount; i++) {
      const rowData = {} // initialize new row of data
      const startIndex = i * itemsPerRow;
      const endIndex = startIndex + itemsPerRow;
      const items = data.slice(startIndex, endIndex); // get 2 users at a time from the data array
      if (items.length > 0) { // if statement used to prevent adding empty arrays (strange bug i guess..?)
        // update row data
        console.log('items: ', items);
        const rowData = {
          key: i,
          user1: items[0].name,
          user2: items.length > 1 ? items[1].name : ''
        }
        // update cleanedData array w/ new rowData
        cleanedData.push(rowData);
      }
    }
    return cleanedData;
  }

  componentWillMount() {
    this.setState({
      roster: {
        commands: this.getRowData(roster.commands),
        squadLeaders: this.getRowData(roster.squadLeaders),
        admins: this.getRowData(roster.admins),
        commentators: this.getRowData(roster.commentators),
        specialGuests: this.getRowData(roster.specialGuests),
        confirmed: this.getRowData(roster.confirmed),
        reserves: this.getRowData(roster.reserves),
      }
    });
  }

  render() {
    const { roster } = this.state;
    const { goBack } = this.props.navigation;
    const { width } = Dimensions.get('window');
    const image = require('../../../assets/images/forest.png');

    // Scroll event processing
    const onScroll = Animated.event(
      [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }]
    );
    const onSectionScroll = Animated.event(
      [{ nativeEvent: { contentOffset: { x: this.state.scrollX } } }]
    );

    // Scroll interpolation for animations
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
                pagingEnabled={false}
                decelerationRate={'fast'}
                horizontal
                scrollEventThrottle={16}
                onScroll={onSectionScroll}
              >
                <Details operationDetails={operationDetails} />
                <Details operationDetails={operationDetails} />

                <Roster roster={roster} />
                <Roster roster={roster} />

              </ScrollView>

            </ScrollView>
        </LinearGradient>

      </View>
    );
  }
}

const styles = {
  rosterSectionTitle: {
    fontFamily: 'rubik',
    marginRight: 10,
    marginLeft: 10,
    alignSelf: 'center',
    fontSize: 11,
    color: '#252525',
    letterSpacing: 0.8,
    opacity: 0.55
  },
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
  tabContainer: {
    flexDirection: 'row',
    height: 48,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
};

export { Training };

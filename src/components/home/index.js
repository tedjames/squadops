import React, { Component } from 'react';
import { ScrollView, StatusBar, Animated, Dimensions } from 'react-native';
import { LinearGradient } from 'expo';

import Header from './header';
import Profile from './profile';
import Section from './section';

// Navigation HOC helper
import NavActions from '../../hocs/eventNavActions';

const screenWidth = Dimensions.get('window').width;
const cardWidth = screenWidth / 1.25;

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    header: null
  }

  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0),
    };
  }

  render() {
    const { navigate } = this.props.navigation;

    // Scroll event handler for interpolation
    const onScroll = Animated.event(
      [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }]
    );

    // Use HOC to declare which route to and pass navigation props to EventCard + ServerCard
    // const NEW_COMPONENT = NavActions(oldComponent, this.props.navigation.navigate, routeName);
    // routeName must be capitalized!
    // const Operation = NavActions(EventCard, navigate, 'Operation');
    // const Training = NavActions(EventCard, navigate, 'Training');
    // const Server = NavActions(ServerCard, navigate);
    // const ParallaxSection = Parallax(7, scrollY);

    // Make sure these are cached in App.js and optimized for web
    const images = {
      basrah: require('../../../assets/images/basrah.png'),
      forest: require('../../../assets/images/forest.png'),
      logarNight: require('../../../assets/images/logarNight.png'),
      lodgie: require('../../../assets/images/lodgie.png'),
      aws: require('../../../assets/images/aws.png'),
      vehicle: require('../../../assets/images/vehicle.jpg'),
      leadership: require('../../../assets/images/leadership.jpeg'),
      default: require('../../../assets/images/default.png')
    };

    // Scroll interpolation for parallax effect on sections/cards
    const sectionPosition = this.state.scrollY.interpolate({
      inputRange: [-25, 0, 475, 500],
      outputRange: [4.5, 7, 0, -2.5],
      useNativeDriver: true
    });

    const operations = [
      {
        key: '0',
        name: 'Operation: Open Road',
        day: '03',
        month: 'SEPTEMBER',
        image: images.forest,
        registered: true
      },
      {
        key: '1',
        name: 'Operation: Rook',
        day: '03',
        month: 'SEPTEMBER',
        image: images.lodgie,
        registered: true
      },
      {
        key: '2',
        name: 'Operation: Mistwalker',
        day: '03',
        month: 'SEPTEMBER',
        image: images.logarNight,
        registered: true
      },
      {
        key: '3',
        name: 'Operation: Desert Tundra',
        day: '03',
        month: 'SEPTEMBER',
        image: images.basrah,
      },
      {
        key: '4',
        name: 'Operation: Chainlink',
        day: '03',
        month: 'SEPTEMBER',
        image: images.default,
      },
    ];
    const training = [
      {
        key: '0',
        name: 'SOTT: Basic Training',
        day: '03',
        month: 'SEPTEMBER',
        image: images.basic,
        registered: true
      },
      {
        key: '1',
        name: 'SOTT: Advanced Weapon Systems',
        day: '03',
        month: 'SEPTEMBER',
        image: images.aws,
        registered: true
      },
      {
        key: '2',
        name: 'SOTT: Vehicle Training',
        day: '03',
        month: 'SEPTEMBER',
        image: images.vehicle,
      },
      {
        key: '3',
        name: 'SOTT: Leadership Training',
        day: '03',
        month: 'SEPTEMBER',
        image: images.leadership,
      },
    ]
    const servers = [
      {
        key: '0',
        playerCount: '78',
        map: 'AL BASRAH INV',
        image: images.basrah,
        intensity: 90
      },
      {
        key: '1',
        playerCount: '78',
        map: 'SUMARI AAS',
        image: images.forest
      },
      {
        key: '2',
        playerCount: '78',
        map: 'NARVA AAS',
        image: images.lodgie
      },
      {
        key: '3',
        playerCount: '78',
        map: 'SUMARI AAS',
        image: images.forest
      },
    ]
    const shortcuts = [
      {
        key: '0',
        name: 'play',
        label: 'Media',
        size: 25,
        top: 14
      },
      {
        key: '1',
        name: 'check',
        label: 'Rules',
        size: 25,
        top: 15
      },
      {
        key: '2',
        name: 'gear',
        label: 'Settings',
        size: 23,
        top: 15
      },
      {
        key: '3',
        name: 'question',
        label: 'Support',
        size: 24,
        top: 15
      },
      {
        key: '4',
        name: 'like',
        label: 'Facebook',
        size: 24,
        top: 15
      },
      {
        key: '5',
        name: 'heart',
        label: 'Donate',
        size: 22,
        top: 16.5
      },
      {
        key: '6',
        iconType: 'MaterialCommunityIcons',
        name: 'twitch',
        label: 'Twitch',
        size: 18,
        top: 15
      },
      {
        key: '7',
        name: 'sc-youtube',
        label: 'Youtube',
        size: 25,
        top: 15
      },
      {
        key: '8',
        iconType: 'MaterialCommunityIcons',
        name: 'discord',
        label: 'Discord',
        size: 18,
        top: 16
      }
    ]

    return (
      <LinearGradient style={{ flex: 1 }} colors={['#eee', '#fff']}>
        <StatusBar hidden />
        <ScrollView style={{ flex: 1 }} scrollEventThrottle={16} onScroll={onScroll}>

          <Header />
          <Profile name="MIYAMOTO" status="Online" hours={174} ops={12} certs={3} />

          <Section type="shortcuts" data={shortcuts} style={{ flex: 1, height: 125 }} snapToInterval={100} navigate={navigate} sectionPosition={sectionPosition} />

          <Section title="EVENTS" type="operations" data={operations} navigate={navigate} sectionPosition={sectionPosition} />

          <Section title="TRAINING" type="training" data={training} navigate={navigate} sectionPosition={sectionPosition} />

          <Section title="SERVERS" type="servers" data={servers} navigate={navigate} sectionPosition={sectionPosition} />

        </ScrollView>
      </LinearGradient>
    );
  }
}

const styles = {
  sectionName: {
    fontFamily: 'syncopate',
    fontSize: 15,
    letterSpacing: 1.65,
    backgroundColor: 'transparent',
    color: '#32383c',
    marginLeft: 17.5,
    marginTop: 12.5
  },
};

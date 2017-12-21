import React, { Component } from 'react';
import { ScrollView, StatusBar, Animated, FlatList, Text, Dimensions } from 'react-native';
import { LinearGradient } from 'expo';

import Header from './header';
import Profile from './profile';
import Section from './section';
import EventSection from './eventSection';
import EventCard from './eventCard';
import ServerCard from './serverCard';
import Shortcut from '../buttons/shortcut';

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
    const Operation = NavActions(EventCard, navigate, 'Operation');
    const Training = NavActions(EventCard, navigate, 'Training');
    const Server = NavActions(ServerCard, navigate);
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

    return (
      <LinearGradient style={{ flex: 1 }} colors={['#eee', '#fff']}>
        <StatusBar hidden />
        <ScrollView style={{ flex: 1 }} scrollEventThrottle={16} onScroll={onScroll}>

          <Header />
          <Profile name="MIYAMOTO" status="Online" hours={174} ops={12} certs={3} />

          <Section style={{ flex: 1, height: 125 }} snapToInterval={100} sectionPosition={sectionPosition}>
            <Shortcut name="play" size={25} label="Media" top={14} />
            <Shortcut name="check" size={25} label="Rules" top={15} />
            <Shortcut name="gear" size={23} label="Settings" top={15} />
            <Shortcut name="question" size={24} label="Support" top={15} />
            <Shortcut name="like" size={24} label="Facebook" top={15} />
            <Shortcut name="heart" size={22} label="Donate" top={16.5} />
            <Shortcut type="MaterialCommunityIcons" name="twitch" size={18} label="Twitch" top={15} />
            <Shortcut name="sc-youtube" size={25} label="Youtube" top={15} />
            <Shortcut type="MaterialCommunityIcons" name="discord" size={18} label="Discord" top={16} />
          </Section>

          <EventSection title="EVENTS" data={operations} navigate={navigate} sectionPosition={sectionPosition} />

          <EventSection title="TRAINING" data={training} navigate={navigate} sectionPosition={sectionPosition} />

          <Section title="SERVERS" sectionPosition={sectionPosition}>
            <Server playerCount="78" map="AL BASRAH INV" image={images.basrah} intensity={90} />
            <Server playerCount="24" map="SUMARI AAS" image={images.forest} />
            <Server playerCount="01" map="NARVA AAS" image={images.lodgie} />
            <Server playerCount="00" map="SUMARI AAS" image={images.forest} />
          </Section>

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

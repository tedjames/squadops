import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, WebView, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { LinearGradient, BlurView } from 'expo';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

import Header from './header';
import Profile from './profile';
import Section from './section';
import EventCard from './eventCard';
import ServerCard from './serverCard';
import Shortcut from '../buttons/shortcut';

import NavActions from '../../hocs/eventNavActions';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    header: null
  }

  render() {
    const { navigate } = this.props.navigation;

    // Use HOC to declare which route to and pass navigation props to EventCard + ServerCard
    // const NEW_COMPONENT = NavActions(oldComponent, this.props.navigation.navigate, routeName);
    // routeName must be capitalized!
    const Operation = NavActions(EventCard, navigate, "Operation");
    const Training = NavActions(EventCard, navigate, "Training");
    const Server = NavActions(ServerCard, navigate);

    // Make sure these are cached in App.js
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

    return (
      <LinearGradient style={{ flex: 1 }} colors={['#eee', '#fff']}>
        <StatusBar hidden />
        <ScrollView style={{ flex: 1 }}>

          <Header time="1:30 PM" />
          <Profile name="MIYAMOTO" status="Online" hours={174} ops={12} certs={3} />

          <Section style={{ flex: 1, height: 125 }} snapToInterval={100}>
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

          <Section title="EVENTS">
            <Operation name="Operation: Open Road" day="03" month="SEPTEMBER" image={images.forest} registered />
            <Operation name="Operation: Rook" day="07" month="SEPTEMBER" image={images.lodgie} />
            <Operation name="Operation: Mistwalker" day="10" month="SEPTEMBER" image={images.logarNight} intensity={85} registered />
            <Operation name="Operation: Desert Tundra" day="14" month="SEPTEMBER" image={images.basrah} />
            <Operation name="Operation: Chainlink" day="01" month="OCTOBER" image={images.default} registered />
          </Section>

          <Section title="TRAINING">
            <Training name="SOTT: Basic Training" day="03" month="SEPTEMBER" image={images.basic} />
            <Training name="SOTT: Advanced Weapon Systems" day="17" month="SEPTEMBER" image={images.aws} intensity={90} registered />
            <Training name="SOTT: Vehicle Training" day="28" month="SEPTEMBER" image={images.vehicle} intensity={87.5} registered />
            <Training name="SOTT: Leadership Training" day="24" month="NOVEMBER" image={images.leadership} intensity={90} registered />
          </Section>

          <Section title="SERVERS">
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

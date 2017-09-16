import React from 'react';
import { StyleSheet, Text, View, Image, WebView, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { LinearGradient, BlurView } from 'expo';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import UserInfo from './components/UserInfo';
import Shortcut from './components/shortcut';
import EventCard from './components/eventCard';
import ServerCard from './components/serverCard';

export default class Main extends React.Component {
  render() {
    const images = {
      basrah: require('../assets/images/basrah.png'),
      forest: require('../assets/images/forest.png'),
      logarNight: require('../assets/images/logarNight.png'),
      lodgie: require('../assets/images/lodgie.png'),
      aws: require('../assets/images/aws.png'),
      vehicle: require('../assets/images/vehicle.jpg'),
      leadership: require('../assets/images/leadership.jpeg'),
      default: require('../assets/images/default.png')
    };

    return (
      <LinearGradient style={{ flex: 1 }} colors={['#eee', '#fff']}>
        <StatusBar hidden />
        <ScrollView style={styles.container}>
          <View style={styles.header}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.slash}>//</Text>
              <Text style={styles.time}>1:30 PM</Text>
            </View>
            <Text style={styles.logoText}>SQUAD OPS</Text>
          </View>

          <UserInfo />

          <ScrollView
            style={styles.shortcutBar}
            contentContainerStyle={{ paddingRight: 15 }}
            showsHorizontalScrollIndicator={false}
            snapToInterval={100}
            horizontal
          >
            <Shortcut name="play" size={25} label="Media" top={14} />
            <Shortcut name="check" size={25} label="Rules" top={15} />
            <Shortcut name="gear" size={23} label="Settings" top={15} />
            <Shortcut name="question" size={24} label="Support" top={15} />
            <Shortcut name="like" size={24} label="Facebook" top={15} />
            <Shortcut name="heart" size={22} label="Donate" top={16.5} />
            <Shortcut type="MaterialCommunityIcons" name="twitch" size={18} label="Twitch" top={15} />
            <Shortcut name="sc-youtube" size={25} label="Youtube" top={15} />
            <Shortcut type="MaterialCommunityIcons" name="discord" size={18} label="Discord" top={16} />
          </ScrollView>

          <Text style={styles.sectionName}>EVENTS</Text>
          <ScrollView
            contentContainerStyle={{ paddingRight: 15 }}
            showsHorizontalScrollIndicator={false}
            snapToInterval={365}
            decelerationRate={'fast'}
            horizontal
          >
            <EventCard name="Operation: Open Road" day="03" month="SEPTEMBER" image={images.forest} registered />
            <EventCard name="Operation: Rook" day="07" month="SEPTEMBER" image={images.lodgie} />
            <EventCard name="Operation: Mistwalker" day="10" month="SEPTEMBER" image={images.logarNight} intensity={85} registered />
            <EventCard name="Operation: Desert Tundra" day="14" month="SEPTEMBER" image={images.basrah} />
            <EventCard name="Operation: Chainlink" day="01" month="OCTOBER" image={images.default} registered />
          </ScrollView>

          <Text style={styles.sectionName}>TRAINING</Text>
          <ScrollView
            contentContainerStyle={{ paddingRight: 15 }}
            showsHorizontalScrollIndicator={false}
            snapToInterval={365}
            decelerationRate={'fast'}
            horizontal
          >
            <EventCard name="SOTT: Basic Training" day="03" month="SEPTEMBER" image={images.basic} />
            <EventCard name="SOTT: Advanced Weapon Systems" day="14" month="SEPTEMBER" image={images.aws} registered intensity={90} />
            <EventCard name="SOTT: Vehicle Training" day="28" month="SEPTEMBER" image={images.vehicle} intensity={87.5} registered />
            <EventCard name="SOTT: Leadership Training" day="02" month="OCTOBER" image={images.leadership} intensity={90} registered />
            <EventCard name="SOTT: Advanced Weapon Systems" day="03" month="SEPTEMBER" image={images.aws} registered gradient={['#e3b922', '#ffac69']} />
            <EventCard name="SOTT: Basic Training" day="03" month="SEPTEMBER" image={images.basic2} registered gradient={['#4922e3', '#69d6ff']} />
          </ScrollView>

          <Text style={styles.sectionName}>SERVERS</Text>
          <ScrollView
            contentContainerStyle={{ paddingRight: 15 }}
            showsHorizontalScrollIndicator={false}
            snapToInterval={365}
            decelerationRate={'fast'}
            horizontal
          >
            <ServerCard playerCount="78" map="SUMARI AAS" image={images.forest} />
            <ServerCard playerCount="24" map="AL BASRAH AAS" image={images.basrah} intensity={90} />
            <ServerCard playerCount="01" map="NARVA AAS" image={images.lodgie} />
            <ServerCard playerCount="00" map="SUMARI AAS" image={images.forest} />
          </ScrollView>
        </ScrollView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
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
    height: 175,
    width: 345,
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
    height: 175,
    width: 345,
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
  sectionName: {
    fontFamily: 'syncopate',
    fontSize: 15,
    letterSpacing: 1.65,
    backgroundColor: 'transparent',
    color: '#32383c',
    marginLeft: 17.5,
    marginTop: 10
  },
  shortcutBar: {
    flex: 1,
    height: 125
  },
  container: {
    flex: 1,
  },
  slash: {
    fontFamily: 'rubik',
    fontSize: 8,
    letterSpacing: 1.75,
    color: '#555'
  },
  time: {
    fontFamily: 'rubik',
    fontSize: 11,
    letterSpacing: 1.5,
    marginLeft: 10,
    color: '#444',
  },
  logoText: {
    fontFamily: 'rubik',
    fontSize: 9,
    letterSpacing: 2,
    backgroundColor: 'transparent',
    color: '#444',
    bottom: 0.1
  },
  header: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 17.5,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 20,
    opacity: 0.7
  },
});

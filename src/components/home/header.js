import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.updateTime = this.updateTime.bind(this);

    this.state = {
      time: "",
    };
  }
  updateTime() {
    let currentTime = new Date()
    let hours = currentTime.getHours()
    let minutes = currentTime.getMinutes()
    if (minutes < 10){
        minutes = "0" + minutes
    }
    let time = hours + ":" + minutes + " ";
    this.setState({ time });
  }
  componentDidMount() {
    setInterval(this.updateTime, 1000);
  }
  render() {
    return (
      <View style={styles.header}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.slash}>//</Text>
          <Text style={styles.time}>{this.state.time}</Text>
        </View>
        <Text style={styles.logoText}>SQUAD OPS</Text>
      </View>
    );
  }
}

const styles = {
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
};

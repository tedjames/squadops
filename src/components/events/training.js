import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Training extends Component {
  static navigationOptions = {
    title: 'Training',
    header: null
  }

  render() {
    return (
      <View>
        <Text>Training</Text>
      </View>
    );
  }
}

export { Training };

import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Operation extends Component {
  static navigationOptions = {
    title: 'Operation',
    header: null
  }

  render() {
    return (
      <View>
        <Text>Operation</Text>
      </View>
    );
  }
}

export { Operation };

import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons';

export default class Shortcut extends Component {
  render() {
    const { type, name, size, label, top, inverted } = this.props;
    const styles = {
      shortcut: {
        height: 67.5,
        width: 92.5,
        marginLeft: 10,
        marginTop: 20,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: inverted ? "#F5F5F5" : "#3F44EA",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.275,
        shadowRadius: 8,
        elevation: 1,
        position: 'relative'
      },
      shortcutName: {
        fontFamily: 'open-sans',
        fontSize: 10,
        letterSpacing: 0.45,
        backgroundColor: 'transparent',
        color: inverted ? "#3F44EA" : "#F5F5F5",
        marginTop: 3,
        position: 'absolute',
        bottom: 15
      },
    };

    return (
      <TouchableOpacity activeOpacity={0.6} style={styles.shortcut}>
        {type === 'MaterialCommunityIcons' ?
          <MaterialCommunityIcons style={{ position: 'absolute', top }} name={name} size={size} color={ inverted ? "#3F44EA" : "#F5F5F5" } /> :
          <EvilIcons style={{ position: 'absolute', top }} name={name} size={size} color={ inverted ? "#3F44EA" : "#F5F5F5" } />
        }
        <Text style={styles.shortcutName}>{label}</Text>
      </TouchableOpacity>
    );
  }
}

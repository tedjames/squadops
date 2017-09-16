import React from 'react';
import { ScrollView, View, Text } from 'react-native';

const Section = ({ title, style, children, snapToInterval }) => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.sectionName}>{title}</Text>
      <ScrollView
        style={style || null}
        contentContainerStyle={{ paddingRight: 15 }}
        showsHorizontalScrollIndicator={false}
        snapToInterval={snapToInterval || 365}
        decelerationRate={'fast'}
        horizontal
      >
        {children}
      </ScrollView>
    </View>
  );
};

const styles = {
  sectionName: {
    fontFamily: 'syncopate',
    fontSize: 15,
    letterSpacing: 1.65,
    backgroundColor: 'transparent',
    color: '#32383c',
    marginLeft: 17.5,
    marginTop: 10
  },
};

export default Section;

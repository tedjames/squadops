import React from 'react';
import { ScrollView, View, Text, Animated, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const cardWidth = screenWidth / 1.25;

const Section = ({ title, style, children, snapToInterval, sectionPosition }) => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.sectionName}>{title}</Text>
      <Animated.ScrollView
        style={[style || null, { transform: [{ translateY: sectionPosition }] }]}
        contentContainerStyle={{ paddingRight: 15 }}
        showsHorizontalScrollIndicator={false}
        snapToInterval={snapToInterval || cardWidth}
        decelerationRate={'fast'}
        horizontal
      >
        {children}
      </Animated.ScrollView>
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
    marginTop: 12.5
  },
};

export default Section;

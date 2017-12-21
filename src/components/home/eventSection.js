import React from 'react';
import { FlatList, View, Text, Animated, Dimensions } from 'react-native';
import EventCard from './eventCard';

// Navigation helper HOC
import NavActions from '../../hocs/eventNavActions';

const screenWidth = Dimensions.get('window').width;
const cardWidth = screenWidth / 1.25;

const EventSection = ({ title, style, children, snapToInterval, sectionPosition, data, navigate }) => {
  const Operation = NavActions(EventCard, navigate, 'Operation');
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.sectionName}>{title}</Text>
      <Animated.FlatList
        style={[style || null, { transform: [{ translateY: sectionPosition }] }]}
        contentContainerStyle={{ paddingRight: 15 }}
        showsHorizontalScrollIndicator={false}
        snapToInterval={snapToInterval || cardWidth}
        decelerationRate={'fast'}
        horizontal
        data={data}
        renderItem={({ item }) => <Operation name={item.name} day={item.day} month={item.month} image={item.image.forest} registered={item.registered} />}
      />
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

export default EventSection;

import React from 'react';
import { View, Text, Animated, Dimensions, FlatList } from 'react-native';
import EventCard from './eventCard';
import ServerCard from './serverCard';
import ShortcutCard from './shortcutCard';

// Navigation helper HOC
import NavActions from '../../hocs/eventNavActions';

// Constants
const screenWidth = Dimensions.get('window').width;
const cardWidth = screenWidth / 1.25;

// Makes FlatList compatible w/ Animated
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

// Rendering functions for FlatList items
const renderShortcut = ({ iconType, name, size, label, top }, navigate) => {
  return <ShortcutCard iconType={iconType} name={name} size={size} label={label} top={top} />;
}
const renderOperation = ({ name, day, month, image, registered }, navigate) => {
  const Operation = NavActions(EventCard, navigate, 'Operation');
  return <Operation name={name} day={day} month={month} image={image} registered={registered} />;
}
const renderServer = ({ playerCount, map, name, day, month, intensity, image, gradient, tint }, navigate) => {
  const Server = NavActions(ServerCard, navigate, 'Server');
  return <Server playerCount={playerCount} map={map} name={name} day={day} month={month} intensity={intensity} image={image} gradient={gradient} tint={tint} />;
}

// Rendering helper to determine what to render based on item type ('shortcuts', 'servers', 'operations', or 'training')
const renderItem = (type, item, navigate) => {
  switch (type) {
    case 'shortcuts':
      return renderShortcut(item, navigate);
    case 'servers':
      return renderServer(item, navigate);
    case 'operations':
      return renderOperation(item, navigate);
    case 'training':
      return renderOperation(item, navigate);
    default:
      console.error('Event type not defined. Please set type prop to "shortcuts", "servers", "operations", or "training". ');
      break;
  }
}

const EventSection = ({ title, type, sectionPosition, data, navigate, snapToInterval, style }) => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.sectionName}>{title}</Text>
      <AnimatedFlatList
        style={[style || null, { transform: [{ translateY: sectionPosition }] }]}
        contentContainerStyle={{ paddingRight: 15 }}
        showsHorizontalScrollIndicator={false}
        snapToInterval={snapToInterval || cardWidth}
        decelerationRate={'fast'}
        horizontal
        data={data}
        renderItem={({ item }) => renderItem(type, item, navigate)}
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

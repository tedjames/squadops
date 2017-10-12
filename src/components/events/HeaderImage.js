import React from 'react';
import { Image, Animated } from 'react-native';
import { BlurView } from 'expo';

const HeaderImage = ({ image, translateY }) => {
  return (
    <Animated.Image style={[styles.backgroundImage, { transform: [{ translateY: translateY || 0 }] }]} source={image || require('../../../assets/images/default.png')}>
      <BlurView intensity={75} style={{ position: 'absolute', top: 0, height: '100%', width: '100%' }} />
    </Animated.Image>
  );
};

const styles = {
  backgroundImage: {
    height: 180,
    width: '100%',
    position: 'relative',
  },
};

export default HeaderImage;

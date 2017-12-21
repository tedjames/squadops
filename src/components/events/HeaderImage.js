import React from 'react';
import { Animated, ImageBackground } from 'react-native';
import { BlurView } from 'expo';

const HeaderImage = ({ image, translateY }) => {
  return (
    <ImageBackground style={styles.backgroundImage} source={image || require('../../../assets/images/default.png')}>
      <BlurView intensity={75} style={{ position: 'absolute', top: 0, height: '100%', width: '100%' }} />
    </ImageBackground>
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

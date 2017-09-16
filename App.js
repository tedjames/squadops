import Expo from 'expo';
import React, { Component } from 'react';
import Main from './src';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appReady: false,
    };
  }
  componentWillMount() {
    this.loadAssetsAsync();
  }
  async loadAssetsAsync() {
    const cacheImages = images => images.map(image => Expo.Asset.fromModule(image).downloadAsync());
    const cacheFonts = fonts => fonts.map(font => Expo.Font.loadAsync(font));

    const imageAssets = cacheImages([
      require('./assets/images/basrah.png'),
      require('./assets/images/forest.png'),
      require('./assets/images/logarNight.png'),
      require('./assets/images/default.png'),
      require('./assets/images/aws.png'),
      require('./assets/images/leadership.jpeg'),
      require('./assets/images/vehicle.jpg'),
    ]);

    const fontAssets = cacheFonts([
      { 'open-sans': require('./assets/fonts/OpenSans-Regular.ttf') },
      { 'open-sans-light': require('./assets/fonts/OpenSans-Light.ttf') },
      { 'open-sans-semibold': require('./assets/fonts/OpenSans-SemiBold.ttf') },
      { 'open-sans-extrabold': require('./assets/fonts/OpenSans-ExtraBold.ttf') },
      { 'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf') },
      { 'rubik': require('./assets/fonts/Rubik-Regular.ttf') },
      { 'rubik-light': require('./assets/fonts/Rubik-Light.ttf') },
      { 'rubik-medium': require('./assets/fonts/Rubik-Medium.ttf') },
      { 'syncopate': require('./assets/fonts/Syncopate-Regular.ttf') },
      { 'syncopate-bold': require('./assets/fonts/Syncopate-Bold.ttf') },
      { 'roboto-light': require('./assets/fonts/Roboto-Light.ttf') },
      { 'roboto': require('./assets/fonts/Roboto-Regular.ttf') },
      { 'roboto-thin': require('./assets/fonts/Roboto-Thin.ttf') },
      { 'lato': require('./assets/fonts/Lato-Regular.ttf') },
      { 'lato-bold': require('./assets/fonts/Lato-Bold.ttf') },
      { 'lato-black': require('./assets/fonts/Lato-Black.ttf') },
    ]);

    await Promise.all([
      ...imageAssets,
      ...fontAssets
    ]);

    this.setState({ appReady: true });
  }
  render() {
    if (!this.state.appReady) {
      return <Expo.AppLoading />;
    } return <Main />;
  }
}

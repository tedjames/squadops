import { StackNavigator } from 'react-navigation';

import Home from './components/home';
import Media from './components/media';
import { Operation, Training } from './components/events';

const Router = StackNavigator({
  Home: {
    screen: Home,
  },
  Media: {
    screen: Media,
  },
  Operation: {
    screen: Operation,
  },
  Training: {
    screen: Training
  }
});

export default Router;

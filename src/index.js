import { StackNavigator } from 'react-navigation';

import Home from './components/home';
import Media from './components/media';

const Router = StackNavigator({
  Home: {
    screen: Home,
  },
  Media: {
    screen: Media,
  }
});

export default Router;

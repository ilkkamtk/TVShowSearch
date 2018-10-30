import {createStackNavigator} from 'react-navigation';

import HomeScreen from '../containers/HomeScreen';
import ArticleScreen from '../containers/ArticleScreen';
import SearchScreen from '../containers/SearchScreen';

const RootNavigator = createStackNavigator({
  Home: {
    screen: SearchScreen,
  },
  Article: {
    screen: ArticleScreen,
    navigationOptions: {
      headerTitle: 'Show',
    },
  },
  Results: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Results',
    },
  },
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    headerTitle: 'TV Show Search',
    headerBackTitle: 'Back',
  },
});

export default RootNavigator;
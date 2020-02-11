import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/Main';
import Detail from './pages/Detail';

const AppNavigator = createStackNavigator({
  Main,
  Detail,
});

export default createAppContainer(AppNavigator);

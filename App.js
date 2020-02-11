import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from './src/Containers/App.js';
import CartScreen from './src/Containers/Cart';

const AppNavigator = createStackNavigator({
  FoodCourt: MainScreen,
  Cart: CartScreen
},
  {
    intialRouteName: 'FoodCourt',
  })

export default createAppContainer(AppNavigator);
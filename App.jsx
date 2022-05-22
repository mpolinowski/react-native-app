import React from 'react'
// import {AppRegistry} from 'react-native'

import Home from './src/screens/Home';

const App = () => {
  return (
    <Home />
  )
}

export default App

// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs';

// import Home from './screens/Home';
// import Details from './screens/Details';
// import Settings from './screens/Settings';

// const HomeStack = createStackNavigator({
//   Home: {
//     screen: Home,
//     navigationOptions: {
//       title: 'Home'
//     }
//   },
//   Details: {
//     screen: Details,
//     navigationOptions: {
//       title: 'Details'
//     }
//   },
//   Settings: {
//     screen: Settings,
//     navigationOptions: {
//       title: 'Settings'
//     }
//   }
// })


// export default createAppContainer(HomeStack)
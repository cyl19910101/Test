import React from 'react';
import { TabNavigator } from 'react-navigation';
import SplashScreen from './SplashScreen';

const MainTabs = TabNavigator({
  Home: {
    screen: SplashScreen
  },
  Next: {
      screen: HomeScreen
  }
})

export default MainTabs;

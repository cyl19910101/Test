import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import { StackNavigator } from 'react-navigation';
import configureStore from './configureStore';
import SplashScreen from './src/components/SplashScreen';
import HomeScreen from './src/components/HomeScreen';

const Navigation = StackNavigator({
    Splash: {
      screen: SplashScreen
    },
    Home: {
      screen: HomeScreen
    }
})

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
  }
}

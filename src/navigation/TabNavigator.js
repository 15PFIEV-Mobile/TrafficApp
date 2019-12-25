import React, {Component} from 'react';
import ProfileScreen from '../views/tabs/ProfileScreen';
import MapsTabScreen from '../views/tabs/MapsTabScreen';
import ListStreamPoint from '../views/tabs/ListStreamPoint';
import RecorderScreen from '../views/tabs/RecorderScreen';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

const BottomTab = createBottomTabNavigator({
  ProfileTab: {
    screen : ProfileScreen
  },
  MapTab: {
    screen : MapsTabScreen,
  },
  StreamsTab: {
    screen : ListStreamPoint
  },
  RecorderTab: {
    screen: RecorderScreen
  }
})

export default createAppContainer(BottomTab)
import React, {Component} from 'react';
import ProfileScreen from '../views/tabs/ProfileScreen';
import MapsTabScreen from '../views/tabs/MapsTabScreen';
import ListStreamPoint from '../views/tabs/ListStreamPoint';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

const BottomTab = createBottomTabNavigator({
  MapsTab: {
    screen : MapsTabScreen,
  },
  StreamsTab: {
    screen : ListStreamPoint
  },
  ProfileTabs: {
    screen : ProfileScreen
  },
})

export default createAppContainer(BottomTab)
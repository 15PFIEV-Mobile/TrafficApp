import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../views/HomeScreen'

const AppNavigator = createStackNavigator(
    {
      Home: HomeScreen,
    },
    {
      initialRouteName: 'Home',
    }
  );

export default createAppContainer(AppNavigator);
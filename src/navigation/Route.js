import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from '../views/Welcome'

const AppNavigator = createStackNavigator(
    {
      Home: Welcome,
    },
    {
      initialRouteName: 'Home',
    }
  );

export default createAppContainer(AppNavigator);
import React from 'react';
import ExchangeScreen from '../screens/ExchangeScreen';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator';

export const AppTabNavigator = createBottomTabNavigator({
    HomeScreen: {
        screen: AppStackNavigator,
        navigationOptions: {
            tabBarIcon: <Image source = {require('../assets/HomeScreen.png')} style = {{width: 30, height: 30}}/>,
            tabBarLabel: 'Home'
        }
    },
    ExchangeScreen: {
        screen: ExchangeScreen,
        navigationOptions: {
            tabBarIcon: <Image source = {require('../assets/Exchange.png')} style = {{width: 30, height: 30}}/>,
            tabBarLabel: 'Exchange'
        }
    }
})
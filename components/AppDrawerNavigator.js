import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import MyDonationScreen from '../screens/MyDonationScreen';
import SettingsScreen from '../screens/SettingsScreen';
import NotificationScreen from '../screens/NotificationScreen';
import MyRecievedBooks from '../screens/MyRecievedBooks';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
    },
  MyDonations : {
    screen : MyDonationScreen
  },
  MyRecievedBooks : {
    screen: MyRecievedBooks
  },
  Notifications : {
    screen: NotificationScreen
  },
  Settings : {
    screen : SettingsScreen
  }
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
})
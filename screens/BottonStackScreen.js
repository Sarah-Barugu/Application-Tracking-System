import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const {Navigator, Screen} = createBottomTabNavigator();

import MyApplications from './MyApplicationsScreen';
import MyOffers from './MyOffersScreen';
import Jobs from './JobsScreen';
import MyProfile from './MyProfileScreen';
import MyHistory from './MyHistoryScreen';
import {Image} from 'react-native';

const size = 23;
const BottomStackScreen = ({navigation}) => (
  <Navigator
    screenOptions={
      Platform.OS == 'ios'
        ? {
            keyboardHidesTabBar: true,
            tabBarActiveTintColor: '#D62196',
            tabBarInactiveTintColor: 'black',
            allowFontScaling: true,
            labelStyle: {
              backgroundColor: 'white',
              fontSize: 12,
            },

            style: {
              height: 100,
            },
            headerShown: true,
          }
        : {
            keyboardHidesTabBar: true,
            tabBarActiveTintColor: '#D62196',
            tabBarInactiveTintColor: 'black',
            allowFontScaling: true,
            labelStyle: {
              height: 20,
              backgroundColor: 'white',
              fontSize: 12,
            },

            style: {
              height: 70,
            },
            headerShown: true,
          }
    }>
    <Screen
      name="MyApplications"
      component={MyApplications}
      options={({route}) => ({
        tabBarLabel: 'Applications',
        tabBarIcon: ({color}) => (
          <Image
            source={require('../assets/clock.png')}
            style={{tintColor: color, height: size, width: size}}
          />
        ),
      })}
    />
    <Screen
      name="MyOffers"
      component={MyOffers}
      options={({route}) => ({
        tabBarLabel: 'Offers',
        tabBarIcon: ({color}) => (
          <Image
            source={require('../assets/book.png')}
            style={{tintColor: color, height: size, width: size}}
          />
        ),
      })}
    />
    <Screen
      name="Jobs"
      component={Jobs}
      options={({route}) => ({
        tabBarLabel: 'Jobs',
        tabBarIcon: ({color}) => (
          <Image
            source={require('../assets/darkCheck-circle.png')}
            style={{tintColor: color, height: size, width: size}}
          />
        ),
      })}
    />
    <Screen
      name="MyProfile"
      component={MyProfile}
      options={({route}) => ({
        tabBarLabel: 'Profile',
        tabBarIcon: ({color}) => (
          <Image
            source={require('../assets/bookmark.png')}
            style={{tintColor: color, height: size, width: size}}
          />
        ),
      })}
    />
    <Screen
      name="MyHistory"
      component={MyHistory}
      options={({route}) => ({
        tabBarLabel: 'History',
        tabBarIcon: ({color}) => (
          <Image
            source={require('../assets/thumbs-up.png')}
            style={{tintColor: color, height: size, width: size}}
          />
        ),
      })}
    />
  </Navigator>
);

export default BottomStackScreen;

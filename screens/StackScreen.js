import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
const { Navigator, Screen } = createStackNavigator();

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './signUpScreen';
import { SafeAreaView, Text } from 'react-native';

const HomeScreen = () => {
  return(
    <SafeAreaView>
    <Text>Home Screen</Text>
    </SafeAreaView>
  )
}

const StackScreen = ({navigation}) => (
    <Navigator headerMode='none'>
        <Screen name="HomeScreen" component={HomeScreen}/>
        {/* <Screen name="SplashScreen" component={SplashScreen}/>
        <Screen name="SignInScreen" component={SignInScreen}/>
        <Screen name="SignUpScreen" component={SignUpScreen}/> */}
    </Navigator>
);

export default StackScreen;
import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
const {Navigator, Screen} = createStackNavigator();

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import ResetLinkScreen from './ResetLinkScreen';
import AccountCreatedScreen from './AccountCreatedScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import ChangePasswordScreen from './ChangePasswordScreen';
import NewPassCreatedScreen from './NewPassCreatedScreen';
import {SafeAreaView, Text} from 'react-native';

const StackScreen = ({navigation}) => (
  <Navigator headerMode="none">
    <Screen name="SplashScreen" component={SplashScreen} />
    <Screen name="SignInScreen" component={SignInScreen} />
    <Screen name="SignUpScreen" component={SignUpScreen} />
    <Screen name="ResetLinkScreen" component={ResetLinkScreen} />
    <Screen name="AccountCreatedScreen" component={AccountCreatedScreen} />
    <Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
    <Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
    <Screen name="NewPassCreatedScreen" component={NewPassCreatedScreen} />
  </Navigator>
);

export default StackScreen;

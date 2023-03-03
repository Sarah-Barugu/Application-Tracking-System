import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
const {Navigator, Screen} = createStackNavigator();

import BottomStackScreen from './BottomStackScreen';
import {
  AccountCreatedScreen,
  ChangePasswordScreen,
  ForgotPasswordScreen,
  NewPassCreatedScreen,
  ResetLinkScreen,
  SignInScreen,
  SplashScreen,
} from '../screens';
import SignUpScreen from '../screens/SignUpScreen';
import AppliedJobDescScreen from '../screens/AppliedJobDescScreen';
import JobDescScreen from '../screens/JobsDescScreen';

const StackScreen = () => (
  <Navigator headerMode="none">
    <Screen name="SplashScreen" component={SplashScreen} />
    <Screen name="SignInScreen" component={SignInScreen} />
    <Screen name="SignUpScreen" component={SignUpScreen} />
    <Screen name="ResetLinkScreen" component={ResetLinkScreen} />
    <Screen name="AccountCreatedScreen" component={AccountCreatedScreen} />
    <Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
    <Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
    <Screen name="NewPassCreatedScreen" component={NewPassCreatedScreen} />
    <Screen name="AppliedJobDescScreen" component={AppliedJobDescScreen} />
    <Screen name="JobDescScreen" component={JobDescScreen} />
    <Screen name="BottomStackScreen" component={BottomStackScreen} />
  </Navigator>
);

export default StackScreen;

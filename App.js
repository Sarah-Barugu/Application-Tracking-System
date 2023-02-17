import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';


import StackScreen from './screens/StackScreen';
import BottomStackScreen from './screens/BottonStackScreen';

export default function App() {
  return (
    <NavigationContainer>
      <StackScreen/>
      {/* <BottomStackScreen/> */}
    </NavigationContainer>
  );
}



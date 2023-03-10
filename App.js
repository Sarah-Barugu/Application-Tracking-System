import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import StackScreen from './src/navigation/StackScreen';

export default function App() {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
}

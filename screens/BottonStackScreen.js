import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen} = createBottomTabNavigator();

import MyApplications from './MyApplicationsScreen'
import MyOffers from './MyOffersScreen'

const BottomStackScreen = ({navigation}) =>  (
    <Navigator>
      <Screen name="MyApplications" component={MyApplications} />
       <Screen name="MyOffers" component={MyOffers} />
      {/* <Screen name="Jobs" component={Jobs} />
      <Screen name="MyProfile" component={MyProfile} />
      <Screen name="MyHistory" component={MyHistory} />  */}
    </Navigator>
  )
  
  export default BottomStackScreen
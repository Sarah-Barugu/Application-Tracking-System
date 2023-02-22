import { View, Text, SafeAreaView, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
const {height, width} = Dimensions.get("screen")


export default function MyOffersScreen({navigation}) {
  return(
<SafeAreaView style= {{backgroundColor: '#fff'}}>
  <View style= {styles.container}>
<View style= {{width}}>
      <TouchableOpacity onPress = {() => navigation.navigate()} style = {styles.items}>
      <Image
            source= {require('../assets/book.png')}
            style= {styles.logo}
            resizeMode= 'contain'
          /> 
        <Text style= {styles.icon}>My Offers</Text>
          </TouchableOpacity> 
       </View> 
  </View>
</SafeAreaView>
)
}

const styles = StyleSheet.create({
  container: {
    height,
    width,
    alignItems: 'center',
    backgroundColor: "#fff",
    // paddingTop: 25
  }, 
  logo: {
height : 18
  },
  icon:{
    color: '#D62196',
    fontSize: 14,
    paddingRight: 10
  },
  items: {
    flexDirection: 'row',
    background: '#5E5873'
  }
})
import { View, Text, SafeAreaView, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

export default function NewPassCreatedScreen({navigation}) {
  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
    <View style= {styles.container}>
      <Text style= {styles.title}>New Password Created</Text>
      <Text style= {styles.text}>Proceed to the login page to access your account</Text>
      <Image
            source= {require('../assets/check-circle.png')}
            style= {styles.png}
            resizeMode= 'contain'
          />
    <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')} style= {styles.btn} >
        <Text style= {styles.textSign}>Proceed to Login</Text>
          </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

const {height, width} = Dimensions.get("screen")


const styles = StyleSheet.create({
  container: {
    height,
    width,
    alignItems: 'center',
    backgroundColor: "#fff",
    paddingTop: 25
  },
  title: {
    fontSize: 26,
    color: '#5E5873',
    marginTop: 18
  },
  text: {
    size: 14,
    color: '#5E5873',
    marginTop: 18
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold'
},
btn: {
  backgroundColor: '#440F7C',
  height: 40,
  width: 220,
  borderRadius: 8,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 50
},
png: {
  marginTop: 60
}
})
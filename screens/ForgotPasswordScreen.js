import { View, Text, SafeAreaView, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const {height, width} = Dimensions.get("screen")

export default function ForgetPasswordScreen({navigation}) {
  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
    <View style= {styles.container}>
      <View style= {{width}}>
      <TouchableOpacity onPress = {() => navigation.goBack()} style= {styles.backNav} >
      <Image
            source= {require('../assets/back.png')}
            style= {styles.png}
            resizeMode= 'contain'
          /> 
        <Text style= {styles.icon}>Back</Text>
          </TouchableOpacity> 
       </View>   
      <Text style= {styles.title}>Forgot Password?</Text>
      <Text style= {styles.text}>Enter the email address associated with your account</Text>
    <View>
      <Text style= {styles.inputText}>Email Address <Text style= {{...styles.inputText, color: 'red'}}>*</Text> </Text>
      <TextInput style= {styles.inputContainer}/>
    </View>
    <TouchableOpacity onPress={() => navigation.navigate('ResetLinkScreen')} style= {styles.btn} >
        <Text style= {styles.textSign}>Send Password Reset Link</Text>
          </TouchableOpacity>
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
    marginTop: 25
  },
  inputContainer: {
    height: 56,
    width: width * 0.9,
    borderWidth: 1,
    borderColor: '#5E5873',
    borderRadius: 6,
    paddingHorizontal: 8,
    marginTop: 5
  },
  inputText: {
    fontSize: 16,
    color: '#5E5873',
    marginTop: 50
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold'
},
btn: {
  backgroundColor: '#440F7C',
  height: 40,
  width: 270,
  borderRadius: 8,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 40
}, 
icon: {
fontSize: 18
},
png: {
  height: 20
},
backNav: {
  flexDirection: 'row',
  marginLeft:10
}
})
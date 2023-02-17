import { View, Text, SafeAreaView, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function SignInScreen({navigation}) {
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
      <Text style= {styles.title}>Application Tracker</Text>
      <Text style= {styles.text}>Login to access and manage your job applications</Text>
    <View>
      <Text style= {styles.inputText}>Email Address <Text style= {{...styles.inputText, color: 'red'}}>*</Text> </Text>
      <TextInput style= {styles.inputContainer}/>
    </View>
    <View>
      <Text style= {styles.inputText}>Password <Text style= {{...styles.inputText, color: 'red'}}>*</Text> </Text>
      <TextInput style= {styles.inputContainer}/>
    </View>
    <TouchableOpacity style= {styles.btn} >
        <Text style= {styles.textSign}>Login</Text>
          </TouchableOpacity>
    <TouchableOpacity onPress= {() => navigation.navigate('ForgotPasswordScreen')}>
      <Text style= {styles.inputSign}>Forgot Password?</Text>
    </TouchableOpacity> 
    <View style={{flexDirection:'row',alignItems:'center'}}><Text style= {styles.textProperty}>Don't have an account?</Text>
    <TouchableOpacity onPress= {() => navigation.navigate('SignUpScreen')}><Text style= {{...styles.textProperty, color: '#D62196'}}>Sign Up</Text>
    </TouchableOpacity></View>
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
    marginTop: 40
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold'
},
btn: {
  backgroundColor: '#440F7C',
  height: 40,
  width: 160,
  borderRadius: 8,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 34
}, 
inputSign: {
  color: '#D62196',
  fontSize: 14,
  marginTop: 45
},
textProperty:{
  fontSize: 14,
  marginTop: 50,
  color: '#5E5873'
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
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
      <Text style= {styles.title}>Sign Up</Text>
    <View>
      <Text style= {styles.inputText}>Email Address <Text style= {{...styles.inputText, color: 'red'}}>*</Text> </Text>
      <TextInput style= {styles.inputContainer}/>
    </View>
    <View>
      <Text style= {styles.inputText}>Password <Text style= {{...styles.inputText, color: 'red'}}>*</Text> </Text>
      <TextInput style= {styles.inputContainer}/>
    </View>
    <View>
      <Text style= {styles.inputText}>Confirm Password <Text style= {{...styles.inputText, color: 'red'}}>*</Text> </Text>
      <TextInput style= {styles.inputContainer}/>
    </View>
    <TouchableOpacity onPress={() => navigation.navigate('AccountCreatedScreen')} style= {styles.btn} >
        <Text style= {styles.textSign}>Sign Up</Text>
          </TouchableOpacity> 
    <View style={{flexDirection:'row',alignItems:'center'}}><Text style= {styles.textProperty}>Already have an account?</Text>
    <TouchableOpacity onPress= {() => navigation.navigate('SignInScreen')}>
      <Text style= {{...styles.textProperty, color: '#D62196'}}>Sign In</Text>
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
textProperty:{
  fontSize: 14,
  marginTop: 70,
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
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ChangePasswordScreen({navigation}) {
  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <Text style={styles.title}>Change Password</Text>
        <Text style={styles.text}>
          Make Sure to create something secure and you can easily remember.
        </Text>
        <View>
          <Text style={styles.inputText}>
            Password <Text style={{...styles.inputText, color: 'red'}}>*</Text>{' '}
          </Text>
          <TextInput style={styles.inputContainer} />
        </View>
        <View>
          <Text style={styles.inputText}>
            Confirm Password{' '}
            <Text style={{...styles.inputText, color: 'red'}}>*</Text>{' '}
          </Text>
          <TextInput style={styles.inputContainer} />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('NewPassCreatedScreen')}
          style={styles.btn}>
          <Text style={styles.textSign}>Save Password</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    height,
    width,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 25,
  },
  title: {
    fontSize: 26,
    color: '#5E5873',
    marginTop: 18,
  },
  text: {
    fontSize: 14,
    color: '#5E5873',
    marginTop: 18,
  },
  inputContainer: {
    height: 56,
    width: width * 0.9,
    borderWidth: 1,
    borderColor: '#5E5873',
    borderRadius: 6,
    paddingHorizontal: 8,
    marginTop: 5,
  },
  inputText: {
    fontSize: 16,
    color: '#5E5873',
    marginTop: 28,
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: '#440F7C',
    height: 40,
    width: 160,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 34,
  },
});

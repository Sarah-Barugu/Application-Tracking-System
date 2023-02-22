import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

import Eye from '../assets/eye.png';
import EyeActive from '../assets/eye-crossed.png';

export default function SignInScreen({navigation}) {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [seePassword, setSeePassword] = useState(true);
  const [seeConfirmPassword, setSeeConfirmPassword] = useState(true);
  const [checkValidEmail, setCheckValidEmail] = useState(false);

  const handleCheckEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmailAddress(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

  const checkPasswordValidity = value => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return 'Password must not contain Whitespaces.';
    }

    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(value)) {
      return 'Password must have at least one Uppercase Character.';
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(value)) {
      return 'Password must have at least one Lowercase Character.';
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(value)) {
      return 'Password must contain at least one Digit.';
    }

    const isValidLength = /^.{8,16}$/;
    if (!isValidLength.test(value)) {
      return 'Password must be 5-16 Characters Long.';
    }

    return null;
  };

  //   // Send data to server to create new user account
  //   try {
  //     const response = await fetch('http://your-server.com/signup', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({emailAddress, password, confirmPassword}),
  //     });

  //     // Handle server response
  //     const data = await response.json();
  //     if (response.status === 201) {
  //       alert('Sign up successful!');
  //       // Store user data locally
  //     } else {
  //       alert(`Error: ${data.message}`);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleSignUp = () => {
    const checkPassword = checkPasswordValidity(password, confirmPassword);
    if (!checkPassword) {
      Alert('Account Created');
      navigation.navigate('AccountCreatedScreen');
    } else {
      Alert(checkPassword);
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <View style={{width}}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backNav}>
            <Image
              source={require('../assets/back.png')}
              style={styles.png}
              resizeMode="contain"
            />
            <Text style={styles.icon}>Back</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Sign Up</Text>
        <View>
          <Text style={styles.inputText}>
            Email Address{' '}
            <Text style={{...styles.inputText, color: 'red'}}>*</Text>{' '}
          </Text>
          <TextInput
            style={styles.inputContainer}
            placeholder="Email Address"
            value={emailAddress}
            onChangeText={text => handleCheckEmail(text)}
          />
          {checkValidEmail ? (
            <Text style={styles.textFailed}>Wrong format email</Text>
          ) : (
            <Text style={styles.textFailed}> </Text>
          )}
        </View>
        <View>
          <Text style={styles.inputText}>
            Password <Text style={{...styles.inputText, color: 'red'}}>*</Text>{' '}
          </Text>
          <View>
            <TextInput
              style={styles.inputContainer}
              placeholder="Password"
              secureTextEntry={seePassword}
              value={password}
              onChangeText={text => setPassword(text)}
            />
            <TouchableOpacity
              style={styles.wrapperIcon}
              onPress={() => setSeePassword(!seePassword)}>
              <Image
                source={seePassword ? Eye : EyeActive}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.inputText}>
            Confirm Password{' '}
            <Text style={{...styles.inputText, color: 'red'}}>*</Text>{' '}
          </Text>
          <View>
            <TextInput
              style={styles.inputContainer}
              placeholder="Confirm Password"
              secureTextEntry={seeConfirmPassword}
              value={confirmPassword}
              onChangeText={text => setConfirmPassword(text)}
            />
            <TouchableOpacity
              style={styles.wrapperIcon}
              onPress={() => setSeeConfirmPassword(!seeConfirmPassword)}>
              <Image
                source={seeConfirmPassword ? Eye : EyeActive}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>

        {emailAddress == '' ||
        password == '' ||
        confirmPassword == '' ||
        checkValidEmail == true ? (
          <TouchableOpacity
            disabled
            style={styles.buttonDisable}
            onPress={handleSignUp}>
            <Text style={styles.textSign}>Sign Up</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => navigation.navigate('AccountCreatedScreen')}
            style={styles.btn}>
            <Text style={styles.textSign}>Sign Up</Text>
          </TouchableOpacity>
        )}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.textProperty}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
            <Text style={{...styles.textProperty, color: '#D62196'}}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
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
    marginTop: 40,
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
  textProperty: {
    fontSize: 14,
    marginTop: 70,
    color: '#5E5873',
  },
  icon: {
    fontSize: 18,
  },
  png: {
    height: 20,
  },
  backNav: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  textFailed: {
    alignSelf: 'flex-end',
    color: 'red',
  },
  icon: {
    width: 30,
    height: 24,
  },
  wrapperIcon: {
    position: 'absolute',
    right: 0,
    paddingTop: 21,
    paddingRight: 5,
  },
  buttonDisable: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    borderRadius: 8,
    marginTop: 34,
    height: 40,
    width: 160,
  },
});

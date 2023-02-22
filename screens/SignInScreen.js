// import AsyncStorage from '@react-native-async-storage/async-storage';
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
import MyApplicationsScreen from './MyApplicationsScreen';

export default function SignInScreen({navigation}) {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword] = useState(true);
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

  // // const handleLogin = () => {
  // //   const checkPassowrd = checkPasswordValidity(password);
  // //   if (!checkPassowrd) {
  // //     user_login({
  // //       emailAddress: emailAddress.toLocaleLowerCase(),
  // //       password: password,
  // //     })
  // //       .then(result => {
  // //         if (result.status == 200) {
  // //           AsyncStorage.setItem('AccessToken', result.data.token);
  // //           navigation.replace('Home');
  // //         }
  // //       })
  // //       .catch(err => {
  // //         console.error(err);
  // //       });
  // //   } else {
  // //     alert(checkPassowrd);
  // //   }
  // // };

  const handleLogin = () => {
    const checkPassword = checkPasswordValidity(password);
    if (!checkPassword) {
      Alert('Success Login');
      navigation.navigate('BottomStackScreen');
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
        <Text style={styles.title}>Application Tracker</Text>
        <Text style={styles.text}>
          Login to access and manage your job applications
        </Text>
        <View>
          <Text style={styles.inputText}>
            Email Address{' '}
            <Text style={{...styles.inputText, color: 'red'}}>*</Text>{' '}
          </Text>
          <TextInput
            style={styles.inputContainer}
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
        {emailAddress == '' || password == '' || checkValidEmail == true ? (
          <TouchableOpacity
            disabled
            style={styles.buttonDisable}
            onPress={handleLogin}>
            <Text style={styles.textSign}>Login</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('BottomStackScreen'), handleLogin;
            }}
            style={styles.btn}>
            <Text style={styles.textSign}>Login</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPasswordScreen')}>
          <Text style={styles.inputSign}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.textProperty}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={{...styles.textProperty, color: '#D62196'}}>
              Sign Up
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
  text: {
    size: 14,
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
  buttonDisable: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    borderRadius: 8,
    marginTop: 34,
    height: 40,
    width: 160,
  },
  inputSign: {
    color: '#D62196',
    fontSize: 14,
    marginTop: 45,
  },
  textProperty: {
    fontSize: 14,
    marginTop: 50,
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
});

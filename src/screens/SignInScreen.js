import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import Eye from '../assets/eye.png';
import EyeActive from '../assets/eye-crossed.png';
import {loginUser} from '../actions/auth';

const loginValidationSchema = yup.object().shape({
  emailAddress: yup
    .string()
    .email('please enter valid email')
    .required('email address is required'),
  password: yup
    .string()
    .min(6, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
      'Must Contain at least 6 Characters,  one numeric digit, one uppercase and one lowercase letter,',
    ),
});

export default function SignInScreen({navigation}) {
  const [showPassword, setShowPassword] = useState(false);
  const login = async payload => {
    const response = await loginUser(payload);
    if (response && response.data) {
      console.log(response.status);
      navigation.navigate('BottomStackScreen');
    }
  };

  return (
    <Formik
      initialValues={{emailAddress: '', password: ''}}
      validateOnMount={true}
      onSubmit={login}
      validationSchema={loginValidationSchema}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isValid,
      }) => (
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
              <View>
                <TextInput
                  style={styles.inputContainer}
                  onChangeText={handleChange('emailAddress')}
                  onBlur={handleBlur('emailAddress')}
                  value={values.emailAddress}
                  placeholder="Email Address"
                  autoCapitalize="none"
                />
              </View>
            </View>
            {errors.emailAddress && touched.emailAddress && (
              <Text style={styles.textFailed}>{errors.emailAddress}</Text>
            )}
            <View>
              <Text style={styles.inputText}>
                Password{' '}
                <Text style={{...styles.inputText, color: 'red'}}>*</Text>{' '}
              </Text>
              <View>
                <TextInput
                  value={values.password}
                  style={styles.inputContainer}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  placeholder="Password"
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                  style={styles.wrapperIcon}
                  onPress={() => setShowPassword(!showPassword)}>
                  <Image
                    source={showPassword ? Eye : EyeActive}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
              {errors.password && touched.password && (
                <Text style={styles.textFailed}>{errors.password}</Text>
              )}
            </View>
            <TouchableOpacity
              disabled={!isValid}
              onPress={() => {
                handleSubmit();
              }}
              style={[
                styles.btn,
                {backgroundColor: isValid ? '#440F7C' : 'grey'},
              ]}>
              <Text style={styles.textSign}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPasswordScreen')}>
              <Text style={styles.inputSign}>Forgot Password?</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.textProperty}>Don't have an account?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignUpScreen')}>
                <Text style={{...styles.textProperty, color: '#D62196'}}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      )}
    </Formik>
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
    marginTop: 40,
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
  btn: {
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
    alignSelf: 'center',
    color: 'red',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
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

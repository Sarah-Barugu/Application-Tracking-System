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

const signUpValidationSchema = yup.object().shape({
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
  confirmPassword: yup
    .string()
    .test('passwords-match', 'Password must match', function (value) {
      return this.parent.password === value;
    }),
});

export default function SignUpScreen({navigation}) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <Formik
      initialValues={{emailAddress: '', password: '', confirmPassword: ''}}
      validateOnMount={true}
      onSubmit={() => navigation.navigate('AccountCreatedScreen')}
      validationSchema={signUpValidationSchema}>
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
            <Text style={styles.title}>Sign Up</Text>
            <View>
              <Text style={styles.inputText}>
                Email Address{' '}
                <Text style={{...styles.inputText, color: 'red'}}>*</Text>{' '}
              </Text>
              <TextInput
                style={styles.inputContainer}
                placeholder="Email Address"
                onChangeText={handleChange('emailAddress')}
                onBlur={handleBlur('emailAddress')}
                value={values.emailAddress}
              />
            </View>
            {errors.emailAddress && touched.emailAddress && (
              <Text style={styles.textFailed}>{errors.emailAddress}</Text>
            )}
            <View>
              <Text style={styles.inputText}>
                Password{' '}
                <Text style={{...styles.inputText, color: 'red'}}>*</Text>
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
            </View>
            {errors.password && touched.password && (
              <Text style={styles.textFailed}>{errors.password}</Text>
            )}
            <View>
              <Text style={styles.inputText}>
                Confirm Password{' '}
                <Text style={{...styles.inputText, color: 'red'}}>*</Text>{' '}
              </Text>
              <View>
                <TextInput
                  style={styles.inputContainer}
                  placeholder="Confirm Password"
                  secureTextEntry={!showConfirmPassword}
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                />
                <TouchableOpacity
                  style={styles.wrapperIcon}
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                  <Image
                    source={showConfirmPassword ? Eye : EyeActive}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {errors.confirmPassword && touched.confirmPassword && (
              <Text style={styles.textFailed}>{errors.confirmPassword}</Text>
            )}
            <TouchableOpacity
              disabled={!isValid}
              onPress={() => {
                handleSubmit();
              }}
              style={[
                styles.btn,
                {backgroundColor: isValid ? '#440F7C' : 'grey'},
              ]}>
              <Text style={styles.textSign}>Sign Up</Text>
            </TouchableOpacity>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.textProperty}>Already have an account?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignInScreen')}>
                <Text style={{...styles.textProperty, color: '#D62196'}}>
                  Sign In
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
    alignSelf: 'center',
    color: 'red',
    fontSize: 14,
    fontWeight: 'bold',
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

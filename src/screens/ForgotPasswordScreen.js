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
import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';

const {height, width} = Dimensions.get('screen');

const forgotPasswordValidationSchema = yup.object().shape({
  emailAddress: yup
    .string()
    .email('please enter valid email')
    .required('email address is required'),
});

export default function ForgetPasswordScreen({navigation}) {
  return (
    <Formik
      initialValues={{emailAddress: ''}}
      validateOnMount={true}
      onSubmit={() => navigation.navigate('ResetLinkScreen')}
      validationSchema={forgotPasswordValidationSchema}>
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
            <Text style={styles.title}>Forgot Password?</Text>
            <Text style={styles.text}>
              Enter the email address associated with your account
            </Text>
            <View>
              <Text style={styles.inputText}>
                Email Address{' '}
                <Text style={{...styles.inputText, color: 'red'}}>*</Text>{' '}
              </Text>
              <TextInput
                style={styles.inputContainer}
                onChangeText={handleChange('emailAddress')}
                onBlur={handleBlur('emailAddress')}
                value={values.emailAddress}
                placeholder="Email Address"
                autoCapitalize="none"
              />
            </View>
            {errors.emailAddress && touched.emailAddress && (
              <Text style={styles.textFailed}>{errors.emailAddress}</Text>
            )}
            <TouchableOpacity
              disabled={!isValid}
              onPress={() => handleSubmit()}
              style={[
                styles.btn,
                {backgroundColor: isValid ? '#440F7C' : 'grey'},
              ]}>
              <Text style={styles.textSign}>Send Password Reset Link</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      )}
    </Formik>
  );
}

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
    marginTop: 25,
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
    marginTop: 50,
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: '#440F7C',
    height: 40,
    width: 270,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
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
});

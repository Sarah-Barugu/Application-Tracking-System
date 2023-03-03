import AsyncStorage from '@react-native-async-storage/async-storage';
import request from '../api/request';

export const signUpUser = async data => {
  try {
    const result = await request({
      route: '/auth/signup',
      method: 'POST',
      payload: data,
    });
    console.log('data', result);
    return result;
  } catch (error) {
    console.log('error=================', error);
    return error.response.data;
  }
};

export const loginUser = async data => {
  try {
    const result = await request({
      route: '/auth/login',
      method: 'POST',
      payload: data,
    });
    const {
      data: {token},
    } = result;
    console.log("Sarah's token:", token);
    await AsyncStorage.setItem('token', token);

    return result;
  } catch (error) {
    return error.response.data;
  }
};

export const forgotPassword = async data => {
  try {
    const result = await request({
      route: '/auth/forgotPassword',
      method: 'POST',
      payload: data,
    });
    console.log('data', result);
    return result;
  } catch (error) {
    console.log('error=================', error);
    return error.response.data;
  }
};

export default {
  signUpUser,
  loginUser,
};

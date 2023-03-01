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

export default {
  signUpUser,
  loginUser,
};

// export const loginUser = async userData => {
//   try {
//     const response = await request({
//       // route: 'client/v2/device-login',
//       method: 'post',
//       payload: userData,
//     });
//     const data = response.data;
//     console.log('ISSUE', response);
//     if (data && data.response) {
//       const token = data.response.token;
//       await AsyncStorage.setItem('token', token);
//       await AsyncStorage.setItem('session', JSON.stringify(data.response));
//       return response.data.response;
//     }
//     return response.data;
//   } catch (err) {
//     console.log('...Error Message', err.response);
//   }
// };

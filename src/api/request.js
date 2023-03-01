import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const url = 'http://localhost:3000/api/v1';

// export default axios.create(url);

export default request = async ({route, method, payload, params, type}) => {
  console.log('ROUTE:', `${url}${route}`);
  const token = await AsyncStorage.getItem('token');
  console.log(token);
  method = method || 'get';
  const headers = {
    accept: type ? type : 'application/json',
    Authorization: `Bearer ${token}`,
  };

  if (!token) {
    delete headers.Authorization;
  }

  return axios({
    data: payload,
    url: `${url}${route}`,
    method,
    headers,
    params,
    ['Content-Type']: type ? type : 'application/json',
  });
};

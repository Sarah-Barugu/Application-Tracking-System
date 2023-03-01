import request from '../api/request';

export const getInformation = async () => {
  try {
    const result = await request({
      route: '/user/getMyAccount',
      // type: 'multipart/form-data',
    });
    console.log('results===========', result);
    return result.data;
  } catch (error) {
    console.log('Error jobs', error.response);
    return error;
  }
};

export const updateInformation = async () => {
  try {
    const result = await request({
      route: '/user/updateProfile',
      // type: 'multipart/form-data',
    });
    console.log('results===========', result);
    return result.data;
  } catch (error) {
    console.log('Error jobs', error.response);
    return error;
  }
};

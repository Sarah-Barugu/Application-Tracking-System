import request from '../api/request';

export const getUserInfo = async id => {
  try {
    const result = await request({
      route: '/user/getMyAccount',
      // method: 'POST',
      // type: 'multipart/form-data',
    });
    // console.log('resultssss===========', result.data);
    return result.data;
  } catch (error) {
    console.log('Error jobs', error.response);
    return error;
  }
};

export const updateUserInfo = async data => {
  try {
    const result = await request({
      route: '/user/updateProfile',
      method: 'PATCH',
      payload: data,
      // type: 'multipart/form-data',
    });
    console.log('results===========', result);
    return result.data;
  } catch (error) {
    console.log('Error jobs', error.response);
    return error;
  }
};

export const createAboutMe = async data => {
  try {
    const result = await request({
      route: '/aboutMe/createAboutMe',
      method: 'POST',
      payload: data,
      // type: 'multipart/form-data',
    });
    console.log('results===========', result);
    return result.data;
  } catch (error) {
    console.log('Error jobs', error.response);
    return error;
  }
};

export const getAboutMe = async id => {
  try {
    const result = await request({
      route: '/aboutMe/getAboutMe',
      // method: 'PATCH',
      // type: 'multipart/form-data',
    });
    // console.log('results===========', result);
    return result.data;
  } catch (error) {
    console.log('Error jobs', error.response);
    return error;
  }
};

export const updateWork = async id => {
  try {
    const result = await request({
      route: '/workExperience/updateWorkExperience/:id',
      method: 'PATCH',
      // type: 'multipart/form-data',
    });
    console.log('results===========', result);
    return result.data;
  } catch (error) {
    console.log('Error jobs', error.response);
    return error;
  }
};

export const getWork = async id => {
  try {
    const result = await request({
      route: '/workExperience/getAllWorkExperience',
      // method: 'PATCH',
      // type: 'multipart/form-data',
    });
    console.log('results===========', result);
    return result.data;
  } catch (error) {
    console.log('Error jobs', error.response);
    return error;
  }
};

export const createWork = async id => {
  try {
    const result = await request({
      route: '/workExperience/createWorkExperience',
      method: 'POST',
      // type: 'multipart/form-data',
    });
    console.log('results===========', result);
    return result.data;
  } catch (error) {
    console.log('Error jobs', error.response);
    return error;
  }
};

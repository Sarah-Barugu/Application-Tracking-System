import request from '../api/request';

export const getJobs = async () => {
  try {
    const result = await request({
      route: '/jobs/getJobs',
      // type: 'multipart/form-data',
    });
    console.log('results===========', result);
    return result.data;
  } catch (error) {
    console.log('Error jobs', error.response);
    return error;
  }
};

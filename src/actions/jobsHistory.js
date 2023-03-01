import request from '../api/request';

export const jobsHistory = async () => {
  try {
    const result = await request({
      route: '/jobs/getAllJobsHistory',
      // type: 'multipart/form-data',
    });
    console.log('results===========', result);
    return result.data;
  } catch (error) {
    console.log('Error jobs', error.response);
    return error;
  }
};

import request from '../api/request';

export const getAppliedJobs = async () => {
  try {
    const result = await request({
      route: '/jobs/getAllAppliedJobs',
      // type: 'multipart/form-data',
    });
    console.log('results===========', result);
    return result.data;
  } catch (error) {
    console.log('Error jobs', error.response);
    return error;
  }
};

export const createAppliedJobs = async id => {
  try {
    const result = await request({
      route: `/jobs/createJobsApplied/${id}`,
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

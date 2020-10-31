import axios from 'axios';

export const composeApi = () => {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API}`,
    timeout: 120000,
    headers: {
      accept: 'application/json',
      'Accept-Language': 'en-US,en;q=0.5',
    },
  });
  instance.interceptors.response.use(res => res, err => Promise.reject(err));
  return instance;
};

export default composeApi();
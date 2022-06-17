import axios, { AxiosRequestConfig } from 'axios';

const defaultOptions = {
  baseURL: process.env.REACT_APP_API_URI,
  headers: {
    'Content-Type': 'application/json',
  },
};

const instance = axios.create(defaultOptions);

// Set the AUTH token for any request
instance.interceptors.request.use(function (config: AxiosRequestConfig): AxiosRequestConfig {
  const token = '7de6573153d382f7e6ed29b0c4daed4735a641e931d25225fb44e1e89d03fc5f';
  config!.headers!.Authorization =  token ? `Bearer ${token}` : '';
  return config;
});

export default instance;
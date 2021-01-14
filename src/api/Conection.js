import axios from 'axios';
import { AsyncStorage } from 'react-native';

let url;
if (__DEV__) {
  url = 'http://cefeb820cab2.ngrok.io';
} else {
  url = 'http://cefeb820cab2.ngrok.io';
}

const instance = axios.create({
  baseURL: url
});
//instance.defaults.headers = {
//contentType: "application/json"
//}
instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;

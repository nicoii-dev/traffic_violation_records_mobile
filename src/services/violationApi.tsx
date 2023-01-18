import axios from 'axios';
import Toast from 'react-native-simple-toast';
const baseUrl = 'http://127.0.0.1:8000';

export const loginApi = async (payload: any) => {
  try {
    const configurationObject = {
      method: 'get',
      url: `${baseUrl}/api/violation`,
    };
    const response = await axios(configurationObject);
    return response;
  } catch (error) {
    Toast.showWithGravity(error.message, Toast.LONG, Toast.CENTER);
    console.log(error);
  }
};

export const forgotPasswordApi = async payload => {
  try {
    const response = await useApi.post('/auth/forgot-password', payload);
    const {data} = response;
    return data;
  } catch (err) {
    console.log(err);
  }
};

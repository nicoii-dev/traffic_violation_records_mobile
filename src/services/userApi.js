/* eslint-disable prettier/prettier */
import axios from 'axios';
import {useStorage} from '../library/storage/Storage';
import {USER} from '../library/contants';
import Toast from 'react-native-simple-toast';

export const UserLogin = async (payload) => {

  try {
    const response = await axios.post(
      'https://trafficviolationapi-production.up.railway.app/api/login',
      payload,
    );
    await useStorage.setItem(USER.ACCESS_TOKEN, response.data.token);
    await useStorage.setItem(
      USER.USER_DATA,
      JSON.stringify(response.data.user),
    );
    return response.data;
  } catch (error) {
    return Toast.showWithGravity(
      error.response.data.message,
      Toast.LONG,
      Toast.CENTER,
    );
  }
};

export const UpdateProfile = async (payload, id) => {
  const token = await useStorage.getItem(USER.ACCESS_TOKEN);
  try {
    // await useStorage.removeItem(USER.USER_DATA)
    const response = await axios.put(
      `https://trafficviolationapi-production.up.railway.app/api/update-user/${id}`,
      payload,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
    await useStorage.setItem(
      USER.USER_DATA,
      JSON.stringify(response.data),
    );
    Toast.showWithGravity(
      'Successfully Updated',
      Toast.LONG,
      Toast.CENTER,
    );
    return response.data;
  } catch (error) {
    return Toast.showWithGravity(
      error.response.data.message,
      Toast.LONG,
      Toast.CENTER,
    );
  }
};

export const ChangePassword = async (payload, id) => {
  const token = await useStorage.getItem(USER.ACCESS_TOKEN);
  try {
    // await useStorage.removeItem(USER.USER_DATA)
    const response = await axios.post(
      'https://trafficviolationapi-production.up.railway.app/api/change-password',
      payload,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );

    Toast.showWithGravity(
      response.data.message,
      Toast.LONG,
      Toast.CENTER,
    );
    return response.data;
  } catch (error) {
    return Toast.showWithGravity(
      error.response.data.message,
      Toast.LONG,
      Toast.CENTER,
    );
  }
};

export const ForgotPassword = async (payload) => {
  const token = await useStorage.getItem(USER.ACCESS_TOKEN);
  try {
    // await useStorage.removeItem(USER.USER_DATA)
    const response = await axios.post(
      'https://trafficviolationapi-production.up.railway.app/api/forgot-password-otp',
      payload,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );

    Toast.showWithGravity(
      response.data.message,
      Toast.LONG,
      Toast.CENTER,
    );
    return response.data;
  } catch (error) {
    return Toast.showWithGravity(
      error.response.data.message,
      Toast.LONG,
      Toast.CENTER,
    );
  }
};

export const ResetPassword = async (payload) => {
  const token = await useStorage.getItem(USER.ACCESS_TOKEN);
  try {
    // await useStorage.removeItem(USER.USER_DATA)
    const response = await axios.post(
      'https://trafficviolationapi-production.up.railway.app/api/reset-password-otp',
      payload,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );

    Toast.showWithGravity(
      response.data.message,
      Toast.LONG,
      Toast.CENTER,
    );
    return response.data;
  } catch (error) {
    return Toast.showWithGravity(
      error.response.data.message,
      Toast.LONG,
      Toast.CENTER,
    );
  }
};

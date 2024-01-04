/* eslint-disable prettier/prettier */
import axios from 'axios';
import {useStorage} from '../library/storage/Storage';
import {USER} from '../library/contants';
import Toast from 'react-native-simple-toast';

export const FetchAllMake = async () => {
  try {
    const token = await useStorage.getItem(USER.ACCESS_TOKEN);
    const response = await axios.get('https://trafficviolationapi-production.up.railway.app/api/make', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return Toast.showWithGravity(
      error.response.data.message,
      Toast.LONG,
      Toast.CENTER,
    );
  }
};

export const FetchAllClass = async () => {
    try {
      const token = await useStorage.getItem(USER.ACCESS_TOKEN);
      const response = await axios.get('https://trafficviolationapi-production.up.railway.app/api/class', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return Toast.showWithGravity(
        error.response.data.message,
        Toast.LONG,
        Toast.CENTER,
      );
    }
  };

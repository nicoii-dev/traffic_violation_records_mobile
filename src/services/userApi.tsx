import axios from 'axios';
import {useStorage} from '../library/storage/Storage';
import {USER} from '../library/contants';
import Toast from 'react-native-simple-toast';
import {loadingStart, loadingFinish} from '../store/loader/reducers';

export const UserLogin = async (payload) => {

  try {
    const response = await axios.post(
      'http://127.0.0.1:8000/api/login',
      payload,
    );
    await useStorage.setItem(USER.ACCESS_TOKEN, response.data.token);
    await useStorage.setItem(
      USER.USER_DATA,
      JSON.stringify(response.data.user),
    );
    return response.data;
  } catch (error: any) {
    return Toast.showWithGravity(
      error.response.data.message,
      Toast.LONG,
      Toast.CENTER,
    );
  }
};

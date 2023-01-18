import {createSlice} from '@reduxjs/toolkit';
import { USER } from '../library/contants';
import { useStorage } from '../library/storage/Storage';
import { loginApi } from '../services/userApi';
import Toast from 'react-native-simple-toast';

const initialState = {
    user: []
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoginAction: (state, action) => async () => {
        console.log(action)
        return await loginApi(action.payload)
        .then(async response => {
          try {
            if (response) {
              const {token, message, data, success} = response;
              await useStorage.setItem(USER.ACCESS_TOKEN, token);
              const fcmToken = await useStorage.getItem(USER.FCM_TOKEN);
              Toast.showWithGravity(message, Toast.SHORT, Toast.CENTER);
              if (success) {
               console.log(response)
              }
              return {
                ...state,
                user: response,
              }
            }
          } catch (error) {
            console.log(error);
          }
        })
        // .finally(() => {
        //   dispatch(asyncFinish());
        // });
    },
  
  },
});
export const {userLoginAction} = authSlice.actions;
export default authSlice.reducer;

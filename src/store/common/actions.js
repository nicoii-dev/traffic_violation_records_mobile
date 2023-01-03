import {SET_LOADING} from './constants';

export const setLoading = payload => {
  return {
    type: SET_LOADING,
    payload: payload,
  };
};

export const asyncStart = payload => {
  return {
    type: SET_LOADING,
    payload: true,
  };
};

export const asyncFinish = payload => {
  return {
    type: SET_LOADING,
    payload: false,
  };
};

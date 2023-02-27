import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    loadingStart: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    loadingFinish: (state) => {
      return {
        ...state,
        isLoading: false,
      };
    },
  },
});
export const {loadingStart, loadingFinish} = loaderSlice.actions;
export default loaderSlice.reducer;

/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  violatorDetails: [],
};

const violatorSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setViolatorDetails: (state, action) => {
      return {
        ...state,
        violatorDetails: action.payload,
      };
    },
    removeViolatorDetails: (state) => {
      return {
        ...state,
        violatorDetails: [],
      };
    },
  },
});
export const {setViolatorDetails, removeViolatorDetails} = violatorSlice.actions;
export default violatorSlice.reducer;

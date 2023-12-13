/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  vehicles: [],
};

const vehicleSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {
    setVehicles: (state, action) => {
      return {
        ...state,
        vehicles: action.payload,
      };
    },
  },
});
export const {setVehicles} = vehicleSlice.actions;
export default vehicleSlice.reducer;

/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import citationSlice from './citation/reducers';
import loaderSlice from './loader/reducers';
import violatorSlice from './violator/reducers';
import vehicleSlice from './vehicle/reducers';

const store = configureStore({
  reducer: {
    citation: citationSlice,
    loader: loaderSlice,
    violator: violatorSlice,
    vehicles: vehicleSlice,
  },
});

export default store;

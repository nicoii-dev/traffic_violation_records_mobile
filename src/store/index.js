import {configureStore} from '@reduxjs/toolkit';
import citationSlice from './citation/reducers';
import loaderSlice from './loader/reducers';

const store = configureStore({
  reducer: {
    citation: citationSlice,
    loader: loaderSlice,
  },
});

export default store;

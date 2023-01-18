import { configureStore } from '@reduxjs/toolkit'
import citationSlice from './citation/reducers'
import authSlice from './auth';

const store = configureStore({
  reducer: {
    citation: citationSlice,
    auth: authSlice,
  }
})

export default store

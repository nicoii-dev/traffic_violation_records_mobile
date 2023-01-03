import { configureStore } from '@reduxjs/toolkit'
import citationSlice from './citation/reducers'

const store = configureStore({
  reducer: {
    citation: citationSlice
  }
})

export default store

import { configureStore } from '@reduxjs/toolkit'
import  value  from './slice'
export const store = configureStore({
  reducer: {
    value 
  },
})
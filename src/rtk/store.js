import { configureStore } from '@reduxjs/toolkit'
import bankReducer from './slices/bank_slice.jsx'
import productReducer from './slices/productsSlices.jsx'
export const store = configureStore({
  reducer: {
    bank:bankReducer,
    product:productReducer,
  },
})

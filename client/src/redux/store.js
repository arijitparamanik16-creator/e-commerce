import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import productReducer from './productSlice'

export const store = configureStore({
  reducer: {
    cart : cartReducer ,
    // cartReducer  returns a update state of a specific slice
    product : productReducer
},
})
import { createSlice } from "@reduxjs/toolkit";
import { all_items } from "../all_items";

export const ProductSlice = createSlice({
  name: "Product_details",
  initialState: all_items,
  reducers: {
   
  },
});


export default ProductSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    // An arrow function reducer
    AddItem: (state, action) => {
      state.push(action.payload);
      // state is initialState array and action.payload is an argument which the use to push in the array
      alert(`${action.payload.name} is added to your cart `)

    },
    RemoveItem: (state, action) => {
      let x = confirm(`Are you sure to delete this item from your cart!`);
      if (x) {
        const index = state.findIndex((item) => item.id === action.payload);
        // here action.payload = passed id
        // index stores id, if passed id matched

        if (index !== -1) {
          state.splice(index, 1);
          //  delete the index only 1 time
        }
      }
    },

    RemoveAllItem: (state) => {
      let x = confirm(`Are you sure to delete all the items from your cart!`);
      if (x) {
        state.splice(0, state.length);
      }
    },
  },
});

export const { AddItem, RemoveItem, RemoveAllItem } = cartSlice.actions;
// first destructed the reducer and the fn now can be used in any Component

export default cartSlice.reducer;

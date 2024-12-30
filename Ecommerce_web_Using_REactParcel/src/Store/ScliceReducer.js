import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [], // Fixed typo in `initialState` and property name
    },
    reducers: { // Fixed spelling of `reducers`
        addItem: (state, action) => {
            state.cartItems.push(action.payload)
        },
        removeItem: (state, action) => {
            state.cartItems.pop();
        },
        clearItem: (state, action) => {
            // Logic for clearing item(s)
            state.cartItems.length=0;
        },
    },
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;

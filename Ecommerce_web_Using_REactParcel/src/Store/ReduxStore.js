import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./ScliceReducer";

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store;

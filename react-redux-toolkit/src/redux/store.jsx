import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice";  // Make sure filename is correct
import productsReducer from "./productSlice";  // Make sure filename is correct

const store = configureStore({
    reducer: {
        cart: cartReducer,   // ✅ Use your slice's reducer, NOT createReducer
        products: productsReducer   
    }
});

export default store;

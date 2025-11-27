import { createSlice } from "@reduxjs/toolkit";
const initialState={
    items:[]
}

const addToCart= createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem:(state,action)=>{
            //state.value+=1;
            console.log(action.payload);
            state.items.push(action.payload)
        },

        removeItem:(state)=>{
            if (state.value > 0) state.value -= 1;
        },

        clearCart:(state)=>{
            state.value =0;
        }
    }
})

export const {addItem,removeItem,clearCart} = addToCart.actions;
export default addToCart.reducer
import {createSlice} from '@reduxjs/toolkit';

const initialState = [];
const  cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action){
            state.push(action.payload)
        },

        // delete(state, action){
        //     state.pop(action.payload)
        // }
        //we can keep on adding actions like this
    }
});
  

export const {add} = cartSlice.actions;
export default cartSlice.reducer;
import {createSlice} from '@reduxjs/toolkit';

const initialState = [];
const  cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action){
            state.push(action.payload)
        },

        remove(state, action){
            return state.filter(item => item.id !== action.payload);
        },

        // delete(state, action){
        //     state.pop(action.payload)
        // }
        //we can keep on adding actions like this
    }
});
  

export const {add,remove} = cartSlice.actions;
export default cartSlice.reducer;
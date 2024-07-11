import {createSlice} from '@reduxjs/toolkit';

const initialState = [];
const  cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action){
            const {id} = action.payload;
            const existingProduct = state.find(item => item.id ===id);

            if(existingProduct) {
                existingProduct.quantity +=1;
            }
            else{
                state.push({...action.payload, quantity:1});
            }
            //state.push(action.payload)
        },

        remove(state, action){
            return state.filter(item => item.id !== action.payload);
        },
    }
});
  

export const {add,remove} = cartSlice.actions;
export default cartSlice.reducer;
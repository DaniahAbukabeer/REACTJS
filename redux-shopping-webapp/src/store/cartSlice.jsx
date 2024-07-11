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

        increment(state, action){
            const {id} = action.payload;
            const existingProduct = state.find(item=>item.id === id);

            if(existingProduct){
                existingProduct.quantity +=1;
            }
            else{
                state.push({...action.payload, quantity:1});
            }
        },

        decrement(state,action){
            const {id} = action.payload;
            const existingProduct = state.find(item => item.id ===id);

            if(existingProduct){
                if(existingProduct.quantity>1){
                    existingProduct.quantity -=1;
                }else{
                    return state.filter(item => item.id !==id);
                }
            }
        },
    }
});
  

export const {add,remove,increment,decrement} = cartSlice.actions;
export default cartSlice.reducer;
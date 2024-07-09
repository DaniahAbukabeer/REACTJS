import {configureStore} from "@reduxjs/toolkit";
import counterReducer from './counter/counterSlice';
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});


export const RootState = store.getState;
export const AppDispatch = store.dispatch;
//export type RootState = ReturnType<typeof store.getState>;
//export type AppDispatch = typeof store.dispatch;
//useful to have if we are using async methods 



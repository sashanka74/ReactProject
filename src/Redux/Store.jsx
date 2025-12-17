import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/CounterSlice'

export const Store = configureStore({
    reducer:{
       counter:counterReducer
    }
})
import { createSlice } from "@reduxjs/toolkit"

const CounterSlice =createSlice( {
        name : "Counter",
        initialState : 0,
        reducers :{
            INC:(State,action) => State+1,
            DEC:(State,action) => State-1
        }
})

export const {INC, DEC} = CounterSlice.actions;
export default CounterSlice.reducer


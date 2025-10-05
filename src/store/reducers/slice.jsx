import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData:null
}


const sliceData = createSlice({
    name:'data',
    initialState,
    reducers:{
         loaduser:(state, action)=>{
            
            state.data = action.payload
        },
    }
})

export const { loaduser } = sliceData.actions
export default sliceData.reducer
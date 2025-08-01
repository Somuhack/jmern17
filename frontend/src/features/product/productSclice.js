import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pname:"",
    pprice:0,
    pquantity:0,
    pdec:""
}
export const productSclice = createSlice({
    name:"product",
    initialState,
    reducers:{
          AddData:(state,action)=>{
            state.pname=action.payload.pname
            state.pprice=action.payload.pprice
            state.pquantity=action.payload.pquantity
            state.pdec=action.payload.pdec
          },
    }
})
export const { AddData,GetData}=productSclice.actions
export default productSclice.reducer
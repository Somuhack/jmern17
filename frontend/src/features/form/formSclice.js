import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
}
export const formtSclice = createSlice({
    name:"product",
    initialState,
    reducers:{
          AddData:(state,action)=>{
            state.name=action.payload.name
            state.email=action.payload.email
            state.password=action.payload.password
            state.confirmPassword=action.payload.confirmPassword
          },
    }
})
export const { AddData}=formtSclice.actions
export default formtSclice.reducer
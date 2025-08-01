import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  value: 10,
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        inc:(state)=>{
            state.value+=1
        },
        dec:(state)=>{
            state.value-=1 //state.value = state.value-1
        },
        incByvalue:(state,actions)=>{
            state.value= state.value+actions.payload
        }
    }
})
export const {inc,dec,incByvalue} = counterSlice.actions
export default counterSlice.reducer
import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../features/counter/counterSlice'
import { productSclice } from '../features/product/productSclice'
import { formtSclice } from '../features/form/formSclice'
export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        product:productSclice.reducer,
        signupform:formtSclice.reducer
    },
})
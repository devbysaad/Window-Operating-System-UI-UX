import { configureStore } from "@reduxjs/toolkit";
import slice from './reducers/slice'
export const store = configureStore({
    reducer: {
    slice: slice
    },
    devTools: true,
});  
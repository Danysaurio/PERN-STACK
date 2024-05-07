import { configureStore } from "@reduxjs/toolkit";

import { alertReducer } from "./alertSlice";
import { modalReducer } from "./modalSlice";

export const store = configureStore({
    reducer: {
        alert: alertReducer,
        modal: modalReducer
    }
})
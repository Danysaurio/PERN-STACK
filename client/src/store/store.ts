import { configureStore } from "@reduxjs/toolkit";

import { alertReducer } from "./alertSlice";
import { tasksReducer } from "./tasksSlice";

export const store = configureStore({
    reducer: {
        todos: tasksReducer,
        alert: alertReducer,
    }
})
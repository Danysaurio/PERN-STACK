
import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    list: []
  },
  reducers: {
    toggleTodo(state, action) {

    },
    fetchTasksSuccess(state, action) {
      console.log("🚀 ~ fetchTasksSuccess ~ action.payload;:", action.payload);

      state.list = action.payload;
    },
  },
});

export const { actions: tasksActions, reducer: tasksReducer } = tasksSlice;
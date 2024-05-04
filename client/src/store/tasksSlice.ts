
import { ListItemType, TasksState } from "@/Types";

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: TasksState = {
  list: [],
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    toggleTodo(state, action) {

    },
    fetchTasksSuccess(state, action: PayloadAction<ListItemType[]>) {
      state.list = action.payload;
    },
    addNewTask(state, action: PayloadAction<ListItemType>) {
      const newItem = action.payload;
      state.list.push(newItem);
    }
  },
});

export const { actions: tasksActions, reducer: tasksReducer } = tasksSlice;
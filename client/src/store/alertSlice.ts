
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface AlertState {
  show: boolean;
}

const initialState: AlertState = {
  show: false
}

const alertSlice = createSlice({
  name: 'Alert',
  initialState,
  reducers: {
    toggleAlert(state, action) {

    },
  },
});

export const { actions: alertActions, reducer: alertReducer } = alertSlice;
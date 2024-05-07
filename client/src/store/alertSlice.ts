
import { AlertType } from '@/components/Alert/Alert';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface AlertState {
  show: boolean;
  title: string;
  description?: string,
  type: AlertType
}

const initialState: AlertState = {
  show: false,
  title: '',
  description: '',
  type: 'info'

}

const alertSlice = createSlice({
  name: 'Alert',
  initialState,
  reducers: {
    showAlert(state, actions) {
      const { show, title, description, type }: AlertState = actions.payload;
      state.show = show;
      state.title = title;
      state.description = description;
      state.type = type;
    },
    closeAlert(state) {
      state.show = false;
      state.title = '';
      state.description = '';
      state.type = 'info';
    }
  },
});

export const { actions: alertActions, reducer: alertReducer } = alertSlice;
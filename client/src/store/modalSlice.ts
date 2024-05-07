
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface ModalState {
  id: string;
  show: boolean;
  title: string;
  description: string;
}

const initialState: ModalState = {
  id: '',
  show: false,
  title: '',
  description: '',
}

const modalSlice = createSlice({
  name: 'Modal',
  initialState,
  reducers: {
    showModal(state, action) {
      const { show, title, description, id } = action.payload;
      state.id = id;
      state.show = show;
      state.title = title;
      state.description = description;
    },
    closeModal(state) {
      state.id = '';
      state.show = false;
      state.title = '';
      state.description = '';
    }
  },
});

export const { actions: modalActions, reducer: modalReducer } = modalSlice;
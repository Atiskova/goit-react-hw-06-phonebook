import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',

  initialState,

  reducers: {
    addContact: {
      prepare: newContact => {
        return {
          payload: { ...newContact, id: nanoid() },
        };
      },
      reducer: (state, { payload }) => {
        state.items = [payload, ...state.items];
      },
    },
    deleteContact: (state, { payload }) => {
      state.items = state.items.filter(contact => contact.id !== payload);
    },
    filterChange: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { addContact, deleteContact, filterChange } =
  contactsSlice.actions;

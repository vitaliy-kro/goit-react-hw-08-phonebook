import { createSlice } from '@reduxjs/toolkit';
import { FilterState } from './interfaces';

const initialState: FilterState = { value: '' };
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

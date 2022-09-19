import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'light',
  selectedList: 'latest'
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    getTheme: (state) => {
      state.theme = JSON.parse(localStorage.getItem('theme'));
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem('theme', JSON.stringify(state.theme));
    },
    setSelectedList: (state, action) => {
      state.selectedList = action.payload;
    }
  }
});

export const { getTheme, setTheme, setSelectedList } = appSlice.actions;
export default appSlice.reducer;

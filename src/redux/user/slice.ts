import {createSlice} from '@reduxjs/toolkit';

import {fetchUser} from './operations';

import {IUser} from '../../types/User';

interface IUserState {
  item: IUser | null;
  loading: boolean;
  error: string | null;
}

const initialState: IUserState = {
  item: null,
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clear: state => {
      state.item = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.item = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.errorMessage || 'An error occurred';
      });
  },
});

export default usersSlice.reducer;

export const {clear} = usersSlice.actions;

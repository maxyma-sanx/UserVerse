import {createSlice} from '@reduxjs/toolkit';

import {fetchUsers} from './operations';

import {IUser} from '../../types/User';

interface IUserState {
  items: IUser[];
  loading: boolean;
  error: string | null;
}

const initialState: IUserState = {
  items: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.errorMessage || 'An error occurred';
      });
  },
});

export default usersSlice.reducer;

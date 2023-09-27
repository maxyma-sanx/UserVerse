import {createSlice} from '@reduxjs/toolkit';

import {fetchPost} from './operations';

import {IPost} from '../../types';

interface IPostState {
  item: IPost | null;
  loading: boolean;
  error: string | null;
}

const initialState: IPostState = {
  item: null,
  loading: false,
  error: null,
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    clear: state => {
      state.item = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPost.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.item = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.errorMessage || 'An error occurred';
      });
  },
});

export default postSlice.reducer;

export const {clear} = postSlice.actions;

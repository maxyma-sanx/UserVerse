import {createSlice} from '@reduxjs/toolkit';

import {fetchPosts} from './operations';

import {IPost} from '../../types';

interface IPostState {
  items: IPost[];
  loading: boolean;
  error: string | null;
}

const initialState: IPostState = {
  items: [],
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.errorMessage || 'An error occurred';
      });
  },
});

export default postsSlice.reducer;

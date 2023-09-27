import {createAsyncThunk} from '@reduxjs/toolkit';

import {IPost} from '@/types';

import {fetchUserPosts} from '../../services/api';

export const fetchPosts = createAsyncThunk<
  IPost[],
  string,
  {rejectValue: {errorMessage: string}}
>('posts/fetch', async (userId, thunkAPI) => {
  try {
    const data = await fetchUserPosts(userId);

    return data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({errorMessage: error.message});
  }
});

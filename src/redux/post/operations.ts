import {createAsyncThunk} from '@reduxjs/toolkit';

import {IPost} from '@/types';

import {fetchPostInfo} from '../../services/api';

export const fetchPost = createAsyncThunk<
  IPost,
  string,
  {rejectValue: {errorMessage: string}}
>('post/fetch', async (postId, thunkAPI) => {
  try {
    const data = await fetchPostInfo(postId);

    return data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({errorMessage: error.message});
  }
});

import {createAsyncThunk} from '@reduxjs/toolkit';

import {IUser} from '@/types';

import {fetchUserInfo} from '../../services/api';

export const fetchUser = createAsyncThunk<
  IUser,
  string,
  {rejectValue: {errorMessage: string}}
>('user/fetch', async (userId, thunkAPI) => {
  try {
    const data = await fetchUserInfo(userId);

    return data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({errorMessage: error.message});
  }
});

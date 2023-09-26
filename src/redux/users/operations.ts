import {createAsyncThunk} from '@reduxjs/toolkit';

import {IUser} from '@/types';

import {fetchAllUsers} from '../../services/api';

export const fetchUsers = createAsyncThunk<
  IUser[],
  void,
  {rejectValue: {errorMessage: string}}
>('users/fetch', async (_, thunkAPI) => {
  try {
    const data = await fetchAllUsers();

    return data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({errorMessage: error.message});
  }
});

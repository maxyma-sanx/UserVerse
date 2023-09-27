import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';

import usersReducer from './users/slice';
import userReducer from './user/slice';
import postsReducer from './posts/slice';
import postReducer from './post/slice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    user: userReducer,
    posts: postsReducer,
    post: postReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

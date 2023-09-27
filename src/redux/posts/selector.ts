import {IPost} from '../../types';
import {RootState} from '../store';

export const getPosts = (store: RootState): IPost[] => store.posts.items;
export const getPostsLoading = (store: RootState): boolean =>
  store.posts.loading;
export const getPostsError = (store: RootState): string | null =>
  store.posts.error;

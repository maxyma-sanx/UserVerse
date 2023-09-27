import {IPost} from '../../types';
import {RootState} from '../store';

export const getPost = (store: RootState): IPost | null => store.post.item;
export const getPostLoading = (store: RootState): boolean => store.post.loading;
export const getPostError = (store: RootState): string | null =>
  store.post.error;

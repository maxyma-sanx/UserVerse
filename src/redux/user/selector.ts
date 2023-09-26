import {IUser} from '../../types/User';
import {RootState} from '../store';

export const getUser = (store: RootState): IUser | null => store.user.item;
export const getUserLoading = (store: RootState): boolean => store.user.loading;
export const getUserError = (store: RootState): string | null =>
  store.user.error;

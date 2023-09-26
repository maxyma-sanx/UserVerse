import {IUser} from '../../types/User';
import {RootState} from '../store';

export const getUsers = (store: RootState): IUser[] => store.users.items;
export const getUsersLoading = (store: RootState): boolean =>
  store.users.loading;
export const getUsersError = (store: RootState): string | null =>
  store.users.error;

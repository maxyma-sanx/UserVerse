import {IUser} from '../../types/User';
import {RootState} from '../store';

export const getUsers = (store: RootState): IUser[] => store.users.items;

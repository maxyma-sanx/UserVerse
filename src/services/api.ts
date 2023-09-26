import axios from 'axios';

import {IPost, IUser} from '@/types';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const fetchAllUsers = async (): Promise<IUser[]> => {
  const {data} = await instance.get('/users');

  return data;
};

export const fetchUserInfo = async (userId: string): Promise<IUser> => {
  const {data} = await instance.get(`/users/${userId}`);

  return data;
};

export const fetchUserPosts = async (userId: string): Promise<IPost[]> => {
  const {data} = await instance.get(`/users/${userId}/posts`);

  return data;
};

export const fetchPostInfo = async (postId: string): Promise<IPost> => {
  const {data} = await instance.get(`/posts/${postId}`);

  return data;
};

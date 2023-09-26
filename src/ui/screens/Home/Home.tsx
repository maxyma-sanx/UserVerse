import React, {FC, useEffect} from 'react';
import {Text} from 'react-native';

import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {fetchUsers} from '../../../redux/users/operations';
import {getUsers} from '../../../redux/users/selector';

import {Container} from './Home.styled';

const Home: FC = () => {
  const users = useAppSelector(getUsers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  console.log(users);

  return (
    <Container>
      <Text>Home</Text>
    </Container>
  );
};

export default Home;

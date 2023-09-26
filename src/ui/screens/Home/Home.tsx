import React, {FC, useEffect} from 'react';
import {Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useAppDispatch} from '../../../redux/hooks';
import {fetchUsers} from '../../../redux/users/operations';

import {Container} from './Home.styled';
import {NavigationProp} from '@/types/NavigationProp';

const Home: FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleUserClick = (userId: string) => {
    navigation.navigate('User', {userId});
  };

  return (
    <Container>
      <Text>Home</Text>
      <Button
        title="sодробнее о пользователе"
        onPress={() => handleUserClick('1')}
      />
    </Container>
  );
};

export default Home;

import React, {FC, useEffect} from 'react';
import {Dimensions, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {fetchUsers} from '../../../redux/users/operations';

import {
  CardButton,
  CardButtonText,
  CardEmail,
  CardIcon,
  CardTitle,
  CardWrapper,
  Title,
} from './Home.styled';

import {NavigationProp} from '@/types/NavigationProp';

import {getUsers} from '../../../redux/users/selector';
import {CARD_MARGIN, NUM_COLUMNS} from '../../../constants';
import {Container} from '../../components';

const Home: FC = () => {
  const users = useAppSelector(getUsers);
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleUserClick = (userId: string) => {
    navigation.navigate('User', {userId});
  };

  const windowWidth = Dimensions.get('window').width;
  const cardWidth = windowWidth / NUM_COLUMNS - 2 * CARD_MARGIN;

  return (
    <Container>
      <Title>Users list</Title>
      <FlatList
        data={users}
        numColumns={2}
        renderItem={({item}) => {
          return (
            <CardWrapper style={{width: cardWidth, margin: CARD_MARGIN}}>
              <CardIcon name="user-circle-o" size={40} color="#007ab9" />
              <CardTitle>{item.name}</CardTitle>
              <CardEmail>{item.email}</CardEmail>
              <CardButton onPress={() => handleUserClick(item.id.toString())}>
                <CardButtonText>More</CardButtonText>
              </CardButton>
            </CardWrapper>
          );
        }}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
};

export default Home;

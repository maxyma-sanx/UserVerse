import React, {FC, useEffect} from 'react';
import {Text, Button} from 'react-native';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';

import {fetchUser} from '../../../redux/user/operations';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {getUser} from '../../../redux/user/selector';
import {clear} from '../../../redux/user/slice';
import {Container} from '../../components/';

type RootStackParamList = {
  User: {userId: string};
};

type UserScreenRouteProp = RouteProp<RootStackParamList, 'User'>;

const User: FC = () => {
  const route = useRoute<UserScreenRouteProp>();
  const {userId} = route.params;
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(getUser);

  console.log('userInfo', userInfo);

  useEffect(() => {
    dispatch(fetchUser(userId));
  }, [dispatch, userId]);

  return (
    <Container>
      <Button
        title="Go back"
        onPress={() => {
          navigation.goBack();
          dispatch(clear());
        }}
      />
      <Text>{userId}</Text>
    </Container>
  );
};

export default User;

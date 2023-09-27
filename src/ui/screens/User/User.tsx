import React, {FC, useEffect} from 'react';
import {Dimensions, FlatList, TouchableOpacity, Linking} from 'react-native';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {fetchUser} from '../../../redux/user/operations';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {getUser} from '../../../redux/user/selector';
import {clear} from '../../../redux/user/slice';
import {Container} from '../../components/';
import {fetchPosts} from '../../../redux/posts/operations';
import {getPosts} from '../../../redux/posts/selector';
import {
  CardButton,
  CardButtonText,
  CardEmail,
  CardIcon,
  CardTitle,
  CardWrapper,
  HeaderWrapper,
  IconContainer,
  PostsTitle,
  Title,
  UserInfoContainer,
  UserText,
  UserTitle,
} from './User.styled';
import {CARD_MARGIN, NUM_COLUMNS, TEXT_LENGTH} from '../../../constants';
import {NavigationProp} from '@/types/NavigationProp';

type RootStackParamList = {
  User: {userId: string};
};

type UserScreenRouteProp = RouteProp<RootStackParamList, 'User'>;

const User: FC = () => {
  const route = useRoute<UserScreenRouteProp>();
  const {userId} = route.params;
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(getUser);
  const userPosts = useAppSelector(getPosts);

  useEffect(() => {
    dispatch(fetchUser(userId));
    dispatch(fetchPosts(userId));
  }, [dispatch, userId]);

  const handleUserClick = (postId: string) => {
    navigation.navigate('Post', {postId});
  };

  const windowWidth = Dimensions.get('window').width;
  const cardWidth = windowWidth / NUM_COLUMNS - 2 * CARD_MARGIN;

  const handlePress = (url: string) => {
    Linking.openURL(url).catch(err => console.error('An error occurred:', err));
  };

  const getHeader = () => {
    return (
      <>
        <HeaderWrapper>
          <Title>User info</Title>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
              dispatch(clear());
            }}>
            <Icon name="arrow-circle-left" size={35} color="#8549fb" />
          </TouchableOpacity>
        </HeaderWrapper>
        <UserInfoContainer>
          <IconContainer>
            <Icon name="user" size={30} color="#1f2328" />
          </IconContainer>
          <UserTitle>{userInfo?.name}</UserTitle>
        </UserInfoContainer>

        <UserInfoContainer>
          <IconContainer>
            <Icon name="envelope" size={25} color="#1f2328" />
          </IconContainer>
          <UserText>{userInfo?.email}</UserText>
        </UserInfoContainer>

        <UserInfoContainer>
          <IconContainer>
            <Icon name="mobile" size={40} color="#1f2328" />
          </IconContainer>
          <UserText>{userInfo?.phone}</UserText>
        </UserInfoContainer>

        <UserInfoContainer>
          <IconContainer>
            <Icon name="github" size={30} color="#1f2328" />
          </IconContainer>
          <TouchableOpacity
            onPress={() => handlePress('https://github.com/maxyma-sanx')}>
            <UserText>{userInfo?.website}</UserText>
          </TouchableOpacity>
        </UserInfoContainer>

        <UserInfoContainer>
          <IconContainer>
            <Icon name="briefcase" size={25} color="#1f2328" />
          </IconContainer>
          <UserText>{userInfo?.company.name}</UserText>
        </UserInfoContainer>
        <PostsTitle>Posts</PostsTitle>
      </>
    );
  };

  return (
    <Container>
      <FlatList
        data={userPosts}
        numColumns={2}
        renderItem={({item}) => {
          return (
            <CardWrapper style={{width: cardWidth, margin: CARD_MARGIN}}>
              <CardIcon name="newspaper-o" size={40} color="#007ab9" />
              <CardTitle>{item.title}</CardTitle>
              <CardEmail>
                {item.body.length > TEXT_LENGTH
                  ? item.body.slice(0, TEXT_LENGTH) + '...'
                  : item.body}
              </CardEmail>
              <CardButton onPress={() => handleUserClick(item.id.toString())}>
                <CardButtonText>More</CardButtonText>
              </CardButton>
            </CardWrapper>
          );
        }}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={getHeader}
      />
    </Container>
  );
};

export default User;

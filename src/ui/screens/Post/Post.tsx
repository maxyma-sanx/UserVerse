import React, {FC, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {HeaderWrapper, Title, UserText} from './Post.styled';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NavigationProp} from '@/types/NavigationProp';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Container} from '../../../ui/components';
import {fetchPost} from '../../../redux/post/operations';
import {getPost} from '../../../redux/post/selector';
import {clear} from '../../../redux/post/slice';
import {PostsTitle} from '../User/User.styled';

type RootStackParamList = {
  Post: {postId: string};
};

type UserScreenRouteProp = RouteProp<RootStackParamList, 'Post'>;

const Post: FC = () => {
  const route = useRoute<UserScreenRouteProp>();
  const {postId} = route.params;
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useAppDispatch();
  const postInfo = useAppSelector(getPost);

  useEffect(() => {
    dispatch(fetchPost(postId));
  }, [dispatch, postId]);

  return (
    <Container>
      <HeaderWrapper>
        <Title>Post info</Title>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
            dispatch(clear());
          }}>
          <Icon name="arrow-circle-left" size={35} color="#8549fb" />
        </TouchableOpacity>
      </HeaderWrapper>
      <PostsTitle>{postInfo?.title}</PostsTitle>
      <UserText>{postInfo?.body}</UserText>
    </Container>
  );
};

export default Post;

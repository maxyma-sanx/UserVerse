import React, {FC} from 'react';
import {ActivityIndicator} from 'react-native';
import {OverlayWrapper} from './Overlay.styled';
import {useAppSelector} from '../../../../redux/hooks';
import {getUserLoading} from '../../../../redux/user/selector';
import {getUsersLoading} from '../../../../redux/users/selector';
import {getPostsLoading} from '../../../../redux/posts/selector';
import {getPostLoading} from '../../../../redux/post/selector';

const Container: FC = () => {
  const userLoading = useAppSelector(getUserLoading);
  const usersLoading = useAppSelector(getUsersLoading);
  const postsLoading = useAppSelector(getPostsLoading);
  const postLoading = useAppSelector(getPostLoading);

  const isLoading = userLoading || usersLoading || postsLoading || postLoading;

  return (
    <>
      {isLoading && (
        <>
          <OverlayWrapper>
            <ActivityIndicator size="large" />
          </OverlayWrapper>
        </>
      )}
    </>
  );
};

export default Container;

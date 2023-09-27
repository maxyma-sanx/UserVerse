import React, {FC} from 'react';
import {ActivityIndicator} from 'react-native';
import {OverlayWrapper} from './Overlay.styled';
import {useAppSelector} from '../../../../redux/hooks';
import {getUserLoading} from '../../../../redux/user/selector';
import {getUsersLoading} from '../../../../redux/users/selector';
import {getPostsLoading} from '../../../../redux/posts/selector';

const Container: FC = () => {
  const userLoading = useAppSelector(getUserLoading);
  const usersLoading = useAppSelector(getUsersLoading);
  const postsLoading = useAppSelector(getPostsLoading);

  const isLoading = userLoading || usersLoading || postsLoading;

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

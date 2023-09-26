import React, {FC} from 'react';
import {ActivityIndicator} from 'react-native';
import {OverlayWrapper} from './Overlay.styled';
import {useAppSelector} from '../../../../redux/hooks';
import {getUserLoading} from '../../../../redux/user/selector';
import {getUsersLoading} from '../../../../redux/users/selector';

const Container: FC = () => {
  const userLoading = useAppSelector(getUserLoading);
  const usersLoading = useAppSelector(getUsersLoading);

  const isLoading = userLoading || usersLoading;

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

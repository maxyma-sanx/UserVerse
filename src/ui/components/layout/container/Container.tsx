import React, {FC} from 'react';
import {Wrapper} from './Container.styled';

type ContainerPropsWithChildren = {
  children: React.ReactNode;
};

const Container: FC<ContainerPropsWithChildren> = ({children}) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;

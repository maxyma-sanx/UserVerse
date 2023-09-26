import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Home} from '../ui';

const Navigate: FC = () => {
  return (
    <NavigationContainer>
      <Home />
    </NavigationContainer>
  );
};

export default Navigate;

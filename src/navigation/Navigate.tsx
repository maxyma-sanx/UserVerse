import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {BottomMenu, HeaderMenu, Home, User} from '../ui';
import {Stack} from '../utils';

const Navigate: FC = () => {
  return (
    <NavigationContainer>
      <HeaderMenu />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="User"
          component={User}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      <BottomMenu />
    </NavigationContainer>
  );
};

export default Navigate;

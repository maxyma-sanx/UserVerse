import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableWithoutFeedback} from 'react-native';

import {Container, Logo} from './HeaderMenu.styled';
import {NavigationProp} from '@/types/NavigationProp';

const HeaderMenu: FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleLogoClick = () => {
    navigation.navigate('Home');
  };

  return (
    <Container>
      <TouchableWithoutFeedback onPress={handleLogoClick}>
        <Logo
          source={require('../../../../assets/images/logo.png')}
          resizeMode="contain"
        />
      </TouchableWithoutFeedback>
    </Container>
  );
};

export default HeaderMenu;

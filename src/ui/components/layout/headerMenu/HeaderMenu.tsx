import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';

import {Container, Logo} from './HeaderMenu.styled';
import {NavigationProp} from '@/types/NavigationProp';

const HeaderMenu: FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleLogoClick = () => {
    navigation.navigate('Home');
  };

  return (
    <Container>
      <TouchableOpacity onPress={handleLogoClick}>
        <Logo
          source={require('../../../../assets/images/logo.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </Container>
  );
};

export default HeaderMenu;

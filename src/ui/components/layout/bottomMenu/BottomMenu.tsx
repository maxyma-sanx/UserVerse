import React, {FC} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity, Linking} from 'react-native';
import {Container} from './BottomMenu.styled';

const BottomMenu: FC = () => {
  const handlePress = (url: string) => {
    Linking.openURL(url).catch(err => console.error('An error occurred:', err));
  };

  return (
    <Container>
      <TouchableOpacity
        onPress={() =>
          handlePress('https://www.linkedin.com/in/maksym-koralkov')
        }>
        <Icon name="linkedin" size={40} color="#007ab9" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handlePress('https://github.com/maxyma-sanx')}>
        <Icon name="github" size={40} color="#1f2328" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handlePress('https://t.me/maxyma')}>
        <Icon name="telegram" size={35} color="#28a7e8" />
      </TouchableOpacity>
    </Container>
  );
};

export default BottomMenu;

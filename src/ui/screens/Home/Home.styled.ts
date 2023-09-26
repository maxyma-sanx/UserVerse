import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Title = styled.Text`
  margin-bottom: 10px;
  margin-left: 5px;
  font-family: 'Karla-Bold';
  font-size: ${({theme}) => theme.fontSizes.xlarge};
  color: ${({theme}) => theme.colors.black};
`;

export const CardWrapper = styled.View`
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 20px;

  border: 1px solid ${({theme}) => theme.colors.accent};
  border-radius: 20px;

  overflow: hidden;
`;

export const CardIcon = styled(Icon)`
  align-self: center;
  margin-bottom: 10px;
`;

export const CardTitle = styled.Text`
  margin-bottom: 10px;
  font-family: 'Karla-Regular';
  font-size: ${({theme}) => theme.fontSizes.medium};
  color: ${({theme}) => theme.colors.black};
`;

export const CardEmail = styled.Text`
  margin-bottom: 10px;
  font-family: 'Karla-Regular';
  font-size: ${({theme}) => theme.fontSizes.small};
  color: ${({theme}) => theme.colors.black};
`;

export const CardButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 10px 40px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.accent};
`;

export const CardButtonText = styled.Text`
  font-family: 'Karla-Regular';
  font-size: ${({theme}) => theme.fontSizes.medium};
  color: ${({theme}) => theme.colors.white};
`;

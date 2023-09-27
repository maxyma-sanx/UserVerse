import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Title = styled.Text`
  font-family: 'Karla-Bold';
  font-size: ${({theme}) => theme.fontSizes.xxLarge};
  color: ${({theme}) => theme.colors.black};
`;

export const PostsTitle = styled.Text`
  margin-top: 5px;
  margin-left: 5px;
  margin-bottom: 10px;
  font-family: 'Karla-Bold';
  font-size: ${({theme}) => theme.fontSizes.xxLarge};
  color: ${({theme}) => theme.colors.black};
`;

export const HeaderWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;
  margin-bottom: 10px;
`;

export const UserTitle = styled.Text`
  font-family: 'Karla-Bold';
  font-size: ${({theme}) => theme.fontSizes.xlarge};
  color: ${({theme}) => theme.colors.black};
`;

export const UserInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

export const UserText = styled.Text`
  font-family: 'Karla-Regular';
  font-size: ${({theme}) => theme.fontSizes.large};
  color: ${({theme}) => theme.colors.black};
`;

export const CardWrapper = styled.View`
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

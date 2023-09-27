import styled from 'styled-components/native';

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

export const UserText = styled.Text`
  margin-left: 5px;
  font-family: 'Karla-Regular';
  font-size: ${({theme}) => theme.fontSizes.large};
  color: ${({theme}) => theme.colors.black};
`;

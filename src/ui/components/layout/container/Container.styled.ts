import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  padding-top: 10px;
  padding-bottom: 10px;

  border: 3px solid ${({theme}) => theme.colors.black};
  border-left-width: 0;
  border-right-width: 0;
  background-color: ${({theme}) => theme.colors.white};
`;

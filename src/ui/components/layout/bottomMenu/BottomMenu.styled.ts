import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px 20px;

  background-color: ${({theme}) => theme.colors.white};
`;

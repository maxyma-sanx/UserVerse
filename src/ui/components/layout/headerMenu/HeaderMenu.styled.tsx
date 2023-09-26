import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  background-color: ${({theme}) => theme.colors.white};
`;
export const Logo = styled.Image`
  max-width: 100%;
  width: 100%;
`;

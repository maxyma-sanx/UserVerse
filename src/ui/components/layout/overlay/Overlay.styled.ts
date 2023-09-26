import styled from 'styled-components/native';

export const OverlayWrapper = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  opacity: 0.3;
  background-color: ${({theme}) => theme.colors.black};
  z-index: 5;
`;

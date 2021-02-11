import styled from 'styled-components';
import { shade } from 'polished';

export const ButtonContainer = styled.button`
  background: #00984a;
  color: #fff;
  border-radius: 4px;
  padding: 8px 64px;
  width: 100%;

  &:hover {
    background: ${shade(.2, '#00984a')}
  }
`;

import styled from 'styled-components';
import { shade } from 'polished';

import theme from '@styles/theme';

export const ButtonContainer = styled.button`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  border-radius: 4px;
  padding: 12px 64px;
  width: 100%;
  transition: .2s;

  &:hover {
    background: ${shade(.2, theme.colors.primary)}
  }
`;

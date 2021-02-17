import styled, { css } from 'styled-components';
import { shade } from 'polished';

import theme from '../../../styles/theme';

interface IButtonProps  {
  color?: 'green' | 'yellow'
}

const colorsVariation = {
  green: css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};

    &:hover {
    background: ${shade(.2, theme.colors.primary)}
  }
  `,
  yellow: css`
    background: ${theme.colors.secondary};
    color: ${theme.colors.primaryDark};

    &:hover {
    background: ${shade(.2, theme.colors.secondary)};
  }
  `
}

export const ButtonContainer = styled.button<IButtonProps>`
  color: ${theme.colors.white};
  border-radius: 4px;
  padding: 12px 64px;
  width: 100%;
  transition: .2s;

  ${({ color }) => colorsVariation[color || 'green'] }
`;

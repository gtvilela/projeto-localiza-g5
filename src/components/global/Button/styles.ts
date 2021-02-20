import styled, { css } from 'styled-components';
import { shade } from 'polished';

import theme from '../../../styles/theme';

interface IButtonProps  {
  color?: 'green' | 'yellow' | 'red';
  size?: 'large' | 'medium';
  radius?: boolean;
  fullwidth?: boolean;
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
  `,
  red: css`
    background: ${theme.colors.error};
    color: ${theme.colors.white};

    &:hover {
      background: ${shade(.2, theme.colors.error)};
    }
  `
}

export const ButtonContainer = styled.button<IButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.white};
  transition: .2s;

  padding: ${({ size }) => size === 'large' ? css`12px 32px` : css`4px 16px` };

  padding: ${({ radius }) => radius  && css`8px 8px`};
  border-radius: ${({ radius }) => radius ? css`50%` : css`4px` };

  width: ${({ fullwidth }) => fullwidth && css`100%` };

  ${({ color }) => colorsVariation[color || 'green'] }
`;

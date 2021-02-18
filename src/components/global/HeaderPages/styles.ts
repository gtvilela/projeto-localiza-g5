import styled, { css } from 'styled-components';

import theme from '../../../styles/theme';

export const HeaderPagesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;

  border-bottom: 1px solid ${theme.colors.textLighter};

  @media (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 4px;
  }

  h1 {
    font-size: 24px;
    color: ${theme.colors.text};
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;

    @media (max-width: 768px) {
      margin-top: 16px;
    }

    @media (max-width: 425px) {
      gap: 16px;
      flex-direction: column;
    }
  }
`;

export const LinkCustom = styled.a`
  color: ${({ active }) => active ? theme.colors.text : theme.colors.textLighter};
  text-decoration: none;
  position: relative;


  &::after {
    content: '';
    width: ${({ active }) => active ? css`100%` : css`1px`};
    height: 2px;
    position: absolute;
    background: ${({ active }) => active ? theme.colors.primary : css`transparent`};
    bottom: -6px;
    left: 0;
    transition: .2s;
    border-radius: 4px;
  }

  &:hover {
    color: ${theme.colors.text};

    &::after {
    content: '';
      width: 100%;
      background: ${theme.colors.primary};
    }
  }
`;

import styled, { css } from 'styled-components';

interface IPropsTabContentContainer {
  active: boolean;
}

export const TabContentContainer = styled.div<IPropsTabContentContainer>`
  padding: 20px 0;
  display: none;
  transition: 1s;

  ${({ active }) =>
    active &&
    css`
      display: block;
    `};
`;
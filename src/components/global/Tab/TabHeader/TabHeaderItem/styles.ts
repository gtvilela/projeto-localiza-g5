import styled from 'styled-components';
import theme from '../../../../../styles/theme';

interface IPropsTabHeaderItemContainer {
  active: boolean;
}

export const TabHeaderItemContainer = styled.button<IPropsTabHeaderItemContainer>`
  font-weight: 500;
  color: ${({ active }) => (active ? theme.colors.text : theme.colors.textLighter)};
  background: transparent;
  text-transform: capitalize;
  position: relative;
  transition: 0.2s;

  &:hover {
    color: ${theme.colors.text};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${theme.colors.primary};
    border-radius: 4px;
    opacity: ${({ active }) => (active ? 1 : 0)};
    transition: 0.2s;
  }
`;

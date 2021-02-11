import styled from 'styled-components';

interface IPropsTabHeaderItemContainer {
  active: boolean;
}

export const TabHeaderItemContainer = styled.button<IPropsTabHeaderItemContainer>`
  font-weight: 500;
  color: ${({ active }) => (active ? '#3D3D4D' : '#a8a8b3')};
  background: transparent;
  text-transform: capitalize;
  position: relative;
  transition: 0.2s;

  &:hover {
    color: #3d3d4d;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 3px;
    background: #00984a;
    border-radius: 4px;
    opacity: ${({ active }) => (active ? 1 : 0)};
    transition: 0.2s;
  }
`;

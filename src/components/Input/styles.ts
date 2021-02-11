import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fff;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  color: #666360;

  display: flex;
  align-items: center;

  margin-bottom: 8px;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #00984a;
      border-color: #00984a;
      outline: none;
      transition: all 500ms ease;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #00984a;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #000;
    /* font-family: 'Roboto', sans-serif; */
    font-size: 1em;
    outline: none;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

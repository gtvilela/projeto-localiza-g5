import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fff;
  border-radius: 4px;
  width: 100%;
  border: 2px solid #fff;
  color: #666360;
  height: 48px;
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

    div {
      padding: 0 12px;
      border-right: 1px solid #a8a8b3;
      display: flex;
      height: 60%;
      align-items: center;
      justify-content: center;
      color: #a8a8b3;

      ${(props) =>
      props.isFilled &&
      css`
        color: #00984a;
      `}
    }

  input {
    width: 100%;
    background: transparent;
    border: 0;
    color: #000;
    outline: none;
    padding: 0 8px;

    &::placeholder {
      color: #666360;
    }
  }
`;

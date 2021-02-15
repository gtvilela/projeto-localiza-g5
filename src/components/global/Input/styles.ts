import styled, { css } from 'styled-components';

interface ContainerProps {
  isErrored: boolean;
  isFilled: boolean;
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  align-items: center;
  background: #fff;
  border: 2px solid #fff;
  border-radius: 4px;
  display: flex;
  height: 58px;
  margin-bottom: 48px;
  position: relative;
  width: 100%;

  label {
    color: #666360;
    margin-left: 17px;
    position: absolute;
  }

  input {
    background: transparent;
    border: 0;
    color: #000;
    font-size: 1em;
    margin-top: 12px;
    outline: none;
    padding: 0 16px;
    width: 100%;
  }

  ${(props) =>
    props.isFocused &&
    css`
      color: #00984a;
      border-color: #00984a;
      outline: none;
      transition: all 500ms ease;

      svg {
        color: #00984a;
      }

      label {
        font-size: 11px;
        left: 42px;
        position: absolute;
        transform: translateY(-12px);
        transition: transform 0.3s ease-in-out, font-size 0.3s ease-in-out;
      }
    `}

  ${(props) =>
    !props.isFocused &&
    css`
      label {
        font-size: 1em;
        left: 42px;
        transform: translateY(0px);
        transition: transform 0.3s ease-in-out, font-size 0.3s ease-in-out;
      }
    `}

  ${(props) =>
    props.isFilled &&
    css`
      label {
        font-size: 11px;
        left: 42px;
        transform: translateY(-12px);
      }
    `}

  .icon-container {
    align-items: center;
    border-right: 1px solid #a8a8b3;
    color: #a8a8b3;
    display: flex;
    height: 60%;
    justify-content: center;
    padding: 15px 12px;

    ${(props) =>
      props.isFilled &&
      css`
        color: #00984a;
      `}
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
`;

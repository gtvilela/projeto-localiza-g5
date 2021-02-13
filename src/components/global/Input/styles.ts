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
    props.isFocused
      ? css`
          color: #00984a;
          border-color: #00984a;
          outline: none;
          transition: all 500ms ease;

          svg {
            color: #00984a;
          }

          input::-webkit-input-placeholder {
            -webkit-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
          }

          input:valid::-webkit-input-placeholder {
            font-size: 11px;
            -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
            visibility: visible !important;
          }
        `
      : css`
          input::-webkit-input-placeholder {
            -webkit-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
          }

          input:valid::-webkit-input-placeholder {
            font-size: 1em;
            -webkit-transform: translateY(0px);
            transform: translateY(0px);
            visibility: visible !important;
          }
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
    padding: 0 16px;

    &::placeholder {
      color: #666360;
    }
  }
`;

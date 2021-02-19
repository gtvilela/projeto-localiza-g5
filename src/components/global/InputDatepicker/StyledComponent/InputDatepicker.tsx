import styled, { css } from 'styled-components';

import theme from '../../../../styles/theme';

interface ContainerProps {
  isErrored: boolean;
  isFilled: boolean;
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  align-items: center;
  background: ${theme.colors.white};
  border: 2px solid ${theme.colors.white};
  border-radius: 4px;
  display: flex;
  height: 58px;
  margin-bottom: 8px;
  position: relative;
  width: 100%;

  label {
    color: ${theme.colors.textLighter};
    margin-left: 17px;
    position: absolute;
  }

  input {
    background: transparent;
    border: 0;
    color: ${theme.colors.text};
    font-size: 1em;
    margin-top: 12px;
    outline: none;
    padding: 0 16px;
    width: 100%;
  }

  ${(props) =>
    props.isFocused &&
    css`
      color: ${theme.colors.primary};
      border-color: ${theme.colors.primary};
      outline: none;
      transition: all 500ms ease;

      svg {
        color: ${theme.colors.primary};
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
    border-right: 1px solid ${theme.colors.textLighter};
    color: ${theme.colors.textLighter};
    display: flex;
    height: 60%;
    justify-content: center;
    padding: 15px 12px;

    ${(props) =>
      props.isFilled &&
      css`
        color: ${theme.colors.primary};
      `}
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${theme.colors.error};
    `}
`;

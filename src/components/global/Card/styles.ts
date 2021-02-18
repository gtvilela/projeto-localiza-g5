import styled from 'styled-components';

import theme from '../../../styles/theme'

export const CardContainer = styled.a`
  background: ${theme.colors.white};
  border-radius: 4px;
  padding: 24px 48px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: .3s;
  text-decoration: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 31.3%;

  &:hover {
    border-color: ${theme.colors.primary};
    transform: translateY(-8px);
  }

  @media (max-width: 768px) {
    width: 48.5%;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`
export const CardDescription = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 18px;

  div {
    display: flex;
    flex-direction: column;

    span {
      color: ${theme.colors.textLighter};
      text-transform: uppercase;
    }

    strong {
      color: ${theme.colors.text};
      font-size: 24px;
      line-height: 32px;
      font-weight: 600;
    }
  }

  div:last-child {
    margin-left: 48px;

    strong {
      color: ${theme.colors.primary};
    }
  }
`

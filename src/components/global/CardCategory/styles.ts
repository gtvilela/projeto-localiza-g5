import styled from 'styled-components';

import theme from '../../../styles/theme'

export const CardContainer = styled.a`
  background: ${theme.colors.white};
  border-radius: 4px;
  padding: 24px 32px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: .3s;
  text-decoration: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  min-height: 322px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
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
  margin-top: 24px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    p {
      color: ${theme.colors.textLighter};
      font-size: 12px;
      text-align: center;
      margin-top: 4px;
    }

    strong {
      color: ${theme.colors.primary};
      font-size: 24px;
      line-height: 32px;
      font-weight: 600;
    }
  }
`

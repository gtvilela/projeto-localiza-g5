import styled from 'styled-components';

import theme from '@styles/theme'

export const CardContainer = styled.div`
 & + div {
    margin-top: 16px;
  }
`
export const CardContent = styled.div`
  background: ${theme.colors.white};
  border-radius: 4px;
  padding: 24px 48px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 24px 16px;
  }
`

export const CardDescription = styled.div`

  @media (max-width: 768px) {
    display: flex;
    gap: 32px;
    margin-bottom: 24px;
  }

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
    margin-top: 40px;

    @media (max-width: 768px) {
      margin-top: 0px;
    }

    strong {
      color: ${theme.colors.primary};
    }
  }
`

export const CardFooter = styled.div`
  background: ${theme.colors.white};
  border-radius: 4px;
  margin-top: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  span {
    color: ${theme.colors.textLighter};
    text-transform: uppercase;
    font-size: 12px;
    line-height: 16px;

    @media (max-width: 768px) {
      margin-bottom: 16px;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    strong {
      line-height: 24px;
      color: ${theme.colors.text};
    }

    svg {
      margin: 0 32px;

      @media (max-width: 768px) {
        margin: 0 16px;
      }
    }
  }
`


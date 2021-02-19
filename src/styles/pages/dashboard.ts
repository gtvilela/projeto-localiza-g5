import styled from 'styled-components';

import theme from '../../styles/theme'

export const Section = styled.div`
  min-height: 264px;
  background: url('/assets/header.jpg');
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${theme.colors.primaryDark};
`;

export const SectionContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 48px 16px 48px;
  color: #fff;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 425px) {
    flex-direction: column-reverse;
  }

    h1 {
      @media (max-width: 425px) {
      display: none;
    }

    form {
      max-width: 348px;

      @media (max-width: 425px) {
        max-width: 100%;
      }
    }
  }

`;

export const Content = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 48px 16px 24px;

  .button-filter {
    border-radius: 50%;
    padding: 20px;
  }
`

export const HeaderPag = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 8px;
  border-bottom: 1px solid ${theme.colors.textLighter};
  margin-bottom: 18px;

  @media (max-width: 425px) {
    flex-direction: column;
  }

  h2 {
    color: ${theme.colors.text};
    font-size: 24px;

    @media (max-width: 425px) {
      margin-bottom: 8px;
    }
  }

  span {
    color: ${theme.colors.textLighter}
  }
`;

export const BoxCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px 3%;

  @media (max-width: 768px) {
    gap: 16px 3%;
  }
`;

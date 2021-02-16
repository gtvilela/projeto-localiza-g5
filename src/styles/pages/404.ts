import styled from 'styled-components'

import theme from '@styles/theme'

export const Content = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 48px 16px 48px;
  text-align: center;

  h1 {
  color: ${theme.colors.primary};
  font-size: 144px;
  font-weight: 900;
  }

  h3 {
    color: ${theme.colors.secondary};
    font-size: 32px
  }

  p {
    color: ${theme.colors.textLighter};
  }
`;

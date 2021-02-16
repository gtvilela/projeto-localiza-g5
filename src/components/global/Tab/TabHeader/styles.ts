import styled from 'styled-components';

import theme from '@styles/theme'

export const TabHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${theme.colors.textLighter};
  gap: 32px;
`;

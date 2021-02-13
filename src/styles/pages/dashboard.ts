import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 48px 16px 24px;
`

export const BoxCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px 3%;

  @media (max-width: 768px) {
    gap: 16px 3%;
  }
`;

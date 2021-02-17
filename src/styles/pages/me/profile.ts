import styled from 'styled-components';

import theme from '../../../styles/theme'

export const Content = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 48px 16px 24px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 48px;

  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;
  }
`

export const BoxProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  max-width: 352px;

  @media (max-width: 425px) {
    width: 100%;
  }
`

export const ImageContainer = styled.div`
  margin-bottom: 48px;
  border: 4px solid ${theme.colors.primary};
  padding: 4px;
  border-radius: 50%;
  display: flex;
  background: ${theme.colors.white};
`
export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 32px;
  font-weight: 500;
  color: ${theme.colors.text};
`

export const BoxSchedules = styled.div`
  width: 50%;

  @media (max-width: 425px) {
    width: 100%;
  }
`

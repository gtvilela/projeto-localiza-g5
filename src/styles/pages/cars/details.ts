import styled from 'styled-components';

import theme from '../../../styles/theme';

export const DetailsContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 48px 16px 24px;
`;

export const HeaderDetails = styled.div`
  display: flex;
  flex-direction: row;
  gap: 123px;
  margin-bottom: 10px;

  .car-specification {
    display: flex;
    flex-direction: column;

    .model {
      font-weight: 500;
      font-style: normal;
      font-size: 24px;
      color: ${theme.colors.text};
      line-height: 32px;
    }
  }

  .info-price {
    display: flex;
    flex-direction: column;

    .price {
      font-weight: 700;
      font-style: normal;
      font-size: 24px;
      line-height: 32px;
      color: ${theme.colors.primary};
    }
  }

  @media (max-width: 452px) {
    justify-content: center;
    div {
      align-items: center;
    }
  }
`;

export const LabelHeader = styled.span`
  font-weight: 500;
  font-style: normal;
  font-size: 12px;
  line-height: 16px;
  color: ${theme.colors.textLighter};
  text-transform: uppercase;
`;

export const ContainerInfoCar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
  button {
    margin: 0 auto;
    a {
      text-decoration: none;
      color: #fff;
    }
  }

  @media (max-width: 452px) {
    flex-direction: column;
    justify-content: center;
    .imagem {
      margin: 0 auto;
      img {
        width: 300px;
        margin-bottom: 20px;
      }
    }
  }
`;

export const ContainerLabels = styled.div`
  width: 100%;
  max-width: 390px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;

  @media (max-width: 452px) {
    grid-template-columns: 1fr;

    div {
      margin: 0 auto;
    }
  }
`;

export const Label = styled.div`
  width: 219.05px;
  height: 64.31px;
  padding: 20px;
  background: ${theme.colors.white};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  text-align: center;
  display: flex;
  flex-direction: row;
  gap: 42px;

  @media (max-width: 452px) {
    width: 300px;
    align-items: center;
    justify-content: space-between;
    padding: 40px;
  }
`;

export const ContentDescription = styled.div`
  max-width: 440px;
  text-align: center;
  margin: 24px 0;
`;

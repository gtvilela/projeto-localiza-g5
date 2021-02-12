import styled from 'styled-components';

export const DetailsContainer = styled.div`
  max-width: 1500px;

  .header-break {
    margin: 12px 170px 0 161px;
    max-width: 1155px;
  }
`;

export const HeaderDetails = styled.div`
  display: flex;
  flex-direction: row;
  gap: 123px;
  margin-top: 48px;
  margin-left: 160px;

  .car-specification {
    display: flex;
    flex-direction: column;

    .model {
      font-weight: 500;
      font-style: normal;
      font-size: 24px;
      color: #3d3d4d;
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
      color: #00984a;
    }
  }
`;

export const LabelHeader = styled.span`
  font-weight: 500;
  font-style: normal;
  font-size: 12px;
  line-height: 16px;
  color: #a8a8b3;
`;

export const ContainerInfoCar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 60px;
  margin-right: 12%;

  .imagem {
    margin: 40px 40px 0;
  }
`;

export const ContainerLabels = styled.div`
  max-width: 390px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 40px;
  gap: 8px;
`;

export const Label = styled.div`
  width: 219.05px;
  height: 64.31px;
  padding: 20px;
  background: #ffffff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  text-align: center;
  display: flex;
  flex-direction: row;
  gap: 42px;
`;

export const TabContainer = styled.div`
  max-width: 450px;
  margin-top: 24px;
  padding: 0;

  .description {
    width: 444px;
  }
`;

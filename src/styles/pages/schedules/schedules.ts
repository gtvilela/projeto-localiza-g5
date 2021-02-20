import styled from 'styled-components';

export const ContainerSchedules = styled.div`
  margin: 0 auto;
  padding: 20px;
  max-width: 1120px;

  h1 {
    margin: 10px 0;
    font-size: 25px;

    @media (max-width: 814px) {
      text-align: center;
    }
    @media (max-width: 360px) {
      font-size: 20px;
      font-weight: bold;
    }
  }
`;
export const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 32px;
  min-width: 500px;
  align-items: center;

  @media (max-width: 814px) {
    justify-content: center;
  }

  @media (max-width: 360px) {
    flex-direction: column;
    min-width: 200px;
  }
`;

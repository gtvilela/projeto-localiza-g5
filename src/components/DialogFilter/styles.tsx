import styled from 'styled-components';

export const DialogContainer = styled.div`
  padding: 20px;
  max-width: 700px;

  .header {
    text-align: center;
  }

  .button-filter {
    padding-top: 20px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: 20px;
    button {
      min-width: 150px;
    }
  }
`;
export const ContainerFilters = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const TitleFilters = styled.p`
  font-weight: bold;
  padding: 20px 0;
`;

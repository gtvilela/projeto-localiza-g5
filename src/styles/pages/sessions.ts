import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  flex: 1;
  background: url('assets/background-sessions.jpg')
    no-repeat right;
    background-size: cover
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  padding: 0 16px;

  > div {
    max-width: 352px;
  }
`;

export const ContainerImage = styled.div`
  margin-bottom: 64px;
`;

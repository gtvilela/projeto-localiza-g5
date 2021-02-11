import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

export const Background = styled.div`
  flex: 1;
  background: url('https://source.unsplash.com/collection/1508295/1600x900')
    no-repeat center;
  background-size: cover;
`;

export const ContainerImage = styled.div`
  margin-bottom: 64px;
`;

import styled from 'styled-components';

export const CardContainer = styled.a`
  background: #fff;
  border-radius: 4px;
  padding: 24px 48px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: .3s;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 31.3%;

  &:hover {
    border-color: #00984A;
    transform: translateY(-8px);
  }

  @media (max-width: 768px) {
    width: 48.5%;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`
export const CardDescription = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 18px;

  div {
    display: flex;
    flex-direction: column;

    span {
      color: #A8A8B3;
      text-transform: uppercase;
    }

    strong {
      color: #3D3D4D;
      font-size: 24px;
      line-height: 32px;
      font-weight: 600;
    }
  }

  div:last-child {
    margin-left: 48px;

    strong {
      color: #00984A;
    }
  }
`

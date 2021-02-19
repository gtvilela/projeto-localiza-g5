import styled from 'styled-components'

interface ModalProps {
  toggle: boolean
}

export const ModalContainer = styled.div<ModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  display: ${({ toggle }) => (toggle ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`

export const ModalShadow = styled.div<ModalProps>`
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  width: 100%;
`

export const ModalWindow = styled.div`
  border: solid 1px transparent;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.backgroundApp};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.08);
  width: 90vw;
  z-index: 110;

  @media only screen and (min-width: 769px) {
    min-width: 540px;
    max-width: 600px;
  }

  > header,
  > main {
    padding: 20px 30px;
    max-height: 70vh;
    overflow: auto;
  }

  > header {
    border-bottom: solid 1px ${({ theme }) => theme.colors.textLighter};
    line-height: 1;
    position: relative;

    a {
      position: absolute;
      right: 30px;
      top: 20px;
      display: block;
      color: ${({ theme }) => theme.colors.primary};
      border-radius: 50%;
      width: 25px;
      text-align: center;

      :hover {
        background: ${({ theme }) => theme.colors.textLighter};
      }
    }

    svg {
      margin-top: 2px;
      margin-bottom: -1px;
    }
  }
`

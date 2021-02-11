import styled from 'styled-components';

export const HeaderContainer = styled.header`

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 92px;
  background: #00984A;
}
`;

export const LogoContainer = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;

    .logo-link {
      margin-left: 90px;
      margin-right: 40px;
    }

    .icon-voltar {
      display: flex;
      align-items: center;
      color: #fff;
      cursor: pointer;
      text-decoration:none;

      span {
        margin-left: 5px;
      }
    }
`;

export const UsuarioContainer = styled.div`
    margin-right: 40px;
`;

export const Usuario = styled.a`
  display: flex;
  align-items: center;
  flex-direction: row;
  cursor: pointer;

  .nome-usuario {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #fff;
    margin-right: 10px;
  }
`;


export const FotoPerfil = styled.div`
  width: 40px;
  height: 40px;
  background: #ACACAC;
  border-radius: 50%;
`;

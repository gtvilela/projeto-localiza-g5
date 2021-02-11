import styled from 'styled-components';
import theme from '../../styles/theme';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  text-decoration: none;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 92px;
    background: ${theme.colors.primary};
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

  .icon-vetor {
    display: flex;
    align-items: center;
    color: #fff;
    cursor: pointer;
    text-decoration: none;

    span {
      margin-left: 5px;
    }
  }
`;

export const UserContainer = styled.div`
  margin-right: 60px;
`;

export const User = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;

  .user-name {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #fff;
    margin-right: 10px;
  }
`;

export const ImageUser = styled.div`
  width: 40px;
  height: 40px;
  background: ${theme.colors.placeholder};
  border-radius: 50%;
`;

import styled, { css } from 'styled-components';
import theme from '@styles/theme';

export const HeaderContainer = styled.header`
  background: ${theme.colors.primary};
  height: 92px;

  .menu {
    display: flex;
    justify-content: flex-end;
    margin-right: 5%;

    @media(min-width: 1420px) {
     margin-right: 20%;
    }
  }

`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1120px;
  padding: 0 16px;
  margin: 0 auto;
  height: 100%;
`;

export const HeaderStart = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoContainer = styled.a`
 transition: .3s;

  &:hover {
    transform: scale(1.04);
  }
`;

export const ButtonBack = styled.div`
  margin-left: 64px;

  ${({ hidden }) => hidden &&
    css`
    display: none;
  `}

   a {
     text-decoration: none;
     color: ${theme.colors.white};
     display: flex;
     align-items: center;
     transition: .3s;
     position: relative;

     &::after {
       content: '';
       width: 1px;
       height: 2px;
       position: absolute;
       background: transparent;
       bottom: -4px;
       left: 0;
       transition: .2s;
       border-radius: 4px;
     }

     &:hover {
       transform: translateX(8px);

       &::after {
       content: '';
        width: 100%;
        background: ${theme.colors.white};
      }
     }



     svg {
       margin-right: 8px;
     }
   }
`;

export const HeaderEnd = styled.div``;

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
    color: ${theme.colors.white};
    margin-right: 10px;

    @media (max-width: 425px) {
      display: none;
    }
  }
`;

export const ImageUser = styled.div`
  width: 40px;
  height: 40px;
  background: ${theme.colors.primary};
  border: 2px solid ${theme.colors.white};
  padding: 2px;
  border-radius: 50%;

  .icon-user {
    border-radius: 50%;
  }
`;

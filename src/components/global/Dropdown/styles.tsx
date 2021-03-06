import styled from 'styled-components';
import theme from '../../../styles/theme';

export const DropdownContainer = styled.div`
  position: relative;
  z-index: 999;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  width: 250px;
  margin: 0;

  ul {
    padding: 0;
    margin: 0;

    li {
      list-style-type: none;
      outline: none;

      a, button {
        display: flex;
        justify-content: space-between;
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
        font-size: 16px;
        padding: 15px 20px 15px 20px;
        border: 0;
        border-bottom: 1px solid #ccc;
        width: 100%;
        text-align: center;
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
        text-decoration: none;

        span {
          color: #fff;
        }

        &:hover {
          cursor: pointer;
          font-weight: bold;
          background-color: ${theme.colors.secondary};
        }
      }
    }

  }

  @media (max-width: 596px) {
    width: 100%;
    margin: 0;
    position: relative;
  }
`;

import styled from 'styled-components';

import theme from '../../../styles/theme'

export const TableContainer = styled.table`


    width: 100%;
    border-spacing: 0 8px;
    margin-top: 16px;

    th {
      color: ${theme.colors.textLighter};
      font-weight: normal;
      padding: 0 32px;
      font-size: 16px;
      line-height: 24px;
      transition: color 0.5s;
    }

    td {
      padding: 20px 32px;
      border: 0;
      background: ${theme.colors.white};
      font-size: 16px;
      font-weight: normal;
      color: ${theme.colors.text};
      transition: background-color 0.4s color 0.4s;
    }

    td:first-child {
      border-radius: 8px 0 0 8px;
    }

    td:last-child {
      border-radius: 0 8px 8px 0;
    }

`;

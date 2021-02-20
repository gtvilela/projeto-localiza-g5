import React, { FC } from 'react';

import { TableContainer } from './styles';

const Table: FC = ({ children }) => {
  return (
    <TableContainer>
        {children}
    </TableContainer>
  )
}

export default Table;

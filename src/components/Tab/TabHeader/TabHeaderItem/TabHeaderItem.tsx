import React, { FC, ButtonHTMLAttributes } from 'react';
import { useTab } from '../../TabContext';

import { TabHeaderItemContainer } from './styles';

interface IPropsTabHeaderItem extends ButtonHTMLAttributes<HTMLButtonElement> {
  eventKey: number;
}

const TabHeaderItem: FC<IPropsTabHeaderItem> = ({ children, eventKey }) => {
  const { checkIsActive, handleButtonHeaderItem } = useTab();

  return (
    <TabHeaderItemContainer
      onClick={() => handleButtonHeaderItem(eventKey)}
      active={checkIsActive(eventKey)}
    >
      {children}
    </TabHeaderItemContainer>
  );
};

export default TabHeaderItem;

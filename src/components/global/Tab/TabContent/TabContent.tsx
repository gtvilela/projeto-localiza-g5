import React, { FC, HTMLAttributes } from 'react';
import { useTab } from '../TabContext';

import { TabContentContainer } from './styles';

interface IPropsTabContent extends HTMLAttributes<HTMLDivElement> {
  eventKey: number;
}

const TabContent: FC<IPropsTabContent> = ({ children, eventKey }) => {
  const { checkIsActive } = useTab();

  return (
    <TabContentContainer active={checkIsActive(eventKey)}>
      {children}
    </TabContentContainer>
  );
};

export default TabContent;

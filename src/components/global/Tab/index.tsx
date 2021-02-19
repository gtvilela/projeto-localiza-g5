import React from 'react';

import TabHeader from './TabHeader/TabHeader';
import TabHeaderItem from './TabHeader/TabHeaderItem/TabHeaderItem';
import TabContent from './TabContent/TabContent';

import { TabContainer } from './styles';

import { TabProvider } from './TabContext';

const Tab = ({ children }) => {
  return (
    <TabProvider>
      <TabContainer>{children}</TabContainer>
    </TabProvider>
  );
};

Tab.Header = TabHeader;
Tab.HeaderItem = TabHeaderItem;
Tab.Content = TabContent;

export default Tab;

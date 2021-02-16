import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useState,
} from 'react';

interface ITabContextData {
  active: number;
  checkIsActive(eventKey: number): boolean;
  handleButtonHeaderItem(eventKey: number): void;
}

const TabContext = createContext({} as ITabContextData);

const TabProvider: FC = ({ children }) => {
  const [active, setActive] = useState(0);

  const checkIsActive = useCallback(eventKey => eventKey === active, [active]);

  const handleButtonHeaderItem = useCallback(eventKey => {
    setActive(eventKey);
  }, []);

  return (
    <TabContext.Provider
      value={{ active, checkIsActive, handleButtonHeaderItem }}
    >
      {children}
    </TabContext.Provider>
  );
};

const useTab = (): ITabContextData => {
  const context = useContext(TabContext);

  if (!context) {
    throw new Error('useTab must be used within an TabProvider');
  }

  return context;
};

export { TabProvider, useTab };

import React, { FC, useState } from 'react';
import { IPropsDropdown } from './types';
import { DropdownContainer } from './styles';

const Dropdown: FC<IPropsDropdown> = ({ isOpen, items}) => {
  const [selection, setSelection] = useState({});


  const handleOnClick = (item) => {
    setSelection(item);
  };


  return (
    <DropdownContainer>
      {isOpen && (
        <ul className="dd-list">
          {items.map((item) => (
            <li key={item.id}>
              <button type="button" onClick={() => handleOnClick(item)}>
                <span>{item.value}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;

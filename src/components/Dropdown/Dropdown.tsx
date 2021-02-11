import React, { FC } from 'react';
import { IPropsDropdown } from './types';
import { DropdownContainer } from './styles';
import Link from 'next/link';

const Dropdown: FC<IPropsDropdown> = ({ isOpen, items}) => {

  return (
    <DropdownContainer>
      {isOpen && (
        <ul className="dd-list">
          {items.map((item) => (
            <li key={item.id}>
              <Link href={`/${item.value.toLowerCase()}`}>
              <a>
                <span>{item.value}</span>
              </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;

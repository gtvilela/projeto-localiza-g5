import React, { FC } from 'react';
import Link from 'next/link';

import { IPropsDropdown } from './types';
import { DropdownContainer } from './styles';
import { items } from './types/items';

const Dropdown: FC<IPropsDropdown> = ({ isOpen }) => {
  return (
    <DropdownContainer>
      {isOpen && (
        <ul className="dd-list">
          {items.map((item) => (
            <li key={item.id}>
              <Link href={`/${item.rota.toLowerCase()}/1`} passHref>
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

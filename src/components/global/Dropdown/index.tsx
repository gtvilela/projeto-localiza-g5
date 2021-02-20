import React, { FC } from 'react';
import Link from 'next/link';

import { useAuth } from '../../../context/auth';

import { IPropsDropdown } from './types';
import { DropdownContainer } from './styles';

const Dropdown: FC<IPropsDropdown> = ({ isOpen, setOpen }) => {
  const { signOut } = useAuth();

  const handleSignOut = () => {
    setOpen(false);
    signOut();
  }

  return (
    <DropdownContainer>
      {isOpen && (
        <ul className="dd-list">
          <li>
            <Link href={`/me/1`} passHref>
              <a>
                <span>Profile</span>
              </a>
            </Link>
            <Link href={`/me/1`} passHref>
              <a>
                <span>Agendamentos</span>
              </a>
            </Link>
            <button onClick={handleSignOut}>
              Sair
            </button>
          </li>
        </ul>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;

import Link from 'next/link';
import Image from 'next/image';
import React, { FC, useState } from 'react';
import { ImageUser, HeaderContainer, UserContainer, User, LogoContainer } from './style';
import { IPropsHeader } from './types/index';
import Dropdown from '../Dropdown/Dropdown';

const Header: FC<IPropsHeader> = ({ hidden = true, items}) => {

  const [open, setOpen] = useState(false);
  const toggle = (open: boolean) => setOpen(open);

  return (
    <HeaderContainer>
      <nav>
        <LogoContainer>
          <Link href="/">
            <a className="logo-link">
              <Image src="/assets/logo-localiza.svg" width={165} height={32} />
            </a>
          </Link>
          <div hidden={hidden}>
            <Link href="/">
              <a className="icon-vetor">
                <Image src="/assets/vetor.svg" width={16} height={16} />
               <span>Voltar</span>
              </a>
            </Link>
          </div>
        </LogoContainer>
        <UserContainer>
            <User
            tabIndex={0}
            role="button"
            onKeyPress={() => toggle(!open)}
            onClick={() => toggle(!open)}
            >
              <div className="user-name">Usuário</div>
              <ImageUser />
            </User>
        </UserContainer>
      </nav>
      <Dropdown isOpen={open} items={items} />
    </HeaderContainer>
  );
};


export default Header;

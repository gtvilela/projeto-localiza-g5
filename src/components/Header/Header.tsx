import Link from 'next/link';
import Image from 'next/image';
import React, { FC, useState, useRef, useEffect } from 'react';
import { ImageUser, HeaderContainer, UserContainer, User, LogoContainer } from './style';
import { IPropsHeader } from './types/index';
import Dropdown from '../Dropdown/Dropdown';

const Header: FC<IPropsHeader> = ({ hidden = true, items}) => {

  const [open, setOpen] = useState(false);
  const toggle = (open: boolean) => {setOpen(open)};
  const wrapperRef = useRef(null);

  function useOutsideAlerter(ref) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

useOutsideAlerter(wrapperRef);

  return (
    <HeaderContainer ref={wrapperRef}>
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
              <ImageUser>
                <Image className="icon-user" src="/assets/user.svg" width={35} height={35} />
              </ImageUser>
            </User>
        </UserContainer>
      </nav>
      <Dropdown isOpen={open} items={items} />
    </HeaderContainer>
  );
};


export default Header;
